import Artist from "./Artist";
import "./Style/ArtistList.css";
import { ArtistContext, useArtists } from "../Context/ArtistContext";
import { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";

function ArtistList() {
	const { artists } = useArtists();
	return (
		<div className="artistList">
			{artists.map((artist) => (
				<Artist key={artist.id} ArtistID={artist.id} />
			))}
		</div>
	);
}

export default ArtistList;