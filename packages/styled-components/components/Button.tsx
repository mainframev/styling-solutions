import styled, { css } from "styled-components";
import defaultTheme from "../styles/theme";

export type ButtonCustomColors =
  | "Brown"
  | "CornflowerBlue"
  | "DarkGoldenRod"
  | "DarkOliveGreen"
  | "DarkSalmon"
  | "DarkSlateGray"
  | "IndianRed"
  | "MidnightBlue"
  | "Sienna"
  | "Teal"
  | "YellowGreen";

interface Props {
  customBackground?: ButtonCustomColors;
  type?: "primary" | "secondary" | "success" | "warning" | "alert";
  size?: "small" | "medium" | "large";
}

const getBackgroundColor = ({
  type,
  customBackground,
  hover,
}: {
  type?: Props["type"];
  customBackground?: Props["customBackground"];
  hover?: boolean;
}): string => {
  if (customBackground) return customBackground;
  const bgToken = defaultTheme.components.button[type || "primary"];
  if (hover) return bgToken.backgroundHover;
  return bgToken.background;
};

const getColor = (type?: Props["type"]) => {
  const bgToken = defaultTheme.components.button[type || "primary"];
  return bgToken.color;
};

const getSize = (size?: Props["size"]) => {
  if (size === "small") return 8;
  if (size === "large") return 16;

  return 12;
};

const StyledButton = styled.button<{
  buttonType: Props["type"];
  size: Props["size"];
  customBackground: Props["customBackground"];
}>`
  ${({ buttonType, size, customBackground }) => css`
    display: inline-flex;
    align-items: center;
    border: 0;
    border-radius: 6px;
    padding: ${getSize(size)}px;
    box-sizing: border-box;
    font-weight: 450;
    cursor: pointer;
    background-color: ${getBackgroundColor({ type: buttonType, customBackground })};
    transition: background-color 0.25s ease-in;
    color: ${getColor(buttonType)};
    &:hover {
      background-color: ${getBackgroundColor({ type: buttonType, hover: true })};
    }
  `};
`;

const Button = ({
  type,
  size = "medium",
  children,
  customBackground,
}: React.PropsWithChildren<Props>) => {
  return (
    <StyledButton buttonType={type} size={size} tabIndex={0} customBackground={customBackground}>
      {children}
    </StyledButton>
  );
};

export default Button;
