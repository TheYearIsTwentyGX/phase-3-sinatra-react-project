import {useState, useEffect} from "react";
import "./Style/Artist.css";
import Song from "./Song";
import { useArtists } from "../Context/ArtistContext";
import { useParams } from "react-router-dom";

function Artist({ ArtistID = null }) {
	let { id } = useParams();
	const { artists, songs } = useArtists();
	const Index = ArtistID ?? id;
	const props = artists.find((artist) => artist.id === parseInt(Index));
	if (props === undefined)
		return null;
	const artistSongs = songs.filter((song) => song.artist_id === props.id);
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
					{artistSongs.map((song) => (
						<Song key={song.id} props={song} />
					))}
				</div>
			) : null}
		</div>
	);
}

export default Artist;
