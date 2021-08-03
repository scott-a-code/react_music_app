import React from "react";

const Songs = ({ album, release_date, artwork }) => {
  return (
    <div class="album">
      <h2>Album(s) Info</h2>
      <p>
        Album name: {album}, Release Date: {release_date}, Artwork:
      </p>
      <img src={artwork}></img>
    </div>
  );
};

export default Songs;
// A list of their songs/albums including name,release date and cover art.
