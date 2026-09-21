import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            {...props}
            sx={{...props.sx,}}
            min={0}
            max={100}
            step={1}
            // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
