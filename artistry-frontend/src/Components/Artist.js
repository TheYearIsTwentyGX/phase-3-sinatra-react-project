import "./Artist.css";

function Artist({ props }) {
  return (
    <div className="outerGrid">
      <div className="artist">
        <div id="nameAndInfo">
          <h1>{props.name}</h1>
          <div className="artistInfo">
            <h4>Age: {props.age}</h4>
            <h4>Birthday: {props.birthdate}</h4>
            <h4>Hometown: {props.hometown}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Artist;
