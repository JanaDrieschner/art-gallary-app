import Spotlight from "../components/Spotlight/index.js";

export default function SpotlightPage({ pieces }) {
  if (pieces.length < 1) {
    return <h1>Loading...</h1>;
  }

  const randomImage = handleRandomImage();

  function handleRandomImage() {
    const randomArtist = Math.floor(Math.random() * pieces.length);
    return randomArtist;
  }

  return (
    <>
      <Spotlight
        image={pieces[randomImage].imageSource}
        artist={pieces[randomImage].artist}
      />
    </>
  );
}
