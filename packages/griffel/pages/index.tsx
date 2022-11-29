import React from "react";
import DogList from "../components/DogList";

export default function IndexPage() {
  const [images, setImages] = React.useState([]);
  const [isFetching, setIsFetching] = React.useState(false);
  const [suggestions, setSuggestions] = React.useState<string[]>([]);

  React.useEffect(() => {
    async function fetchSuggestions() {
      const res = await fetch("https://dog.ceo/api/breeds/list/all");
      const { message } = await res.json();
      if (message) setSuggestions(Object.keys(message));
    }

    fetchSuggestions();
  }, []);

  React.useEffect(() => {
    setIsFetching(true);
    async function fetchData() {
      const res = await fetch("/api/dogs?" + new URLSearchParams({ breed: "pembroke" }));
      const data = await res.json();
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
      <DogList images={images} isFetching={isFetching} allSuggestions={suggestions} />
    </>
  );
}
