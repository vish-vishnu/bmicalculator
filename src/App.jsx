import { useState } from 'react'
import './App.css'

function App() {
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [result,setResult] = useState(null);
  const [status,setStatus] = useState("");
  const [error,setError] = useState("");

  const calculatebmi=()=>{
    let validHeight = parseFloat(height);
    let validWeight = parseFloat(weight);
    let heightinmeter = validHeight / 100;
    if(validHeight && validWeight) {
      const bmi = (validWeight / (heightinmeter * heightinmeter)).toFixed(2);
      setResult(bmi);
      if(bmi < 18.5){
        setStatus("Under weight");
      } else if(bmi >= 18.5 && bmi < 24.9){
        setStatus("Normal weight");
      } else if(bmi >= 25 && bmi < 29.9){
        setStatus("Over weight");
      } else {
        setStatus("Obesity");
      }
      setError("");
    } else{
      setResult(null);
      setStatus("");
      setError("Enter a valid height and weight value.");
    }
    
  }
  const clearall=()=>{
    setHeight('');
    setWeight('');
    setResult(null);
    setStatus("");
    setError("");
  }

  return (
    <>
      <div className="container">

        <div className='calculator-container'>
          <div className="box"></div>
          <div className="input-container">
            <h1>BMI Calculator</h1>
            {error && <p className='error'>{error}</p>}
            <label htmlFor="height">Height (cm):</label>
            <input type="number" id="height" placeholder="Height in cm" value={height} onChange={(e) => setHeight(e.target.value)} min="0"/>
            <label htmlFor="weight">Weight (kg):</label>
            <input type="number" id="weight" placeholder="Weight in kg" value={weight} onChange={(e) => setWeight(e.target.value)} min="0" />
            <div className='buttons-container'>
              <button onClick={calculatebmi}>Calculate BMI</button>
              <button onClick={clearall}>Reset</button>
            </div>
            <div className='result-container'>
              <p className='result'>Your BMI is: {result} </p>
              <p className='status'>Status: {status} </p>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
