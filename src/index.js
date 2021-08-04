import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js'
import "../public/index.css";
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
        <App />,
        </BrowserRouter>
    </React.StrictMode>,
    document.querySelector('#root')
 );


// Their name, music type and an introduction paragraph.
// A list of their songs/albums including name,release date and cover art.