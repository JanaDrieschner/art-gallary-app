import ArtPieces from "../ArtPieces";

export default function ArtPiecePreview({
  pieces,
  slug,
  image,
  title,
  artist,
}) {
  return (
    <ul>
      {pieces.map(({ slug, name, artist }) => {
        return (
          <li key={slug}>
            {artist}, {name}
          </li>
        );
      })}
    </ul>
  );
}
