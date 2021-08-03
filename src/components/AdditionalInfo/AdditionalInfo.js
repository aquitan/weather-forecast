import React from 'react'

const AdditionalInfo = ({info}) => {
    const styles = {
        fontSize: '14px',
        width: '250px'
    }
   return (
       <div style={styles} className="additional-indo">
           <div>Ветер {info.wind.speed} м/с</div>
           <div>Видимость {info.visibility} м</div>
           <div>Мин/Макс. {Math.ceil(info.main.temp_min)}/{Math.ceil(info.main.temp_max)} &deg;C</div>
       </div>
   )
}

export default AdditionalInfo