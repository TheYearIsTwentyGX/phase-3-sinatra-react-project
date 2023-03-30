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
			<NavLink to="/AddArtist">
				<div className="addButton">
					<div className="addSymbol">
						<p id="addText">+</p>
					</div>
				</div>
			</NavLink>
		</div>
	);
}

export default ArtistList;