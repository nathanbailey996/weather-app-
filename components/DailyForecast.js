import WeatherForecastItem from "./WeatherForecastItem";

function DailyForecast ({state}){
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const dailySlider = state.currentLocation.daily.map(day=>{
    const date = new Date(day.dt *1000)
    const dayName = days[date.getDay()]
     const temp = day.temp.day
     const farhenheitTemp = Math.round((temp -273.15)*9/5 +32)


    return <WeatherForecastItem 
    key={Math.random()}
    topItem={dayName}
    icon={day.weather[0].icon}
    description={day.weather[0].description}
    temp={ state.degrees? Math.round(day.temp.day-273) +"°": farhenheitTemp + "F"}
    />
})

const homeStyles = {
    backgroundColor:state.LightMode? "#78b1f9": "#252422"
    
  }
  const weatherClassName = state.LightMode? "weather-slider light-mode-weather-slider": "weather-slider dark-mode-weather-slider"

    return(
        <div className={weatherClassName} style={homeStyles}>{dailySlider}</div>
    )
}

export default DailyForecast