import React from "react";
import { css } from "@linaria/core";

const inputStyles = css`
  width: 100%;
  box-sizing: border-box;
  background: transparent;
  border-radius: 6px;
  padding: 12px 8px;
  border: 2px solid #9a91d9;
  &::placeholder {
    color: #b3b3b3;
  }

  &:focus {
    ::placeholder {
      color: transparent;
    }
  }
`;

const Input = ({
  onChange,
  onKeyDown,
  value,
  placeholder = "Pembroke",
}: {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  value?: string;
  placeholder?: string;
}) => {
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
