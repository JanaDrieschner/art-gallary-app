import useSWR from "swr";
import { useEffect, useState } from "react";
import ArtPieces from "../components/ArtPieces/index.js";
import ArtPiecePreview from "../components/ArtPiecePreview/index.js";

export default function HomePage() {
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art"
  );

  if (!data) {
    return <h1>Loading...</h1>;
  }

  console.log("data", data);
  return (
    <>
      <ArtPieces pieces={data} />
    </>
  );
}
