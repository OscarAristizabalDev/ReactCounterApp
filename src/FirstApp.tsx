import React  from 'react'
// import { Fragment } from "react"

// export const FirstApp = () => {
//   return (
//     <Fragment>
//         <h1>Oscar</h1>
//         <p>Souy un subtitulo</p>
//     </Fragment>
//   )
// }

const getResult = () => {
    return 1 * 2;
}

const newMessage = {
    message: 'Hola Mundo',
    title: 'Oscar'
};

// fragmento es igual a <>
export const FirstApp = ({title, subTitle, name} : FirstAppProps) => {

    return (
        <>
            <h1>{title}</h1>
            {/* <h1>{ getResult() }</h1> */}
            {/* <h1>{ JSON.stringify(newMessage) }</h1> */}
            <p>{subTitle}</p>
            <p>{name}</p>
        </>
    )
}

type FirstAppProps = {
    name: string
    subTitle?: number, // ? indica que no es obligatorio
    title?: string,
}
