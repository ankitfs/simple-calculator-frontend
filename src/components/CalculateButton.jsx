import React from 'react';

const CalculateButton = (props) => {

    const calculateBtnClickHandler = (event) => {
        event.preventDefault();
        console.log('Calculate button clicked..'+props.value);
        console.log('Number 1: '+props.num1);
        console.log('Number 2: '+props.num2);
        const number1 = props.num1;
        const number2 = props.num2;
        let result;
        if(props.value==='Addition'){
            result = parseInt(number1)+parseInt(number2);
            console.log('Addition of two numbers: '+result);
        }   
        else if(props.value==='Subtraction'){
            result = parseInt(number1)-parseInt(number2);
            console.log('Subtraction of two numbers: '+result);
        }
        else if(props.value==='Multiplication'){
            result = parseInt(number1)*parseInt(number2);
            console.log('Multiplication of two numbers: '+result);
        }
        else if(props.value==='Division'){
            result = parseInt(number1)/parseInt(number2);
            console.log('Division of two numbers: '+result);
        }
        else {
            console.log('Invalid operation');
        }
    }



    return (
        <button onClick={calculateBtnClickHandler}>{props.value}</button>
    );
};

export default CalculateButton;


//rk1819232@gmail.com
//sujalpal8010@gmail.com