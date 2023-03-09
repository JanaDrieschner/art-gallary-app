import Image from "next/image";

export default function Spotlight({ image, artist }) {
  return (
    <>
      <h1> Piece of the Day </h1>
      <ul>
        <li>
          <Image src={image} width={400} height={400} alt="random Image" />
        </li>
        <li>
          <p>{artist}</p>
        </li>
      </ul>
    </>
  );
}
