import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Artist_Info from './components/Artist_info';
import Songs from './components/Songs';
import eminemArt from './artwork/The_Eminem_Show.jpg';
import aliceCooper from './artwork/Alice_Cooper.jpg';
import Rob_C from './artwork/Rob_Cantor.jpg';

const App = () => {
    const [ artists, setArtists ] = useState([
        {name:"Eminem", music_type:"rap", intro:"He's the real slim shady"},
        {name:"Alice Cooper", music_type:"Rock", intro:"I like the song poion"},
        {name:"Rob Cantor", music_type:"Artistic", intro:"Shia LaBeouf song"}
    ])

    const [ albums, setSongs ] = useState ([
        {album: "The Eminem Show", release_date: "2002", artwork: eminemArt},
        {album: "Hey Stoopid", release_date: "1991", artwork: aliceCooper},
        {album: "Not a Trampoline", release_date: "2014", artwork: Rob_C}
    ]) 

    const renderArtistInfo = () => artists.map((m, i) => <Artist_Info key={i} name={m.name} music_type={m.music_type} intro={m.intro} />)
    const renderSongs = () => albums.map((m,i) => <Songs key={i} album={m.album} release_date={m.release_date} artwork={m.artwork}/>)
    return (
        <>
            {renderArtistInfo()}
            {renderSongs()}
        </>
    )
};

export default App;

// Their name, music type and an introduction paragraph.
// A list of their songs/albums including name,release date and cover art.