import * as React from "react";
import { styled } from "@compiled/react";

interface Props {
  type?: "display" | "displaySubtitle" | "title1" | "title2" | "title3" | "title4" | "title5";
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div";
}

const StyledComponent = styled.div<{ as: Props["as"] }>`
  margin: 0.5rem 0;
  font-weight: 700;
`;

const Heading = ({ type = "display", children, as = "div" }: React.PropsWithChildren<Props>) => {
  return (
    <StyledComponent
      as={as}
      css={[
        type === "display" && { fontSize: "3rem", lineHeight: "3.2rem" },
        type === "displaySubtitle" && { fontSize: "2.5rem", lineHeight: "2.7rem" },
        type === "title1" && { fontSize: "2rem", lineHeight: "2.2rem" },
        type === "title2" && { fontSize: "1.8rem", lineHeight: "2rem" },
        type === "title3" && { fontSize: "1.6rem", lineHeight: "1.8rem" },
        type === "title4" && { fontSize: "1.4rem", lineHeight: "1.6rem" },
        type === "title5" && { fontSize: "1.2rem", lineHeight: "1.4rem" },
      ]}
    >
      {children}
    </StyledComponent>
  );
};

export default Heading;
