import React from "react";

interface Props {
  refs: Record<string, React.RefObject<HTMLLIElement>>;
  active: number;
  suggestions: string[];
  onClick: React.MouseEventHandler<HTMLLIElement>;
}

const SuggestionList = React.forwardRef<HTMLUListElement, Props>(
  ({ active, refs, suggestions, onClick }, ref) => {
    return (
      <ul ref={ref}>
        {suggestions.map((suggestion, idx) => (
          <li
            className={[
              "cursor-pointer",
              active === idx
                ? "text-blue-500 font-bold bg-blue-100"
                : "font-normal bg-white-100 text-ink-100",
            ].join(" ")}
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
