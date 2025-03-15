import React, { useState } from 'react';
import CalculateButton from './CalculateButton';

const CalculateAddition = () => {

   const[number1,setNumber1]  = useState('');
   const[number2,setNumber2]  = useState('');

    const changeNum1 = (event) => {
        setNumber1(event.target.value);
    }

    const changeNum2 = (event) => { 
        setNumber2(event.target.value);
    }

    return (
        <div className="App">
            <h1>Calculate Numbers Project</h1>
            <p>Let's manipulate two numbers!</p>
            
                <p>Number 1: <input type="text" id="num1" value={number1} onChange={changeNum1}/></p>
                <p>Number 2: <input type='text' id='num2' value={number2} onChange={changeNum2}/></p>
                <p>
                    <CalculateButton value='Addition' num1={number1} num2={number2}/>&nbsp;&nbsp;&nbsp;&nbsp;
                    <CalculateButton value='Subtraction' num1={number1} num2={number2}/>&nbsp;&nbsp;&nbsp;&nbsp;
                    <CalculateButton value='Multiplication' num1={number1} num2={number2}/>&nbsp;&nbsp;&nbsp;&nbsp;
                    <CalculateButton value='Division' num1={number1} num2={number2}/>
                </p>

            
            {/* <p id='result-button'><button onClick={resultBtnClickHandler} id="resultbtn">Result</button></p> */}
    </div>
    );
};

export default CalculateAddition;