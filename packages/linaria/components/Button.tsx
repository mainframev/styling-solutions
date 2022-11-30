import React from "react";
import { styled } from "@linaria/react";
import { useTheme, defaultTheme } from "styles/theme";

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
  theme,
  customBackground,
  hover,
}: {
  type?: Props["type"];
  theme: typeof defaultTheme;
  customBackground?: Props["customBackground"];
  hover?: boolean;
}): string => {
  if (customBackground) return customBackground;
  const bgToken = theme.components.button[type || "primary"];
  if (hover) return bgToken.backgroundHover;
  return bgToken.background;
};

const getColor = (type?: Props["type"]) => (theme: typeof defaultTheme) => {
  const bgToken = theme.components.button[type || "primary"];
  return bgToken.color;
};

const getSize = (size?: Props["size"]) => {
  if (size === "small") return 8;
  if (size === "large") return 16;

  return 12;
};

const StyledButton = styled.button<{
  $type: Props["type"];
  $theme: typeof defaultTheme;
  $size: Props["size"];
  $customBackground?: Props["customBackground"];
}>`
  display: inline-flex;
  align-items: center;
  border: 0;
  border-radius: 6px;
  padding: ${({ $size }) => `${getSize($size)}px`};
  box-sizing: border-box;
  font-weight: 450;
  cursor: pointer;
  background-color: ${({ $type, $customBackground, $theme }) =>
    getBackgroundColor({ type: $type, customBackground: $customBackground, theme: $theme })};
  transition: background-color 0.25s ease-in;
  color: ${({ $type, $theme }) => getColor($type)($theme)};
  &:hover {
    background-color: ${({ $type, $theme }) =>
      getBackgroundColor({ type: $type, hover: true, theme: $theme })};
  }
`;

const Button = ({
  type,
  size = "medium",
  children,
  customBackground,
}: React.PropsWithChildren<Props>) => {
  const theme = useTheme();

  return (
    <StyledButton
      $type={type}
      $size={size}
      tabIndex={0}
      $customBackground={customBackground}
      $theme={theme}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
