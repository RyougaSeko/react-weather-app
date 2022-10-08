// App.js
import React from 'react'
import Title from "./components/Title"
import Form from "./components/Form"
import './App.css';
import Results from './components/Result';

function App() {
  return (
    <div className="test">
      <Title /> 
      <Form /> 
      <Results /> 
    </div>
  );
}

export default App;
