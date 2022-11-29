import React from "react";
import axios from "axios";
import DogList from "../components/DogList";

export default function IndexPage() {
  const [images, setImages] = React.useState([]);
  const [isFetching, setIsFetching] = React.useState(false);
  const [suggestions, setSuggestions] = React.useState<string[]>([]);

  React.useEffect(() => {
    async function fetchSuggestions() {
      const { data } = await axios.get("https://dog.ceo/api/breeds/list/all");
      if (data) {
        setSuggestions(Object.keys(data.message));
      }
    }

    fetchSuggestions();
  }, []);

  React.useEffect(() => {
    setIsFetching(true);
    async function fetchData() {
      const { data } = await axios.get("/api/dogs", {
        params: { breed: "pembroke" }
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
      <h1>CSF</h1>
      <DogList
        images={images}
        isFetching={isFetching}
        allSuggestions={suggestions}
      />
    </>
  );
}
