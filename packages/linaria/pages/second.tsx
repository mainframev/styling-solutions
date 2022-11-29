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

export const getServerSideProps: GetServerSideProps<{
  images: string[] | never;
  allSuggestions?: string[];
  error?: boolean;
}> = async () => {
  try {
    const allSuggestionsRes = await fetch("https://dog.ceo/api/breeds/list/all");
    const allSuggestions = await allSuggestionsRes.json();
    const imagesRes = await fetch(`${process.env.NEXT_PUBLIC_API}/pembroke/images`);
    const images = await imagesRes.json();

    return {
      props: {
        images: images.message,
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
