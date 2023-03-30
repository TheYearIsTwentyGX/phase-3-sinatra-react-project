import React from 'react';
import './Style/ArtistForm.css';
import { useHistory } from 'react-router-dom';
import { useArtists } from '../Context/ArtistContext';

function ArtistForm() {

	const [formData, setFormData] = React.useState({
		formType: "artist",
		song: {
			name: "",
			album: "",
			year: "",
			artist_id: 0,
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

	function changeDrop(e) {
		setFormData({ ...formData, formType: e.target.value });
		console.log(e.target.value);

	}

	function handleSubmit(e) {
		e.preventDefault();
		const newArtist = {
			// name: name,
			// genre: genre,
			// age: age,
			// birthdate: birthdate,
			// hometown: hometown
		}
		fetch("http://localhost:9292/artists", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(newArtist)
		}).then(response => response.json())
			.then(data => history.push(`/artists/${data.id}`));
	}
	function handleInput(e) {
		switch (e.target.id) {
		}
	}

	return (
		<div className='container' onSubmit={handleSubmit}>
			<h1>Add an Artist</h1>
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
						<label htmlFor="nameInput">Name:</label>
						<input id="nameInput" value={formData.artist.name} onChange={handleInput} />
					</div>
					<div>
						<label htmlFor="genreInput">Genre:</label>
						<input id="genreInput" value={formData.artist.genre} onChange={handleInput} />
					</div>
					<div>
						<label htmlFor="ageInput">Age:</label>
						<input id="ageInput" value={formData.artist.age} onChange={handleInput} />
					</div>
					<div>
						<label htmlFor="birthdateInput">Birthdate:</label>
						<input type="date" id="birthdateInput" value={formData.artist.birthdate} onChange={handleInput} />
					</div>
					<div>
						<label htmlFor="hometownInput">Hometown:</label>
						<input id="hometownInput" value={formData.artist.hometown} onChange={handleInput} />
					</div>
				</div>
				<div style={{ display: (formData.formType === "song" ? "block" : "none") }}>
					<div>
						<label htmlFor="artistInput">Song's Artist:</label>
						<select id="artistInput" value={formData.song.artist} onChange={handleInput}>
							{useArtists().artists.map((artist) => (<option value={artist.id}>{artist.name}</option>))}
						</select>
					</div>
					<div>
						<label htmlFor="titleInput">Title:</label>
						<input id="titleInput" value={formData.song.name} onChange={handleInput} />
					</div>
					<div>
						<label htmlFor="songGenreInput">Genre:</label>
						<input id="songGenreInput" value={formData.song.genre} onChange={handleInput} />
					</div>
					<div>
						<label htmlFor="lengthInput">Track Duration:</label>
						<input id="Input" value={formData.song.length} onChange={handleInput} />
					</div>
					<div>
						<label htmlFor="albumInput">Album:</label>
						<input id="albumInput" value={formData.song.album} onChange={handleInput} />
					</div>
					<div>
						<label htmlFor="trackNoInput">:</label>
						<input id="trackNoInput" value={formData.song.track_number} onChange={handleInput} />
					</div>
				</div>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
}

export default ArtistForm;