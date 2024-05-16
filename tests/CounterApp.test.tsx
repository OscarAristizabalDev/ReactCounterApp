import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react';

import { CounterApp } from '../src/CounterApp';


describe('pruebas en <CounterApp />', () => {

    const initialValue = 100;

    test('debe hacer match con el snapshot', () => {

        const { container } = render(<CounterApp value={initialValue} />); // render retorna diferentes metodos para trabajar con el DOM

        expect(container).toMatchSnapshot(); // crea un shapshot para en las siguientes pruebas validar que ha cambiado en el componente
    });

    test('debe mostrar el valor inicial de 100', () => {

        render(<CounterApp value={initialValue} />); // render retorna diferentes metodos para trabajar con el DOM
        expect(screen.getByText(100)).toBeTruthy(); // permite validar que el DOM exista el numero 100

        expect(screen.getByRole('heading', {level: 2}).innerHTML).toContain('100'); // valida que en un H2 este el numero 100

    });

    test('debe incrementar con el boton +1', () => {
        render(<CounterApp value={initialValue} />); // render retorna diferentes metodos para trabajar con el DOM
        fireEvent.click(screen.getByText('+1')) // fireEvent permita acceder al evento click
        expect(screen.getByText('101')).toBeTruthy() // debe ser 101 ya que el initialValue es 100
    })

    test('debe decrementar con el boton +1', () => {
        render(<CounterApp value={initialValue} />); // render retorna diferentes metodos para trabajar con el DOM
        fireEvent.click(screen.getByText('-1')) // fireEvent permita acceder al evento click
        // screen.debug()
        expect(screen.getByText('99')).toBeTruthy() // debe ser 101 ya que el initialValue es 100
    })

    test('debe funcionar el boton de reset', () => {
        render(<CounterApp value={initialValue} />); // render retorna diferentes metodos para trabajar con el DOM
        fireEvent.click(screen.getByText('+1')) // fireEvent permita acceder al evento click
        fireEvent.click(screen.getByText('+1'))
        fireEvent.click(screen.getByText('+1'))
        // screen.debug()
        fireEvent.click(screen.getByRole('button', {name: 'btn-reset'})) // otra forma de acceder a un boton
        // screen.debug()
        expect(screen.getByText(initialValue)).toBeTruthy() // debe ser 100 ya que se llama el onClick  de reset
     })
})