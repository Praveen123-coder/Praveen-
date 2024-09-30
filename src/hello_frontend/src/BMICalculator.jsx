import React, { useState } from 'react';

const BMICalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');

  const calculateBMI = (event) => {
    event.preventDefault();

    if (weight <= 0 || height <= 0) {
      alert('Weight and height must be positive numbers.');
      return;
    }

    // Convert height to meters and weight to kilograms
    const heightInMeters = height / 100;
    const weightInKg = weight;

    const bmiValue = weightInKg / (heightInMeters * heightInMeters);
    setBmi(bmiValue.toFixed(2));

    // Determine BMI category
    if (bmiValue < 18.5) {
      setCategory('Underweight');
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      setCategory('Normal weight');
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      setCategory('Overweight');
    } else {
      setCategory('Obesity');
    }
  };

  return (
    <div className="bmi-calculator">
      <h1>BMI Calculator</h1>
      <form onSubmit={calculateBMI}>
        <div>
          <label htmlFor="weight">Weight (kg):</label>
          <input
            type="number"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="height">Height (cm):</label>
          <input
            type="number"
            id="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            required
          />
        </div>
        <button type="submit">Calculate BMI</button>
      </form>

      {bmi && (
        <div className="bmi-result">
          <h2>Your BMI: {bmi}</h2>
          <p>Category: {category}</p>
        </div>
      )}
    </div>
  );
};

export default BMICalculator;