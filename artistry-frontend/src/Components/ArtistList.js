import Artist from "./Artist";
import "./Style/ArtistList.css";

function ArtistList({props = []}) {
  	return (
			<div className="artistList">
				{props.map((artist) => (
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