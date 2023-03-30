import React from 'react';
import './Style/ArtistForm.css';
import { useHistory } from 'react-router-dom';

function ArtistForm() {
	const [name, setName] = React.useState("");
	const [genre, setGenre] = React.useState("");
	const [age, setAge] = React.useState("");
	const [birthdate, setBirthdate] = React.useState("");
	const [hometown, setHometown] = React.useState("");
	const history = useHistory();

	function handleSubmit(e) {
		e.preventDefault();
		const newArtist = {
			name: name,
			genre: genre,
			age: age,
			birthdate: birthdate,
			hometown: hometown
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
			case "nameInput":
				setName(e.target.value);
				break;
			case "genreInput":
				setGenre(e.target.value);
				break;
			case "ageInput":
				setAge(e.target.value);
				break;
			case "birthdateInput":
				setBirthdate(e.target.value);
				break;
			case "hometownInput":
				setHometown(e.target.value);
				break;
		}
	}

	return (
		<div className='container' onSubmit={handleSubmit}>
			<h1>Add an Artist</h1>
			<form>
				<div>
					<label htmlFor="nameInput">Name:</label>
					<input id="nameInput" value={name} onChange={handleInput} />
				</div>
				<div>
					<label htmlFor="genreInput">Genre:</label>
					<input id="genreInput" value={genre} onChange={handleInput} />
				</div>
				<div>
					<label htmlFor="ageInput">Age:</label>
					<input id="ageInput" value={age} onChange={handleInput} />
				</div>
				<div>
					<label htmlFor="birthdateInput">Birthdate:</label>
					<input type="date" id="birthdateInput" value={birthdate} onChange={handleInput} />
				</div>
				<div>
					<label htmlFor="hometownInput">Hometown:</label>
					<input id="hometownInput" value={hometown} onChange={handleInput} />
				</div>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
}

export default ArtistForm;