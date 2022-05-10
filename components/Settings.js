import { AiOutlineArrowLeft } from "react-icons/ai"
import {useRouter} from "next/router"

function Settings ({state, dispatch}){
    const router = useRouter()

    const homeStyles = {
        backgroundColor:state.LightMode? "#72a1f5": "black",
        cursor:"pointer"
      }

      const lightModeDarkModeColor = {
       opacity:"0.3"
      }

      const toggleUnitSettings = ()=>{
          router.push("/change-unit")
      }

      const toggleHome = ()=>{
          router.push("/")
      }

    return(
        <div className="settings-container" style={homeStyles}>
         <div className="back-container">
             <button className="back-btn" onClick={toggleHome}>
                 <AiOutlineArrowLeft />
             </button>
             <p>Settings</p>
         </div>

         <div className="unit-container" onClick={toggleUnitSettings}>
             <p className="unit-title">Unit</p>
             <p className="unit">C°</p>
         </div>
         <div className="dark-mode-setting-container">
             <p style={!state.LightMode? lightModeDarkModeColor: null} onClick={()=>{
                 dispatch({type:"LightMode"})
             }}>Light Mode</p>
             <p style={state.LightMode? lightModeDarkModeColor: null} onClick={()=>{
                 dispatch({type:"DarkMode"})
             }}>Dark Mode</p>
         </div>
        </div>
    )
}

export default Settings