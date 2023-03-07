import useSWR from "swr";
import { useEffect, useState } from "react";
import ArtPieces from "../components/ArtPieces/index.js";

export default function HomePage() {
  // const { data } = useSWR("https://example-apis.vercel.app/api/art");
  const [data, setData] = useState([]);
  // console.log("data", data);
  useEffect(() => {
    async function getData() {
      const response = await fetch("https://example-apis.vercel.app/api/art");
      if (response.ok) {
        const newData = await response.json();
        console.log("data", newData);
        setData(newData);
      } else {
        console.log(response.statusText);
      }
    }
    getData();
  }, []);
  return <ArtPieces pieces={data} />;
}
