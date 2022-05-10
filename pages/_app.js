import '../styles/globals.css'
import {useReducer, useEffect} from "react"
import axios from 'axios'
import reducer from '../components/reducer'


function MyApp({ Component, pageProps }) {

const initialState = {
        allLocationData:[], 
       currentLocation:[], 
       LightMode:true, 
       degrees:true
    } 

    
    
     const [state, dispatch] = useReducer(reducer, initialState)

     useEffect(()=>{
      if(!state.currentLocation.current){
        const url = `https://api.openweathermap.org/data/2.5/onecall?lat=51.5073&lon=-0.1276&exclude={part}&appid=d678350f131c461c63d5bd106622d976`
         axios.get(url)
         .then(res=> dispatch({type:"AddLocation", data:{name:"London", ...res.data}}))
         .catch(err=> alert(err.message))
    }
     }, [state.allLocationData])
   

  return <Component {...pageProps} state={state} dispatch={dispatch} />
}

export default MyApp
