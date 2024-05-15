import React from 'react';
import ReactDOM from 'react-dom/client';
import { CounterApp } from './CounterApp';
import { FirstApp } from './FirstApp';
import { HelloWorldApp } from './HelloWorldApp';

// import App from './HelloWorldApp';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        {/* <HelloWorldApp /> */}
        <FirstApp title="Goku" subTitle={123} name="Oscar"/>
        {/* <CounterApp value={1}/> */}
    </React.StrictMode>
)