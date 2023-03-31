import { useState, useEffect } from "react";
import "./Style/Artist.css";
import Song from "./Song";
import { useArtists } from "../Context/ArtistContext";
import { useParams, useHistory } from "react-router-dom";

function Artist({ ArtistID = null }) {
	const history = useHistory();
	let { id } = useParams();
	const { artists, setArtists, songs, setSongs } = useArtists();
	const Index = ArtistID ?? id;
	const props = artists.find((artist) => artist.id === parseInt(Index));
	if (props === undefined)
		return null;
	const artistSongs = songs.filter((song) => song.artist_id === props.id);

	function handleClick(e) {
		if (id === undefined)
			history.push("/artists/" + parseInt(Index));
	}

	function deleteArtist(e) {
		fetch("http://localhost:9292/artists/" + parseInt(Index), {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json"
			}
		}).then(response => response.json())
			.then(data => {
				console.log(data);
			});
		setArtists(artists.filter((artist) => artist.id !== parseInt(Index)));
		setSongs(songs.filter((song) => song.artist_id !== parseInt(Index)));
		history.push("/");
	}

	return (
		<div className="artist">
			<div >

				<div className="nameAndInfo" onClick={handleClick}>
					<h1>{props.name}</h1>
					<div className="artistInfo">
						<h4>Primary Genre: {props.genre}</h4>
						<h4>Age: {props.age}</h4>
						<h4>Birthday: {props.birthdate}</h4>
						<h4>Hometown: {props.hometown}</h4>
					</div>
				</div>
				<img onClick={deleteArtist} alt={"Delete " + props.name} src="https://th.bing.com/th/id/R.0e8446f0392d95cc1415906097cf1691?rik=%2bw1%2b2rXL55p0RQ" />
			</div>
			{songs.length > 0 ? (
				<div className="songList">
					{artistSongs.map((song) => (
						<Song key={song.id} props={song} />
					))}
				</div>
			) : null}
			<div className="modifyButtons">
				<img alt="Modify Artist" src="./Assets/Trashcan.png" />
			</div>
		</div>
	);
}

export default Artist;
