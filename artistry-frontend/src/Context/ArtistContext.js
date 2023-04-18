import React, { useState, useEffect} from "react";

const ArtistContext = React.createContext();

function ArtistProvider({ children }) {
	const [artists, setArtists] = useState([]);
	const [songs, setSongs] = useState([]);
	const [editArtist, setEditArtist] = useState(null);

	//Get all songs and artists immediately
	useEffect(() => {
		fetch("http://localhost:9292/artists")
			.then((response) => response.json())
			.then((data) => setArtists(data));
		fetch("http://localhost:9292/songs")
			.then((response) => response.json())
			.then((data) => setSongs(data));
		}, []);
	return (
		<ArtistContext.Provider value={{artists, setArtists, songs, setSongs, editArtist, setEditArtist}}>
			{children}
		</ArtistContext.Provider>
	);
}

export { ArtistProvider, ArtistContext };

export function useArtists() {
	const context = React.useContext(ArtistContext);
	if (context === undefined) {
		throw new Error("useArtists must be used within a ArtistProvider");
	}
	return context;
}