import React from 'react';
import { useState } from 'react';

function App() {
  const value = 'World';
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState('');

  const AdditionFunction = async () => {
    try {
        const response = await fetch(
            `/api/AdditionFunction?num1=${num1}&num2=${num2}`
        );

        if (!response.ok) {
            throw new Error('API request failed');
        }

        const data = await response.text();

        setResult(data);

    } catch (error) {
        console.error('Error:', error);
        setResult('Could not connect to Azure Function');
    }
};

  return (
  <div>
    <h1>Calculator Adder 3000</h1>

    <input
      type="number"
      value={num1}
      onChange={(e) => setNum1(e.target.value)}/>

      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}/>

      <button onClick={AdditionFunction}>
        Add
      </button>

      <p>Result: {result}</p>

  </div>
  )
}

export default App;
