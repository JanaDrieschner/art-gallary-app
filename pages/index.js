import useSWR from "swr";
import ArtPieces from "../components/ArtPieces/index.js";
import Spotlight from "../components/Spotlight/index.js";

export default function HomePage() {
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art"
  );

  if (!data) {
    return <h1>Loading...</h1>;
  }

  const randomImage = handleRandomImage();

  function handleRandomImage() {
    const randomArtist = Math.floor(Math.random() * data.length);
    return randomArtist;
  }

  return (
    <>
      <ArtPieces pieces={data} />
      <Spotlight
        image={data[randomImage].imageSource}
        artist={data[randomImage].artist}
      />
    </>
  );
}
