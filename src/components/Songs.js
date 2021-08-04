import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Songs = ({album, release_date, artwork}) => {
    const [random , setRandom] = useState([]);

    // useEffect(async (artist, title) => {
    //     try{
    //     const { data } = await axios.get(`https://api.lyrics.ovh/v1/eminem/the_eminem_show`);
    //     // const { data } = await axios.get(`https://api.lyrics.ovh/v1/${artist}/${title}`);
    //     console.log(data);
    //     setRandom(data);
    //     } catch (err) {

    //     }
    // }, []);
 
    return (
        <div class='album'>
            <h2>Album(s) Info</h2>
            <p>Album name: {album}, Release Date: {release_date}, Artwork:</p>
            <img src={artwork} ></img>
        </div>
    )
};

// var options = {
//   method: 'GET',
//   url: 'https://genius.p.rapidapi.com/artists/16775',
//   headers: {'x-rapidapi-host': 'genius.p.rapidapi.com'}
// };
// axios.request(options).then(function (response) {
//   console.log(response.data);
// }).catch(function (error) {
//   console.error(error);
// });

export default Songs;
// A list of their songs/albums including name,release date and cover art.
