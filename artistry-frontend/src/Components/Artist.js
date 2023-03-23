import {useState, useEffect} from "react";
import "./Artist.css";
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
				<div className="songList">
					{songs.map((song) => (
						<Song key={song.id} props={song} />
					))}
				</div>
			</div>
		</div>
	);
}

export default Artist;
