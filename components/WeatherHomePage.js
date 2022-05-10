
import Navbar from "./Navbar"
import HomeTemperature from "./HomeTemperature"
import WeatherForecastSlider from "./WeatherForecastSlider"
import DailyForecast from "./DailyForecast"
import WeatherInfo from "./WeatherInfo"
import SunriseWeatherInfo from "./SunriseWeatherInfo"


function WeatherHomePage ({state, dispatch}){
  const homeStyles = {
    backgroundColor:state.LightMode? "#72a1f5": "black"
  }

 
return(
  <div className="max-width-container">
  <Navbar state={state} dispatch={dispatch}/>
  <div className="home-container" style={homeStyles}>
    { state.currentLocation.current? <div style={{height:"max-content", width:"100vw", msOverflowY:"scroll"}}>
        <div className="home-temp-section">
<HomeTemperature state={state}/>
</div>

<WeatherForecastSlider state={state}/>
<DailyForecast state={state}/>
<WeatherInfo state={state}/>
<SunriseWeatherInfo state={state} /> 
  
      </div>: ""}
      </div>
      </div>
       
    )
}
export default  WeatherHomePage
