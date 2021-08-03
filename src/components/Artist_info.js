import React, { useState } from 'react';
import Songs from './Songs';

let trueOrFalse;
const Artist_Info = ({name, music_type, intro}) => {
    
let clicked = false;

    const toggleClick = e => {
        if (clicked) {
            e.target.style.backgroundColor = "rgb(239, 239, 239)";
            clicked = false;
        } else {
            e.target.style.backgroundColor = "rgb(51,255,51)";
            clicked = true;
        }
    }

    return (
        <>
            <h1>Artist name is {name}</h1>
            <h2>Genre is {music_type}</h2>
            <p>Intro {intro}</p>
            <button id="likebtn" onClick={toggleClick}>Like</button>
        </>
    )
};

export default Artist_Info;
// Their name, music type and an introduction paragraph.