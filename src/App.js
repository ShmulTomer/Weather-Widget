import logo from "./logo.svg";
import "./App.css";
import Component from "./Component";
import Widget from "./Widget";
import { useInsertionEffect } from "react";

import { useState, useEffect } from "react";



function App() {


  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const [data, setData] = useState(null);

  useEffect(() => {
    geoFindMe();
  }, []);

  


  function geoFindMe() {

    const status = document.querySelector('#status');
    const mapLink = document.querySelector('#map-link');
  
    mapLink.href = '';
    mapLink.textContent = '';
  
    function success(position) {
      const latitude  = position.coords.latitude;
      const longitude = position.coords.longitude;
      setLat(latitude);
      setLong(longitude);
  
      status.textContent = '';
      mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
      mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;

      weatherAPI();
    }
  
    function error() {
      status.textContent = 'Unable to retrieve your location';
    }
  
    if (!navigator.geolocation) {
      status.textContent = 'Geolocation is not supported by your browser';
    } else {
      status.textContent = 'Locating…';
      navigator.geolocation.getCurrentPosition(success, error);
    }
  
  }
  

  function weatherAPI() {

    fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + long + '&appid=5c1afe3cfee9af0e1a71161a2898cf8a&units=imperial')
      .then((response) => response.json())
      .then((data) => setData(data));


    

  }
  
  
  /*

  http://openweathermap.org/img/wn/10d@2x.png
    weather.description
    main.temp
    name

    main.temp_min
    main.temp_max

  */

  return (
    <div className="App">
      <header className="App-header">


        <img src={logo} className="App-logo" alt="logo" />
        <p>Bits of Good</p>

      {/* {lat}  
      {long} 
      
      
      */}
     Visibility {data?.visibility}
        <button id = "find-me">Show my location</button><br/>
        <p id = "status"></p>
        <a id = "map-link" target="_blank"></a>
        <Widget date="Tuesday Janurary 28" time="6:28 PM" 
          location={data?.name} 
          weather={data?.weather[0].description} 
          temperature={data?.main.temp}
          high = {data?.main.temp_max}
          low = {data?.main.temp_min}
          icon = {data?.weather[0].icon}
          />
        <br></br>
        <Widget date="Tuesday Janurary 28" time="6:28 PM" location="Los Angeles" weather="Mostly sunny" temperature="71"/>
      </header>
    </div>
  );
}

export default App;
