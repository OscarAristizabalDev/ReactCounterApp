import React from 'react'
import { render, screen } from '@testing-library/react';

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
})