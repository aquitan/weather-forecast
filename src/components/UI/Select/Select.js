import React from 'react'
import './Select.scss'

const Select = (props) => {
    
    
    return(
        <div className="select-wrap">
            <div className="select-item">
                <label>Chosen city: {props.optionItem}</label>
                <select
                className='select form-select'
                onChange={(event) => props.setCity(event)} 
                value={props.optionItem}>
                    {props.cities.map((option, index) => {
                        return(
                            <option
                            key={index}>{option}</option>
                        )
                    })}
                </select>
            </div>
        </div>
    )
}

export default Select