import * as React from "react";
import styled, { css } from "styled-components";
interface Props {
  type?: "display" | "displaySubtitle" | "title1" | "title2" | "title3" | "title4" | "title5";
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div";
}

const getFontSize = (type: Props["type"]) => {
  if (type === "display") return "2.8rem";
  if (type === "title1") return "2.2rem";
  if (type === "title2") return "1.8rem";
  if (type === "title3") return "1.6rem";
  if (type === "title4") return "1.4rem";
  if (type === "title5") return "1.2rem";

  return "2.5rem";
};

const StyledComponent = styled.div<Props>`
  ${({ type }) => css`
    margin: 0.5rem 0;
    font-weight: 700;
    font-size: ${getFontSize(type)};
  `};
`;

const Heading = ({ type = "display", children, as = "div" }: React.PropsWithChildren<Props>) => {
  return (
    <StyledComponent as={as} type={type}>
      {children}
    </StyledComponent>
  );
};

export default Heading;
