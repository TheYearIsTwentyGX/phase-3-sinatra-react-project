import React, { useState, useEffect} from "react";

const ArtistContext = React.createContext();

function ArtistProvider({ children }) {
	const [artists, setArtists] = useState([]);
	const [songs, setSongs] = useState([]);
	useEffect(() => {
		fetch("http://localhost:9292/artists")
			.then((response) => response.json())
			.then((data) => setArtists(data));
		fetch("http://localhost:9292/songs")
			.then((response) => response.json())
			.then((data) => setSongs(data));
		}, []);
	return (
		<ArtistContext.Provider value={{artists, songs}}>
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