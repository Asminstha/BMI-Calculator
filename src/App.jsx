import { useState } from 'react'
import BmiCalculator from './BmiCalculator';
import './App.css'

function App() {
  return (
    <>
      <h1>Hello ! Learners </h1>
      <p>Calculate Your BMI Here!!!</p>
    <div className="App">
      <BmiCalculator />
    </div>
    </>
  );
}

export default App;
