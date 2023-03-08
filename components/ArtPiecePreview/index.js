import ArtPieces from "../ArtPieces";
import Image from "next/image";

export default function ArtPiecePreview({ pieces }) {
  return (
    <>
      <li key={pieces.slug}>
        <h2>{pieces.name}</h2>
        <Image
          priority
          src={pieces.imageSource}
          width={400}
          height={400}
          alt="painting"
        />
        <p>{pieces.artist}</p>
      </li>
    </>
  );
}
