import React from 'react';
import Songs from './Songs';

const Artist_Info = ({name, music_type, intro}) => {

    const turnGreenForLike = e => {
        e.target.style.backgroundColor = "rgb(51,255,51)";
    }

    return (
        <>
            <h1>Artist name is {name}</h1>
            <h2>Genre is {music_type}</h2>
            <p>Intro {intro}</p>
            <button onClick={turnGreenForLike}>Like</button>
        </>
    )
};

export default Artist_Info;
// Their name, music type and an introduction paragraph.