import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import './Accordeon.scss'

const Accordeon = ({children}) => {
    const [isOpen, setOpen] = useState(false)
    const classes = ['accordeon-info']
    const styles = {
        cursor: 'pointer'    
    }
    if (isOpen) {
        classes.push('accordeon-open')
    }   
    
   return (
       <div>
           <FontAwesomeIcon 
           onClick={() => setOpen(!isOpen)}
           style={styles} 
           icon={faChevronDown}/>
           <div className={classes.join(' ')}>
                {children}
           </div>
       </div>
   )
}

export default Accordeon