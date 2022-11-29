import React from "react";
import { css } from "@linaria/atomic";
import { cx } from "@linaria/core";

interface Props {
  type?: "display" | "displaySubtitle" | "title1" | "title2" | "title3" | "title4" | "title5";
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div";
}

const classes = {
  basic: css`
    font-weight: bold;
    margin: 0;
  `,
  display: css`
    font-size: 3rem;
    line-height: 3.2rem;
  `,
  displaySubtitle: css`
    font-size: 2.5rem;
    line-height: 2.7rem;
  `,
  title1: css`
    font-size: 2rem;
    line-height: 2.2rem;
  `,
  title2: css`
    font-size: 1.8rem;
    line-height: 2rem;
  `,
  title3: css`
    font-size: 1.6rem;
    line-height: 1.8rem;
  `,
  title4: css`
    font-size: 1.4rem;
    line-height: 1.6rem;
  `,
  title5: css`
    font-size: 1.2rem;
    line-height: 1.4rem;
  `,
};

const Component = ({
  as,
  children,
  type,
}: {
  as: Props["as"];
  children: React.ReactNode;
  type: Props["type"];
}) => {
  const mergeWithBasic = cx(classes.basic, type && classes[type]);

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
