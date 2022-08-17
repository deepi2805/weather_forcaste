import React from "react";
import { useEffect, useState } from "react";
import './weather.css';


const Weather = () => {

    const[weatherList,setWeatherList]=useState([]);

  let data ={
    location:"Banglore",
    humidity:"20%",
    temperature:"20°C",
    climate:"Rainy",
  }

  const getList = async()=>{
    setWeatherList(data)
  }
  useEffect(()=>{
    getList();
  },[])
  return (
    <>    <form id="search-form">
        <input type="search" placeholder="enter city" id="search-input" required autocomplete="off"/>
        <br/>
        <button id="search-button">GET WEATHER</button>
      </form>

      <main id="container">
        <div id="location">
            <p>{weatherList.location}</p>
        </div>
        <div id="temp">
            <img id="temp-icom" src="https://cdn-icons-png.flaticon.com/128/1163/1163661.png" alt=""/>
            <br/>
            <br/>
            <p>
                <span id="temp-unit">{weatherList.temperature}</span>
                <br/>
            
            </p>
        </div>
        <div id="climate">
            <p>{weatherList.climate}</p>
        </div>
        <div id="humidity">
            <p>Humidity:{weatherList.humidity}</p>
        </div>
      </main>
      </>

  )
}

export default Weather