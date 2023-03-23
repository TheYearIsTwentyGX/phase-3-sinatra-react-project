import './Song.css'

function Song({ props }) {
  console.log("Song props", props);
  return (
    <div id="nameAndInfo">
      <h3>{props.title}</h3>
      <div className="songInfo">
        <h4>Artist: {props.artist}</h4>
        <h4>Album: {props.album}</h4>
        <h4>Genre: {props.genre}</h4>
      </div>
    </div>
  );
}

export default Song;