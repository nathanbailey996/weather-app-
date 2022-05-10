function HourForecastItem({hour}){
    const unix = hour.dt
    const date = new Date(unix * 1000); 
    const hours = date.getHours()
    const AmORPm = hours >=12? "pm": "am"
    let twelveHours = hours%12  ||12
    const formattedTime = twelveHours+AmORPm

  

    return(
        <div className="hourly-forecast-item">
    <p className="time">{formattedTime}</p>
    <img src={`http://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`} className="weather-icon" alt="weather icon"/>
    <p>{Math.round(hour.temp-273)}°</p>
</div>
    )
}

export default HourForecastItem