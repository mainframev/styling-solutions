import React from "react";

interface Props {
  type?: "primary" | "secondary" | "success" | "alert";
}

const Badge: React.FC<React.PropsWithChildren<Props>> = ({ type = "primary", children }) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default Badge;
