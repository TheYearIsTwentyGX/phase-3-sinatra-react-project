import React, { useState, useEffect } from "react";
import "./Style/Artist.css";
import Song from "./Song";
import { useArtists } from "../Context/ArtistContext";
import { useParams, useHistory } from "react-router-dom";

function Artist({ ArtistID = null }) {
	const history = useHistory();
	let { id } = useParams();
	const { artists, setArtists, songs, setSongs, setEditArtist } = useArtists();
	//If we weren't passed an ID, use the one from the URL
	const Index = ArtistID ?? id;
	//Find the artist with the ID we're looking for, or return null if the artist doesn't exist
	const props = artists.find((artist) => artist.id === parseInt(Index));
	if (props === undefined)
		return null;
	//Filter the songs to only include the ones by the artist we're looking at
	const artistSongs = songs.filter((song) => song.artist_id === props.id);

	//Send user to artist page
	function handleClick(e) {
		if (id === undefined)
			history.push("/artists/" + parseInt(Index));
	}

	//Delete artist
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

	//Set's the edit artist, which is used in the ArtistForm component
	function editArtist(e) {
		setEditArtist(Index);
	}

	return (
		<div className="artist">
			<div className="panel">
				<div className="nameAndInfo">
					<div>
						<h1 onClick={handleClick} >{props.name}</h1>
						<img onClick={deleteArtist} alt={"Delete " + props.name} src="https://cdn1.iconfinder.com/data/icons/hawcons/32/699013-icon-27-trash-can-512.png" />
						<img onClick={editArtist} alt={"Edit " + props.name} src="https://cdn2.iconfinder.com/data/icons/content-edition-solid-style/24/pencil-write-128.png" />
					</div>
					<div className="artistInfo" onClick={handleClick}>
						<h4>Primary Genre: {props.genre}</h4>
						<h4>Age: {props.age}</h4>
						<h4>Birthday: {props.birthdate}</h4>
						<h4>Hometown: {props.hometown}</h4>
					</div>
				</div>
			</div>
			{songs.length > 0 ? (
				<React.Fragment>
					{artistSongs.map((song) => (
						<Song key={song.id} props={song} />
						))}
				</React.Fragment>
			) : null}
		</div>
	);
}

export default Artist;
