import React from "react";
import { cx, css } from "@linaria/core";

interface Props {
  refs: Record<string, React.RefObject<HTMLLIElement>>;
  active: number;
  suggestions: string[];
  onClick: React.MouseEventHandler<HTMLLIElement>;
}

const listItemStyle = css`
  cursor: pointer;
  padding: 0.5rem 1rem;

  &:hover {
    color: blue;
  }

  &.activeListItem {
    color: blue;
    font-weight: bold;
    background: #b8b0f9;
  }
`;

const listWrapperStyle = css`
  position: absolute;
  top: 50px;
  z-index: 10;
  background: #fff;
  width: 100%;
  list-style: none;
  max-height: 200px;
  overflow-y: scroll;
  opacity: 0.9;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
`;

const SuggestionList = React.forwardRef<HTMLUListElement, Props>(
  ({ active, refs, suggestions, onClick }, ref) => {
    return (
      <ul className={listWrapperStyle} ref={ref}>
        {suggestions.map((suggestion, idx) => (
          <li
            className={cx(listItemStyle, idx === active && "activeListItem")}
            ref={refs[idx]}
            key={suggestion}
            onClick={onClick}
          >
            {suggestion}
          </li>
        ))}
      </ul>
    );
  },
);

SuggestionList.displayName = "SuggestionListComponent";

export default SuggestionList;
