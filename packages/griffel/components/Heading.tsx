import React from "react";
import { makeStyles, mergeClasses, shorthands } from "@griffel/react";

interface Props {
  type?: "display" | "displaySubtitle" | "title1" | "title2" | "title3" | "title4" | "title5";
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div";
}

const useClasses = makeStyles({
  basic: {
    fontWeight: "bold",
    ...shorthands.margin("0"),
  },
  display: {
    fontSize: "3rem",
    lineHeight: "3.2rem",
  },
  displaySubtitle: {
    fontSize: "2.5rem",
    lineHeight: "2.7rem",
  },
  title1: {
    fontSize: "2rem",
    lineHeight: "2.2rem",
  },
  title2: {
    fontSize: "1.8rem",
    lineHeight: "2rem",
  },
  title3: {
    fontSize: "1.6rem",
    lineHeight: "1.8rem",
  },
  title4: {
    fontSize: "1.4rem",
    lineHeight: "1.6rem",
  },
  title5: {
    fontSize: "1.2rem",
    lineHeight: "1.4rem",
  },
});

const Component = ({ as, children, type }: React.PropsWithChildren<Props>) => {
  const classes = useClasses();

  // NOTE: we cannot dynamically pass type to take a className
  const mergeWithBasic = mergeClasses(classes.basic, type && classes[type]);

  switch (as) {
    case "h1":
      return <h1 className={mergeWithBasic}>{children}</h1>;
    case "h2":
      return <h2 className={mergeWithBasic}>{children}</h2>;
    case "h3":
      return <h3 className={mergeWithBasic}>{children}</h3>;
    case "h4":
      return <h4 className={mergeWithBasic}>{children}</h4>;
    case "h5":
      return <h5 className={mergeWithBasic}>{children}</h5>;
    case "h6":
      return <h6 className={mergeWithBasic}>{children}</h6>;
    default:
      return <div className={mergeWithBasic}>{children}</div>;
  }
};

const Heading = ({ type = "display", children, as = "div" }: React.PropsWithChildren<Props>) => {
  return (
    <Component as={as} type={type}>
      {children}
    </Component>
  );
};

export default Heading;
