import ArtPiecePreview from "../ArtPiecePreview/index.js";
import Image from "next/image";

export default function ArtPieces({ pieces }) {
  return pieces.map((piece) => {
    return (
      <ul key={piece.slug}>
        <ArtPiecePreview pieces={piece} />
      </ul>
    );
  });
}
