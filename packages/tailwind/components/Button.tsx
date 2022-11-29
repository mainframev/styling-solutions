import React from "react";
import clsx from "clsx";

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

const Button = ({
  type = "primary",
  size = "medium",
  children,
  customBackground,
}: React.PropsWithChildren<Props>) => {
  return (
    <button
      type="button"
      style={{ background: customBackground }}
      className={clsx(
        "rounded-md cursor-pointer inline-flex border-0 box-border font-medium items-center",
        size === "small" && "p-2",
        size === "medium" && "p-3",
        size === "large" && "p-4",
        type === "primary" && "bg-product-400 text-white-100 hover:bg-product-500",
        type === "secondary" && "bg-cloud-400 text-white hover:bg-cloud-500",
        type === "success" && "bg-green-400 hover:bg-green-500 text-white-100",
        type === "warning" && "bg-orange-400 text-white-100 hover:bg-orange-500",
        type === "alert" && "bg-red-400 text-white-100 hover:bg-red-500",
        customBackground && `bg-${customBackground}`,
      )}
    >
      {children}
    </button>
  );
};

export default Button;
