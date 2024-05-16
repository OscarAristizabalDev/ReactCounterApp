import React from 'react'
import { render, screen } from "@testing-library/react"
import { FirstApp } from '../src/FirstApp';


describe('Pruebas en <FirstApp />', () => {


    const title = 'Hola, Soy Goku';
    const subtitle = 'Soy un subtitulo'

    // test que permite scar un shapshot y luego validar que no haya cambiado
    test('debe hacer match con el snapshot', () => {

        const { container } = render(<FirstApp title={title} />); // render retorna diferentes metodos para trabajar con el DOM

        expect(container).toMatchSnapshot(); // crea un shapshot para en las siguientes pruebas validar que ha cambiado en el componente
    });

    test('debe de mostrar el mensaje "Hola, Soy goku"', () => {

        render(<FirstApp title={title} />);
        // el screen basicamente obtendra todo el DOM de <FirstApp /> component
        expect(screen.getByText(title)).toBeTruthy(); // permite valdiar que el titulo se encuentre en html

    })

    test('debe de mostrar el titulo en h1', () => {

        render(<FirstApp title={title} />);
        // el screen basicamente obtendra todo el DOM de <FirstApp /> component
        // permite validar que un H1 haya un el mismo titulo enviado
        expect(screen.getByRole('heading', {level: 1}).innerHTML).toContain(title); 

    })

    test('debe de mostrar el subtitulo enviado por las props', () => {

        render(<FirstApp title={title} subTitle={subtitle} />);
        expect(screen.getAllByText(subtitle).length).toBe(2); //valida que exista

    })
    

})