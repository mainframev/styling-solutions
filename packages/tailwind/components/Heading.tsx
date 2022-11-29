import * as React from "react";

interface Props {
  type?: "display" | "displaySubtitle" | "title1" | "title2" | "title3" | "title4" | "title5";
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div";
}

const Heading = ({ type = "display", children, as = "div" }: React.PropsWithChildren<Props>) => {
  const Component = as;
  return (
    <Component
      className={[
        type === "display" && "text-5xl font-bold",
        type === "displaySubtitle" && "text-4xl font-bold",
        type === "title1" && "text-3xl font-bold",
        type === "title2" && "text-2xl font-bold",
        type === "title3" && "text-xl font-bold",
        type === "title4" && "text-lg font-bold",
        type === "title5" && "text-base uppercase font-bold",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </Component>
  );
};

export default Heading;
