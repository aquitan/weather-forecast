import React from 'react'
import './SideMenu.scss'

const SideMenu = ({children, isOpen}) => {
    const classes = ['side-menu']
    if (isOpen) {
        classes.push('side-menu-active')
    }
    return (
        <div className={classes.join(' ')}>
            {children}
        </div>
    )
}

export default SideMenu