import './App.css';
import SearchField from "react-search-field";
import FeatherIcon from 'feather-icons-react';
import axios from "axios";
import { useEffect, useState } from 'react';
function App() {
  const [city,setcity] = useState("");
  const [temp,settemp] = useState(0);
  const [humidity,sethumidity] = useState(0);
  const [search,setsearch] = useState("Jamshedpur");
  const [sealevel,setsealevel] = useState(0);
  const [grounlevel,setgroundlevel] = useState(0);
useEffect(() =>{
  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=0a310f0415be56e62f5a0d8a290ede32`).then((res) =>{
    console.log("res",res);
    settemp(res.data.main.temp)
    sethumidity(res.data.main.humidity)
    setcity(res.data.name)
    setsealevel(res.data.coord.lon)
    setgroundlevel(res.data.coord.lat)
  })
},[search]);


  return (
   <div className="weatherBox">
   <div className="weatherHeader">
   <h1>Weather App</h1>
   </div>
   <div className='weatherSearch'>
   <SearchField
  placeholder="Search..."
  onSearchClick={(value)=>{
    setsearch(value)
  }}
  searchText={search}
  classNames="weatherInput"
/>
   </div>
   <div className='weatherCloud'>
   <FeatherIcon icon="cloud-rain" color="white" size="60"/>;
   </div>
   <div className='weatherCity'>
   <h1>{city}</h1>
   </div>
   <div className='weatherRow'>
   <div className='weatherColoum'>
   <p>Temp: {(temp-273.15).toFixed(2)} 0C</p>
   </div>
   <div className='weatherColoum'>
   <p>Humidity:{humidity}</p>
   </div>
   </div>
   <div className='weatherRow'>
   <div className='weatherColoum'>
   <p>Sea level:{sealevel}</p>
   </div>
   <div className='weatherColoum'>
   <p>Ground level:{grounlevel}</p>
   </div>
   </div>
   </div>
  );
}

export default App;
