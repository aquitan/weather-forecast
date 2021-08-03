import React, {useState, useEffect} from "react"
import Layout from "../../hoc/Layout"
import Forecast from "../Forecast/Forecast"
import Select from "../UI/Select/Select"
import Preloader from "../UI/Preloader/Preloader"
import SideMenu from "../SideMenu/SideMenu"
import Backdrop from "../UI/Backdrop/Backdrop"
import './App.scss'


const cities = ['London', 'Berlin', 'Moscow', 'Lipetsk', 'Kyiv', 'Kharkiv']

const App = () => {
    const [optionItem, setOption] = useState('London')
    const [weatherObject, setWeaterObject] = useState()
    const [isOpen, setOpen] = useState(false)
    function setCity(event) {
        setOption(event.target.value)
    }
    function onBackdropClick() {
        setOpen(!isOpen)
    }

    
    useEffect(() => {
        const url = `//api.openweathermap.org/data/2.5/weather?q=${optionItem}&appid=184af274226fbe924a4cbefd53581205&units=metric&lang=ru`
        async function getCity() {
            const response = await fetch(url)
            const data = await response.json()
            console.log(data)
            setWeaterObject(data)
        }
        getCity()
    }, [optionItem])


   return (
       <div className="app">
           <Layout>
                <Backdrop isOpen={isOpen} onBackdropClick={onBackdropClick}/>
                <SideMenu isOpen={isOpen}>
                    <Select
                    setCity={setCity}
                    optionItem={optionItem} 
                    cities={cities}/>
                </SideMenu>
                {
                    weatherObject ? 
                    <Forecast
                        weatherObject={weatherObject}
                    />
                    :
                    <Preloader/>
                }
           </Layout>
       </div>
   )
}

export default App