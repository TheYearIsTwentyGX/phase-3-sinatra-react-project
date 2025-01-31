import './Style/Song.css'

function Song({ props, showArtist = false }) {
  //Renders an individual song. If showArtist is true, it will show the artist name
  //showArtist is currently unused, but would be used for displaying a specific song at artist/:id/songs/:id
  return (
    <div className="song">
      <h2>{props.title}</h2>
      <div className="songInfo">
        { showArtist ? (<h4>Artist: {props.artist}</h4>) : null}
        <h4>Album: {props.album}</h4>
        <h4>Genre: {props.genre}</h4>
		<h4><b>Length:</b> {`${Math.floor(props.length/60)}:${(props.length % 60 < 10 ? `0${props.length % 60}` : props.length % 60 )}`}</h4>
      </div>
    </div>
  );
}

export default Song;