import React, { useEffect } from 'react';
import './Style/ArtistForm.css';
import { useHistory } from 'react-router-dom';
import { useArtists } from '../Context/ArtistContext';

function ArtistForm({ song = null, artist = null }) {

	const { artists, setArtists, songs, setSongs, editArtist, setEditArtist } = useArtists();

	const [formData, setFormData] = React.useState({
		formType: "artist",
		song: {
			title: "",
			genre: "",
			album: "",
			length: 0,
			artist_id: 1,
			track_number: 0
		},
		artist: {
			name: "",
			genre: "",
			age: "",
			birthdate: "",
			hometown: ""
		}
	});
	const history = useHistory();

	useEffect(() => {
		if (editArtist !== null) {
			setFormData({ ...formData, artist: artists.find((artist) => artist.id === parseInt(editArtist)) });
		}
	}, [editArtist]);

	if (song !== null)
		setFormData({ ...formData, song: song, formType: "song" });
	else if (artist !== null)
		setFormData({ ...formData, artist: artist, formType: "artist" });

	function changeDrop(e) {
		setFormData({ ...formData, formType: e.target.value });
	}

	function handleSubmit(e) {
		e.preventDefault();

		if (editArtist !== null) {
			fetch("http://localhost:9292/artists/" + parseInt(editArtist), {
				method: "PATCH",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(formData.artist)
			}).then(response => response.json())
				.then(data => {
					console.log(data);
					const newArtists = artists.map((artist) => { if (artist.id === parseInt(editArtist)) return formData.artist; else return artist; });
					setArtists(newArtists);
					setEditArtist(null);
					console.log(artists);
					history.push(`/artists/${editArtist}`);
				});
			}

			if (formData.formType === "song") {
				fetch("http://localhost:9292/songs", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(formData.song)
				}).then(response => response.json())
					.then(data => { console.log(data); return data; })
					.then(data => {
						setSongs({ ...songs, data });
						history.push(`/artists/${data.artist_id}`)
					});
				//history.go(0);
			}
			else {
				const newArtist = formData.artist;
				fetch("http://localhost:9292/artists", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(newArtist)
				}).then(response => response.json())
					.then(data => history.push(`/artists/${data.id}`));
			}
		}
		function handleInput(e) {
			const fValue = e.target.id.split("-")[1];
			if (formData.formType === "artist") {
				setFormData({ ...formData, artist: { ...formData.artist, [fValue]: e.target.value } });
			} else {
				setFormData({ ...formData, song: { ...formData.song, [fValue]: e.target.value } });
			}
		}

		return (
			<div className='container' onSubmit={handleSubmit}>
				<h1>Add a{formData.formType === "artist" ? "n Artist" : " Song"}</h1>
				<form>
					<div>
						<label htmlFor="formType">What are you adding?</label>
						<select id="formType" onChange={changeDrop}>
							<option value="artist">Artist</option>
							<option value="song">Song</option>
						</select>
					</div>
					<div style={{ display: (formData.formType === "artist" ? "block" : "none") }}>
						<div>
							<label htmlFor="artist-name">Name:</label>
							<input id="artist-name" value={formData.artist.name} onChange={handleInput} />
						</div>
						<div>
							<label htmlFor="artist-genre">Genre:</label>
							<input id="artist-genre" value={formData.artist.genre} onChange={handleInput} />
						</div>
						<div>
							<label htmlFor="artist-age">Age:</label>
							<input id="artist-age" value={formData.artist.age} onChange={handleInput} />
						</div>
						<div>
							<label htmlFor="artist-birthdate">Birthdate:</label>
							<input type="date" id="artist-birthdate" value={formData.artist.birthdate} onChange={handleInput} />
						</div>
						<div>
							<label htmlFor="artist-hometown">Hometown:</label>
							<input id="artist-hometown" value={formData.artist.hometown} onChange={handleInput} />
						</div>
					</div>
					<div style={{ display: (formData.formType === "song" ? "block" : "none") }}>
						<div>
							<label htmlFor="song-artist_id">Song's Artist:</label>
							<select id="song-artist_id" value={formData.song.artist} onChange={handleInput}>
								{useArtists().artists.map((artist) => (<option key={artist.id} value={artist.id}>{artist.name}</option>))}
							</select>
						</div>
						<div>
							<label htmlFor="song-title">Title:</label>
							<input id="song-title" value={formData.song.title} onChange={handleInput} />
						</div>
						<div>
							<label htmlFor="song-genre">Genre:</label>
							<input id="song-genre" value={formData.song.genre} onChange={handleInput} />
						</div>
						<div>
							<label htmlFor="song-length">Track Duration:</label>
							<input id="song-length" value={formData.song.length} onChange={handleInput} />
						</div>
						<div>
							<label htmlFor="song-album">Album:</label>
							<input id="song-album" value={formData.song.album} onChange={handleInput} />
						</div>
						<div>
							<label htmlFor="song-track_number">Track Number:</label>
							<input id="song-track_number" value={formData.song.track_number} onChange={handleInput} />
						</div>
					</div>
					<button type="submit">Submit</button>
				</form>
			</div>
		);
	}

	export default ArtistForm;