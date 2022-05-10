import { TiTick } from "react-icons/ti"
import { AiOutlineArrowLeft } from "react-icons/ai"
import {useRouter} from "next/router"

function ChangeUnitSetting({state, dispatch}){
const router = useRouter()
    const homeStyles = {
        backgroundColor:state.LightMode? "#72a1f5": "black"
      }

      const toggleSettings = ()=>{
          router.push("/settings")
      }
    return(
        <div className="settings-container" style={homeStyles}>
       <div className="back-container">
             <button className="back-btn" onClick={toggleSettings}>
                 <AiOutlineArrowLeft />
             </button>
             <p>Units</p>
         </div>
 
 
            <div className="unit-settings-container" onClick={()=>{
                dispatch({type:"Degrees"})
            }}>
                <p>Degrees</p>
                {state.degrees? <button className="tick-btn"><TiTick /></button>: ""}
            </div>
            <div className="unit-settings-container" onClick={()=>{
                dispatch({type:"Farhenheit"})
            }}>
                <p>Fahrenheit</p>
                {!state.degrees? <button className="tick-btn"><TiTick /></button>: ""}
            </div>

        </div>
    )
}

export default ChangeUnitSetting