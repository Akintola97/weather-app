import { useState } from 'react';
import {AiOutlineSearch} from 'react-icons/ai'







//console.log(fetchURL)


function App() {
  const [weatherData, setWeatherData] = useState([{}])
  const [city, setCity] = useState("")
  const apiKey = 'afc457511a43e126399c3f12cf1dfd9e'
  const fetchURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`


  const Weather = (event) => {
    
     fetch (fetchURL)
      .then((response) => 
      {return response.json();
      })
      .then((
        data) =>{
        setWeatherData(data)
      })
      .catch((error) =>
       console.log(error))
  }
 
  
  
  
  return (
    <>
      <div className='w-full h-full text-center'>
      {typeof weatherData.main === 'undefined' ? (
        <div>
          <h1 className='font-bold text-[5vmin]'>Please enter a Location</h1>
        </div>
      ):(
        <div>
           <h1 className='location text-[15vmin]'>{weatherData.name}</h1>
           <div className='flex justify-center'>
           <h1 className='temperature text-[10vmin]'>{weatherData.main.temp}°F </h1>
           <h1 className='description text-[10vmin] pl-8'>{weatherData.weather[0].main}</h1>
       </div>
        </div>
      )
      }

      {weatherData.cod === '404' ? (
        <p>Location not found</p>
      ): 
      (
        <>
        </>
      )
      }
       
      </div>
      <div className='items-center fixed top-[50%] left-[50%] -translate-y-2/4 -translate-x-2/4'>
        <input value={city} onKeyPress={Weather} 
        onChange={e => setCity(e.target.value)} 
        className = 'border' type='text' 
        placeholder='location...'></input>
        <button onClick={Weather}><AiOutlineSearch />
        </button> 
      </div>
  <div className='flex justify-around fixed bottom-0 w-full'>
    {/*
     <h1>{weatherData.main.humidity} humidity</h1>
     <h1>{weatherData.main.feels_like} feels like</h1>
     <h1>{weatherData.wind.speed} Wind Speed</h1>
    */ }
  </div>
    </> 
  );
}

export default App;


