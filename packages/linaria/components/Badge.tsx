import * as React from "react";
import { styled } from "@linaria/react";
import { defaultTheme } from "../styles/theme";

interface Props {
  type?: "primary" | "secondary" | "success" | "warning" | "alert";
}

const getBackgroundColor = (theme: typeof defaultTheme, type?: Props["type"]) => {
  if (type === "secondary") return theme.components.badge.secondary.backgroundColor;
  if (type === "success") return theme.components.badge.success.backgroundColor;
  if (type === "warning") return theme.components.badge.warning.backgroundColor;
  if (type === "alert") return theme.components.badge.alert.backgroundColor;

  return theme.components.badge.primary.backgroundColor;
};

const getTextColor = (theme: typeof defaultTheme, type?: Props["type"]) => {
  if (type === "secondary") return theme.components.badge.secondary.color;
  if (type === "success") return theme.components.badge.success.color;
  if (type === "warning") return theme.components.badge.warning.color;
  if (type === "alert") return theme.components.badge.alert.color;

  return theme.components.badge.primary.color;
};

const StyledBadge = styled.div<{ theme: typeof defaultTheme; type: Props["type"] }>`
  display: inline-block;
  font-weight: 450;
  text-align: center;
  border-radius: 6px;
  padding: 8px 12px;
  background: ${({ type, theme }) => getBackgroundColor(theme, type)};
  color: ${({ type, theme }) => getTextColor(theme, type)};
`;

const Badge = ({ type = "primary", children }: React.PropsWithChildren<Props>) => {
  return (
    <StyledBadge theme={defaultTheme} type={type}>
      {children}
    </StyledBadge>
  );
};

export default Badge;
