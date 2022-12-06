import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

function Widget({ date, time, location, weather, temperature, high, low, icon }) {
  
    const [temp, setTemp] = useState(null);
    const [lo, setLo] = useState(null);
    const [hi, setHi] = useState(null);
    const [inFaren, setFaren] = useState(true);

    useEffect(() => {
        setTemp(temperature);
      }, [temperature]);

      useEffect(() => {
        setLo(low);
      }, [low]);
      
      useEffect(() => {
        setHi(high);
      }, [high]);

    
    function Toggle() {
        
        if (inFaren) {
            setFaren(false);
            setTemp((temp - 32) * 5 / 9.0);
            setLo((lo - 32) * 5 / 9.0);
            setHi((hi - 32) * 5 / 9.0);
        } else {
            setFaren(true);
            setTemp(temp * 9 / 5 + 32);
            setLo(lo * 9 / 5 + 32);
            setHi(hi * 9 / 5 + 32);
        }

    }


    return (
    <div className="App">
    <div className = "widgetBox">
        <header className="dateText">{date}</header>

        <div className="timeText">{time}</div>

        <div className="grid-container">
            <div className="grid1">
                <div className="locationText">{location}</div>
                <div className="weatherText">{weather}</div>
                <div className="dateText">
                    {temp} {(inFaren) ? "F" : "C"}
                    <br></br>
                     {hi} / {lo}
                    <br></br>
                    <button className="toggle" onClick={Toggle}>
                        Toggle
                    </button>

                </div> 
            </div>
            <div className="grid2">
                <img src = {"http://openweathermap.org/img/wn/" + icon + "@2x.png"}></img>
            </div>
        </div>

      </div>
    </div>
  );
}

export default Widget;
