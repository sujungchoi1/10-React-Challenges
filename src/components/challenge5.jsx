import React, { useState } from 'react';
import './ch5.css';

// https://scotch.io/courses/10-react-challenges-beginner/adding-calculator

// # The Challenge: Add Two Numbers
// For this challenge, you will receive two numbers from an input element and add both numbers. Display the sum of these numbers on the same page. The main tasks of this challenge are:

// Store input numbers.
// Add numbers.
// Display the sum on the page.

function Five() {
    const [ numOne, setNumOne ] = useState(0);
    const [ numTwo, setNumTwo ] = useState(0);
    const [ totalSum, setTotalSum ] = useState(0);

    const addNums = () => {
        setTotalSum(numOne + numTwo);
    }

    const subtractNums = () => {
        setTotalSum(numOne - numTwo);
    }
    const multiplyNums = () => {
        setTotalSum(numOne * numTwo);
    }
    const divideNums = () => {
        setTotalSum((numOne / numTwo).toFixed(5));
    }

  return (
    <div className="Five">
      <h1>Calculating Two Numbers</h1>

      <div className="number-inputs">
          {/* The unary + operator converts its operand to Number type */}
        <input type="number" placeholder="0" value={numOne} onChange={e => setNumOne(+e.target.value)} />
        <input type="number" placeholder="0" value={numTwo} onChange={e => setNumTwo(+e.target.value)} />
      </div>

      <div className="btn-group">
        <button onClick={addNums}>Add Them!</button>
        <button onClick={subtractNums}>Subtract Them!</button>
        <button onClick={multiplyNums}>Multiply Them!</button>
        <button onClick={divideNums}>Divide Them!</button>

      </div>


      <h2>{totalSum}</h2>

    </div>
  );
}

export default Five;