import ArtPiecePreview from "../ArtPiecePreview";

export default function ArtPieces({ pieces }) {
  return (
    <ul>
      {pieces.map((piece) => {
        return <li key={piece.slug}>{piece.name}</li>;
      })}
    </ul>
  );
}
