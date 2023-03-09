import ArtPiecePreview from "../ArtPiecePreview/index.js";

export default function ArtPieces({ pieces }) {
  return pieces.map((piece) => {
    console.log(piece);
    return (
      <ul key={piece.slug}>
        <ArtPiecePreview pieces={piece} />
      </ul>
    );
  });
}
