import React from 'react'
import Accordeon from '../UI/Accordeon/Accordeon'
import AdditionalInfo from '../AdditionalInfo/AdditionalInfo'
import './Forecast.scss'

const Forecast = ({weatherObject}) => {
    const icon = `http://openweathermap.org/img/wn/${weatherObject.weather[0].icon}@2x.png`
   return (
       <div className="forecast">
           <h2>{weatherObject.name}, {weatherObject.sys.country}, {}</h2>
            <div className="row">
                <div className="col">
                    <h3>
                        <img className="forecast-icon" src={icon} alt=""/>
                        {Math.ceil(weatherObject.main.temp)}&deg;C
                    </h3>         
                </div>
                <div className="col">
                    <p>Ощущается как: {Math.ceil(weatherObject.main.feels_like)}&deg;C, влажность {weatherObject.main.humidity}%, {weatherObject.weather[0].description}</p>
                    <Accordeon>
                        <AdditionalInfo info={weatherObject}/>
                    </Accordeon>
                </div>
            </div>
       </div>
   )
}

export default Forecast