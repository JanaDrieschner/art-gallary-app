import ArtPieces from "../ArtPieces";
import Image from "next/image";

export default function ArtPiecePreview({ pieces }) {
  return (
    <>
      <li key={pieces.slug}>
        <Image
          src={pieces.imageSource}
          width={400}
          height={400}
          alt="painting"
        />
        <p>
          {pieces.artist}, {pieces.name}
        </p>
      </li>
    </>
  );
}
