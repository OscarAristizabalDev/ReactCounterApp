import React from 'react'
import { useState } from 'react';

export const CounterApp = ({value}: CounterAppProps) => {
  
    const [counter, setCounter] = useState(value);

    const sumar = (valor: number) => {
        // value = value + valor;
        setCounter(counter + valor);
    }

    const restar = (valor: number) => {
        setCounter(counter - valor);
    }

    const reset = () => {
        setCounter(value)
    }
  
    return (
    <>
        <h1>CounterApp</h1>
        <h2> { counter } </h2>
        <button onClick={ () => sumar(1) } >+1</button>
        <button onClick={ () => restar(1) } >-1</button>
        <button aria-label='btn-reset' onClick={ () => reset() } >Reset</button>
    </>
  )
}

type CounterAppProps = {
    value: number
}
