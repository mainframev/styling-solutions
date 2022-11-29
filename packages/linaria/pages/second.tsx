import axios from "axios";
import { GetServerSideProps } from "next";
import DogList from "../components/DogList";

interface Props {
  images: string[];
  allSuggestions: string[];
}

export default function SecondPage({ images, allSuggestions }: Props) {
  return (
    <>
      <h1>SSR</h1>
      <DogList images={images} allSuggestions={allSuggestions} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps<{ images: string[] | never, allSuggestions?: string[], error?: boolean }> = async ({ res }) => {
    try {
      res.setHeader("Cache-Control", "public, s-maxage=10, stale-while-revalidate=59");

      const { data: allSuggestions } = await axios.get("https://dog.ceo/api/breeds/list/all");

      const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API}/pembroke/images`);

      return {
        props: {
          images: data.message,
          allSuggestions: Object.keys(allSuggestions.message),
        },
      };
    } catch {
      return {
        props: {
          error: true,
          images: [],
        },
      };
    }
  };
