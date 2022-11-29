import React from "react";
import { makeStyles, shorthands } from "@griffel/react";

const useClasses = makeStyles({
  input: {
    width: "100%",
    boxSizing: "border-box",
    backgroundColor: "transparent",
    ...shorthands.borderRadius("6px"),
    ...shorthands.padding("12px", "8px"),
    ...shorthands.border("2px", "solid", "#9a91d9"),
    "::placeholder": {
      color: "#b3b3b3"
    },
    "&:focus": {
      "::placeholder": {
        color: "transparent"
      }
    }
  }
});

const Input = ({
  onChange,
  onKeyDown,
  value,
  placeholder = "Pembroke"
}: {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  value?: string;
  placeholder?: string;
}) => {
  const { input: inputStyles } = useClasses();

  return (
    <label>
      <input
        type="text"
        className={inputStyles}
        onChange={onChange}
        value={value}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
      />
    </label>
  );
};

export default Input;
