import React from "react";
import clsx from "clsx";

interface Props {
  refs: Record<string, React.RefObject<HTMLLIElement>>;
  active: number;
  suggestions: string[];
  onClick: React.MouseEventHandler<HTMLLIElement>;
}

const SuggestionList = React.forwardRef<HTMLUListElement, Props>(
  ({ active, refs, suggestions, onClick }, ref) => {
    return (
      <ul
        ref={ref}
        className="absolute top-12 w-full z-10 bg-white-100 list-none max-h-44 overflow-y-scroll opacity-90 box-border shadow-lg"
      >
        {suggestions.map((suggestion, idx) => (
          <li
            className={clsx(
              "cursor-pointer p-2",
              active === idx
                ? "text-blue-500 font-bold bg-blue-100"
                : "font-normal bg-white-100 text-ink-100",
            )}
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
