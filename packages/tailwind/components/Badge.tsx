import React from "react";
import clsx from "clsx";

interface Props {
  type?: "primary" | "secondary" | "success" | "alert" | "warning";
}

const Badge: React.FC<React.PropsWithChildren<Props>> = ({ type = "primary", children }) => {
  return (
    <div
      className={clsx(
        "inline-block text-center font-medium border-md px-2 py-1 rounded-md text-sm",
        type === "primary" && "bg-product-500 hover:bg-blue-600 text-white-100",
        type === "secondary" && "bg-cloud-500 hover:bg-cloud-600 text-ink-800",
        type === "success" && "bg-green-500 hover:bg-green-600 text-white-100",
        type === "warning" && "bg-orange-500 hover:bg-orange-600 text-white-100",
        type === "alert" && "bg-red-500 hover:bg-red-600 text-white-100",
      )}
    >
      {children}
    </div>
  );
};

export default Badge;
