import React from 'react'
import { render } from "@testing-library/react"
import { FirstApp } from '../src/FirstApp';


describe('Pruebas en <FirstApp />', () => {

    // test que permite scar un shapshot y luego validar que no haya cambiado
    // test('debe hacer match con el snapshot', () => {

    //     const title = 'oscar';
    //     const { container } = render(<FirstApp title={title} />); // render retorna diferentes metodos para trabajar con el DOM

    //     expect(container).toMatchSnapshot(); // crea un shapshot para en las siguientes pruebas validar que ha cambiado en el componente
    // });

    test('debe de mostrar el titulo en un h1', () => {
        const title = 'oscar';
        const { container, getByText, getByTestId } = render(<FirstApp title={title} />);

        expect(getByText(title)).toBeTruthy()

        // const h1 = container.querySelector('h1') // se obtiene el elemento h1 del dom
        // expect(h1?.innerHTML).toContain(title) // se compara que el texto del h1 contenga el mismo titulo enviado

        expect(getByTestId('test-title').innerHTML).toContain(title)
    })

    test('Deben ser dos elementos con el mismo subtitulo', () => {
        const title = 'oscar';
        const subtTitle = 'Soy un subtitulo';
        const { getAllByText } = render(<FirstApp title={title} subTitle={subtTitle} />);

        expect(getAllByText(subtTitle).length).toBe(2); //valida que exista
    })

})