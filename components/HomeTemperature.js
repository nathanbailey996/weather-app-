import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai"
function HomeTemperature ({state}){ 
    const days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

const monthArray = ["January","February","March","April","May","June","July",
"August","September","October","November","December"]
    const dt = state.currentLocation.current.dt
const date = new Date(dt*1000)

const Day = days[date.getDay()]
const Weatherdate = date.getDate()
const month = monthArray[date.getMonth()]

const minTemp = state.currentLocation.daily[0].temp.min
const minFarhenheit = Math.round((minTemp -273.15)*9/5 +32) +"F"
const maxTemp = state.currentLocation.daily[0].temp.max
const maxFarhenheit = Math.round((maxTemp -273.15)*9/5 +32) +"F"
const currentTemp = state.currentLocation.current.temp
const currentFarhenheit = Math.round((currentTemp -273.15)*9/5 +32) +"F"

     
    return(
        <div className="home-temperature-container"> 
             <p style={{margin:"0"}}>{`${Day}, ${Weatherdate} ${month}`}</p>
            <div className="high-low-temp-container">
                <p className="temp-range-p"><AiOutlineArrowUp/> {state.degrees? Math.round(maxTemp-273)+"°": maxFarhenheit}</p>
                <p><AiOutlineArrowDown /> {state.degrees? Math.round(minTemp-273)+"°": minFarhenheit}</p>
            </div>
<div className="home-temp-icon-container">
<img src={`http://openweathermap.org/img/wn/${state.currentLocation.current.weather[0].icon}@2x.png`} alt="weather icon"/>
 <h1 style={{margin:"0"}}>{state.degrees? Math.round(currentTemp-273) + "°": currentFarhenheit}</h1>
            </div>
            <p className="home-temp-description">{state.currentLocation.current.weather[0].description}</p>
      

        </div> 
    )
}
export default HomeTemperature