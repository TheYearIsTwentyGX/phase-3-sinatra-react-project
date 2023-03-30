import Artist from "./Artist";
import "./Style/ArtistList.css";
import { ArtistContext, useArtists } from "../Context/ArtistContext";
import { useContext, useEffect } from "react";

function ArtistList() {
	const { artists } = useArtists();
  	return (
			<div className="artistList">
				{artists.map((artist) => (
					<Artist key={artist.id} props={artist} />
				))}
				<div className="addButton">
					<div className="addSymbol">
						<p id="addText">+</p>
					</div>
				</div>
			</div>
		);
}

export default ArtistList;