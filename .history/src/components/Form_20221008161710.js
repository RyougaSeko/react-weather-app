import { useState } from 'react';
import axios from "axios";



const Form = () => {
    const [city, setCity] = useState("");
    const getWeather = () {
        axios.get("http://api.weatherapi.com/v1/current.json?key=8ede98548cc44339b4191053220810&q=London&aqi=no")
    }
    return (

        <form>
            <input type="text" name="city" placeholder="都市名" onChange={e => setCity(e.target.value)}/>
            <button type="submit">Get Weather</button>
            {city}
        </form>

    );
};

export default Form;