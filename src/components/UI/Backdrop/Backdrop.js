import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faMinus } from '@fortawesome/free-solid-svg-icons'
import './Backdrop.scss'

const Backdrop = ({onBackdropClick, isOpen}) => {
    const classes = ['backdrop-icon']
    if (isOpen) {
        classes.push('backdrop-icon-active')
    }
    return (
        <div className={classes.join(' ')}>
            {
                isOpen ? 
                <FontAwesomeIcon icon={faMinus} onClick={onBackdropClick}/>
                : 
                <FontAwesomeIcon icon={faBars} onClick={onBackdropClick}/>
            }
            
        </div>
    )
}

export default Backdrop
