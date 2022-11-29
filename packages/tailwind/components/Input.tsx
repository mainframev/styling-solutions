import React from "react";

interface Props {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const Input = ({ onChange, onKeyDown, value, placeholder = "Select breed" }: Props) => {
  return (
    <label>
      <input
        type="text"
        className=""
        onChange={onChange}
        value={value}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
      />
    </label>
  );
};

export default Input;
