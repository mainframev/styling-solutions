import React from "react";

interface Props {
  customBackground?: string;
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
  $type: Props["type"];
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
  background-color: ${({ $type, $customBackground }) =>
    getBackgroundColor({ type: $type, customBackground: $customBackground })};
  transition: background-color 0.25s ease-in;
  color: ${({ $type }) => getColor($type)};
  &:hover {
    background-color: ${({ $type }) => getBackgroundColor({ type: $type, hover: true })};
  }
`;

const Button = ({
  type,
  size = "medium",
  children,
  customBackground,
}: React.PropsWithChildren<Props>) => {
  return (
    <StyledButton $type={type} $size={size} tabIndex={0} $customBackground={customBackground}>
      {children}
    </StyledButton>
  );
};

export default Button;
