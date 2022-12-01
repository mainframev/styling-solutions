import React from "react";
import Image from "next/legacy/image";
import Input from "./Input";
import Loading from "./Loading";
import useClickOutside from "../hooks/useClickOutside";
import SuggestionList from "./SuggestionList";
import styled from "styled-components";

const shimmer = (h: number) => `
<svg width="100%" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#ededed" offset="20%" />
      <stop stop-color="#dedede" offset="50%" />
      <stop stop-color="#d1d1d1" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="100%" height="${h}" fill="#dedede" />
  <rect id="r" width="100%" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-100%" to="100%" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === "undefined" ? Buffer.from(str).toString("base64") : window.btoa(str);

const StyledWrapper = styled.div`
  display: grid;
  position: relative;
  align-items: center;
  height: 100%;
  gap: 2rem;
`;

const StyledStack = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr;

  @media screen and (min-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const StyledImageWrapper = styled.div`
  position: relative;
  height: 400px;
  width: auto;
  &:hover {
    box-shadow: 0px 12px 24px -4px rgba(37, 42, 49, 0.24), 0px 8px 60px 0px rgba(37, 42, 49, 0.32);
  }

  @media screen and (min-width: 576px) {
    height: 300px;
    width: auto;
  }

  @media screen and (min-width: 768px) {
    height: 200px;
  } ;
`;

const DogList = ({
  images = [],
  isFetching,
  allSuggestions,
}: {
  images: string[];
  allSuggestions: string[];
  isFetching?: boolean;
}) => {
  const ref = React.useRef(null);
  const [value, setValue] = React.useState("");
  const [doges, setDoges] = React.useState<string[]>([]);
  const [active, setActive] = React.useState(0);
  const [breed, setBreed] = React.useState("");
  const [isLoading, setLoading] = React.useState(false);
  const [isDropdown, setDropDown] = React.useState(false);
  const [suggestions, setSuggestions] = React.useState(allSuggestions);

  useClickOutside(ref, () => setDropDown(false));

  const refs = suggestions.reduce<Record<number, React.RefObject<HTMLLIElement>>>((acc, _, idx) => {
    acc[idx] = React.createRef();
    return acc;
  }, {});

  React.useEffect(() => {
    if (isFetching) setLoading(true);
    if (images.length > 0) setDoges(images);

    async function fetchDoges() {
      const res = await fetch("/api/dogs?" + new URLSearchParams({ breed }));
      const data = await res.json();
      if (data) {
        setLoading(false);
        setDoges(data);
      }
    }

    if (breed) {
      setLoading(true);
      fetchDoges();
    } else {
      setLoading(false);
    }
  }, [breed, isFetching, images]);

  const scrollToItem = () => {
    if (refs && refs[active] && refs[active].current) {
      refs[active].current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  const handleKeyDown = (ev: React.KeyboardEvent<HTMLInputElement>) => {
    switch (ev.key) {
      case "Down":
      case "ArrowDown":
        setActive(prev => (active - 1 === suggestions.length ? suggestions.length - 1 : prev + 1));
        scrollToItem();
        break;
      case "Up":
      case "ArrowUp":
        setActive(prev => (active - 1 === 0 ? 0 : prev - 1));
        scrollToItem();
        break;
      case "Enter":
        setActive(0);
        setValue(suggestions[active]);
        setBreed(suggestions[active]);
        setDropDown(false);
        break;
      case "Esc":
      case "Escape":
        setDropDown(false);
        break;
      default:
        return;
    }
  };

  const handleChange = (value: string) => {
    const filteredSuggestions = allSuggestions.filter(
      suggestion => suggestion.toLowerCase().indexOf(value.toLowerCase()) > -1,
    );

    setValue(value);
    setSuggestions(filteredSuggestions);
    setDropDown(true);
  };

  const handleClick = (ev: React.MouseEvent<HTMLLIElement>) => {
    setBreed(ev.currentTarget.innerText);
    setValue(ev.currentTarget.innerText);
    setSuggestions([]);
    setDropDown(false);
    setActive(0);
  };

  return (
    <StyledWrapper>
      <Input
        onChange={(ev: React.ChangeEvent<HTMLInputElement>) => handleChange(ev.currentTarget.value)}
        onKeyDown={handleKeyDown}
        value={value}
      />
      {!isLoading && (
        <StyledStack>
          {doges.map((img, idx) => (
            <StyledImageWrapper key={idx}>
              <Image
                src={img}
                alt={breed}
                layout="fill"
                loading="lazy"
                sizes="(max-width: 576px) 100vw,
                (max-width: 768px) 50vw,
                33vw"
                placeholder="blur"
                objectFit="cover"
                blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(400))}`}
              />
            </StyledImageWrapper>
          ))}
        </StyledStack>
      )}
      {isDropdown && suggestions.length > 0 && (
        <SuggestionList
          active={active}
          ref={ref}
          refs={refs}
          suggestions={suggestions}
          onClick={handleClick}
        />
      )}
      {(isLoading || isFetching) && <Loading />}
    </StyledWrapper>
  );
};

export default DogList;
