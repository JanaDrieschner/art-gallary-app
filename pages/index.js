import useSWR from "swr";
import { useEffect, useState } from "react";
import ArtPieces from "../components/ArtPieces/index.js";
import ArtPiecePreview from "../components/ArtPiecePreview/index.js";

export default function HomePage() {
  const { data = [] } = useSWR("https://example-apis.vercel.app/api/art");

  console.log("data", data);
  return (
    <>
      <ArtPieces pieces={data} />
      <ArtPiecePreview pieces={data} />
    </>
  );
}
