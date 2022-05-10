import WeatherForecastItem from "./WeatherForecastItem"

function WeatherForecastSlider ({state}){
const weatherItems = state.currentLocation.hourly.map(hour=>{
    const unix = hour.dt
    const date = new Date(unix * 1000); 
    const hours = date.getHours()+(state.currentLocation.timezone_offset/3600-1)
    const formattedHours = hours<=0? hours+24: hours
    const AmORPm = formattedHours >=12? "pm": "am"
    let twelveHours = formattedHours%12  ||12
    const formattedTime = twelveHours+AmORPm
const temp = hour.temp
    const farhenheitTemp = Math.round((temp -273.15)*9/5 +32) +"F"

    return <WeatherForecastItem 
    key={Math.random()}
    topItem={formattedTime}
    icon={hour.weather[0].icon}
    description={hour.weather[0].description}
    temp={state.degrees? Math.round(hour.temp-273)+"°": farhenheitTemp}/>
})

const homeStyles = {
    backgroundColor:state.LightMode? "#78b1f9": "#252422"
  }

  const weatherClassName = state.LightMode? "weather-slider light-mode-weather-slider": "weather-slider dark-mode-weather-slider"


    return(
        <div className={weatherClassName} style={homeStyles}>{weatherItems}</div>
    )
}

export default WeatherForecastSlider