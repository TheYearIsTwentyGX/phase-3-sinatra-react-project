import Artist from "./Artist";
import { useArtists } from "../Context/ArtistContext";

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