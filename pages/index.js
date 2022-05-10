import WeatherHomePage from "../components/WeatherHomePage"
import Head from "next/head"

export default function Home(props) {

  return (
    <div className="Home-page-container" style={{width:"100vw", height:"100vh"}}>
     <Head>
     <title>weather app</title>
     <link rel="stylesheet" href="https://unpkg.com/leaflet@1.8.0/dist/leaflet.css"
   integrity="sha512-hoalWLoI8r4UszCkZ5kL8vayOGVae1oxXe/2A4AO6J9+580uKHDO3JdHb7NzwwzK5xr/Fs0W40kiNHxM9vyTtQ=="
   crossorigin=""/>
     </Head>
<WeatherHomePage  state={props.state} dispatch={props.dispatch}/>

    </div>
  )
}
