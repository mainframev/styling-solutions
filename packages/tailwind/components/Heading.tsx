import * as React from "react";
import clsx from "clsx";

interface Props {
  type?: "display" | "displaySubtitle" | "title1" | "title2" | "title3" | "title4" | "title5";
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div";
}

const Heading = ({ type = "display", children, as = "div" }: React.PropsWithChildren<Props>) => {
  const Component = as;
  return (
    <Component
      className={clsx(
        "font-bold my-2",
        type === "display" && "text-5xl",
        type === "displaySubtitle" && "text-4xl",
        type === "title1" && "text-3xl",
        type === "title2" && "text-2xl",
        type === "title3" && "text-xl",
        type === "title4" && "text-lg",
        type === "title5" && "text-base uppercase",
      )}
    >
      {children}
    </Component>
  );
};

export default Heading;
