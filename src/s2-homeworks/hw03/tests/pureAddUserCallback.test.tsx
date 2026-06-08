import React from 'react'
import {pureAddUserCallback} from '../HW3'
import {pureAddUser, pureOnBlur, pureOnEnter} from "../GreetingContainer";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

let initialState: any[]
const setName = (a: any[]) => {
    initialState = a
}

beforeEach(() => {
    initialState = []
})

test('name 1', () => {
    pureAddUserCallback('name', setName, initialState)
    expect(initialState.length).toBe(1)
    expect(initialState[0].name).toBe('name')
    expect(!!initialState[0]._id).toBe(true)
})


test('name 2 - пустое имя показывает ошибку', () => {
    const setError = jest.fn()
    const setName = jest.fn()
    const addUserCallback = jest.fn()

    pureAddUser("", setError, setName, addUserCallback)

    expect(setError).toHaveBeenCalled()
    expect(addUserCallback).not.toHaveBeenCalled()
})

test('name 3 - имя есть добавляет юзера', () => {
    const setError = jest.fn()
    const setName = jest.fn()
    const addUserCallback = jest.fn()

    pureAddUser("Иван", setError, setName, addUserCallback)

    expect(addUserCallback).toHaveBeenCalledWith("Иван")
    expect(setName).toHaveBeenCalledWith("")
    expect(setError).not.toHaveBeenCalled()
})

test('name 4 - пустое имя показывает ошибку', () => {
    const setError = jest.fn()

    pureOnBlur("", setError)
    expect(setError).toHaveBeenCalled()
})

test('name 5 - когда имя есть, ', () => {
    const setError = jest.fn()

    pureOnBlur("", setError)
    expect(setError).toHaveBeenCalled()
})

test('name 6 - имя есть, ошибки нет, ', () => {
    const setError = jest.fn()

    pureOnBlur("Mary", setError)
    expect(setError).not.toHaveBeenCalled()
})


test('name 6 - если нажали кнопку Enter, ', () => {
    const addUser = jest.fn()

    pureOnEnter({key: "Enter"}, addUser)
    expect(addUser).toHaveBeenCalled()
})

test('name 7 - если нажали НЕ на кнопку Enter, ', () => {
    const addUser = jest.fn()

    pureOnEnter({key: "a"}, addUser)
    expect(addUser).not.toHaveBeenCalled()
})