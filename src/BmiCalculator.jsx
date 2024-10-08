import React, { useState } from "react";
import "./BmiCalculator.css";

const BmiCalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState("");

  // handles positive number validation
  const handleWeightChange = (e) => {
    const value = e.target.value;
    // Allows only positive numbers
    if (value >= 0) {
      setWeight(value);
    }
  };
  const handleHeightChange = (e) => {
    const value = e.target.value;
    if (value >= 0) {
      setHeight(value);
    }
  };
  const calculateBMI = () => {
    if (!weight || !height) {
      alert("Please enter your both weight and height!");
      return;
    }
    const heightInMeters = parseFloat(height) / 100;
    const bmiValue = (
      parseFloat(weight) /
      (heightInMeters * heightInMeters)
    ).toFixed(2);
    setBmi(bmiValue);
    let bmiStatus = "";
    if (bmiValue < 18.5) {
      bmiStatus = "Underweight";
    } else if (bmiValue < 24.9) {
      bmiStatus = "Normal weight";
    } else if (bmiValue < 29.9) {
      bmiStatus = "Overweight";
    } else {
      bmiStatus = "Obesity";
    }
    setStatus(bmiStatus);
  };

  return (
    <div className="container">
      <h1>BMI Calculator</h1>
      <div className="input-group">
        <label>
          Weight (kg):
          <input
            type="number"
            value={weight}
            onChange={handleWeightChange}
            placeholder="Enter your weight (KG)"
            min="0"
          />
        </label>
      </div>
      <div className="input-group">
        <label>
          Height (cm):
          <input
            type="number"
            value={height}
            onChange={handleHeightChange}
            placeholder="Enter your height (CM) "
            min="0"
          />
        </label>
      </div>
      <button onClick={calculateBMI}>Calculate</button>
      {bmi && (
        <div className="result">
          <h3>Your BMI: {bmi}</h3>
          <h3>Status: {status}</h3>
        </div>
      )}
    </div>
  );
};
export default BmiCalculator;
