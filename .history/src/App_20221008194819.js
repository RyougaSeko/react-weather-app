// App.js
import { useState } from 'react';
import axios from "axios";
import React from 'react'
import Title from "./components/Title"
import Form from "./components/Form"
import './App.css';
import Results from './components/Result';


function App() {
  const [city, setCity] = useState("");
  const getWeather = (e) => {
      e.preventDefault();
      axios.get("http://api.weatherapi.com/v1/current.json?key=8ede98548cc44339b4191053220810&q=London&aqi=no")
           .then(res => {

              setResults({
                country: res.data.location.country,
                cityName: res.data.location.country,
                temperature: res.data.current.temp_c,
                conditionText: res.data.current.condition.text,
                icon: res.data.current.condition.icon

              })

            })
  }
  return (
    <div className="test">
      <Title /> 
      <Form setCity={setCity} getWeather={getWeather} /> 
      <Results result={results}/> 
    </div>
  );
}

export default App;
