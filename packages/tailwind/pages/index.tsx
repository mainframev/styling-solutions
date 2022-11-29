import * as React from "react";
import axios from "axios";
import Heading from "../components/Heading";
import Head from "next/head";
import DogList from "../components/DogList";

export default function Home() {
  const [images, setImages] = React.useState([]);
  const [isFetching, setIsFetching] = React.useState(false);
  const [suggestions, setSuggestions] = React.useState<string[]>([]);

  React.useEffect(() => {
    async function fetchSuggestions() {
      const { data } = await axios.get("https://dog.ceo/api/breeds/list/all");
      if (data) setSuggestions(Object.keys(data.message));
    }

    fetchSuggestions();
  }, []);

  React.useEffect(() => {
    setIsFetching(true);
    async function fetchData() {
      const { data } = await axios.get("/api/dogs", {
        params: { breed: "pembroke" },
      });

      if (data) {
        setIsFetching(false);
        setImages(data);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <Head>
        <title>Tailwind rfc</title>
      </Head>
      <div>
        <Heading type="display" as="h1">
          CSF
        </Heading>
        <DogList images={images} isFetching={isFetching} allSuggestions={suggestions} />
      </div>
    </>
  );
}