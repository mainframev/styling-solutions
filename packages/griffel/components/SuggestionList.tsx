import React from "react";
import { makeStyles, shorthands, mergeClasses } from "@griffel/react";

interface Props {
  refs: Record<string, React.Ref<HTMLLIElement>>;
  active: number;
  suggestions: string[];
  onClick: React.MouseEventHandler<HTMLLIElement>;
}

const useClasses = makeStyles({
  listItemStyle: {
    fontSize: "14px",
    cursor: "pointer",
    ...shorthands.padding(".5rem", "1rem"),
    "&:hover": {
      color: "blue",
    },
    "&.activeListItem": {
      backgroundColor: "#b8b0f9",
      color: "blue",
      fontWeight: "bold",
    },
  },
  listWrapperStyle: {
    position: "absolute",
    top: "50px",
    zIndex: "10",
    backgroundColor: "#fff",
    width: "100%",
    listStyleType: "none",
    maxHeight: "200px",
    overflowY: "scroll",
    opacity: ".9",
    boxSizing: "border-box",
    ...shorthands.margin("0px"),
    ...shorthands.padding("0px"),
  },
});

const SuggestionList = React.forwardRef<HTMLUListElement, Props>(
  ({ active, refs, suggestions, onClick }, ref) => {
    const classes = useClasses();

    return (
      <ul className={classes.listWrapperStyle} ref={ref}>
        {suggestions.map((suggestion, idx) => (
          <li
            className={mergeClasses(classes.listItemStyle, idx === active && "activeListItem")}
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

SuggestionList.displayName = "SuggestionList";

export default SuggestionList;
