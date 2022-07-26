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
    <div className='w-full h-[100vh] text-center'>
      <div>
        <h1 className='text-[10vmin] font-bold'>Weather App</h1>
      </div>
      <div className='pt-[6vmin]'>
      {typeof weatherData.main === 'undefined' ? (
        <div>
          <h2 className='font-bold text-[5vmin]'>Please enter a Location</h2>
        </div>
      ):(
        <div>
           <h1 className='location text-[10vmin]'>{weatherData.name}, {weatherData.sys.country}</h1>
           <div className='flex justify-center'>
           <h1 className='temperature text-[8vmin]'>{weatherData.main.temp}°F </h1>
           <h1 className='description text-[8vmin] pl-8'>{weatherData.weather[0].description}</h1>
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
        <div className='flex items-center justify-center h-[40vmin]'>
        <input value={city} onKeyPress={Weather} 
        onChange={e => setCity(e.target.value)} 
        className = 'border p-2' type='text' 
        placeholder='location...'></input>
      <div className=''>
        <button className='bg-green-400 p-3 text-lg ' onClick={Weather}><AiOutlineSearch />
        </button>
        </div>
      </div>
  <div className='flex justify-around items-center h-auto'>
     {weatherData && weatherData.main && <h1 className='text-center text-[4vmin]'> {weatherData.main.humidity} %<h1 className='font-bold text-[3.5vmin]'>Humidity</h1> </h1> }
     {weatherData && weatherData.main && <h1 className=' text-center text-[4vmin]'> {weatherData.main.feels_like} °F<h1 className='font-bold text-[3.5vmin]'>Feels Like</h1> </h1>  }
     {weatherData && weatherData.wind && <h1 className='text-center text-[4vmin]'> {weatherData.wind.speed} MPH<h1 className='font-bold text-[3.5vmin]'>Wind Speed</h1> </h1>  }
    
    
  </div>
    </div> 
  );
}

export default App;


