import {useState, useEffect} from "react";
import "./Style/Artist.css";
import Song from "./Song";

function Artist({ props }) {
	const [songs, setSongs] = useState([]);
	useEffect(() => {
		fetch(`http://localhost:9292/artists/${props.id}/songs`)
			.then((res) => res.json())
			.then((data) => { console.log("data", data); setSongs(data);
		});
	}, []);

	console.info("Artist props", props);
	return (
		<div className="artist">
			<div className="nameAndInfo">
				<h1>{props.name}</h1>
				<div className="artistInfo">
					<h4>Primary Genre: {props.genre}</h4>
					<h4>Age: {props.age}</h4>
					<h4>Birthday: {props.birthdate}</h4>
					<h4>Hometown: {props.hometown}</h4>
				</div>
			</div>
			{songs.length > 0 ? (
				<div className="songList">
					{songs.map((song) => (
						<Song key={song.id} props={song} />
					))}
				</div>
			) : null}
		</div>
	);
}

export default Artist;
