import React from "react";
import styled, { css } from "styled-components";

interface Props {
  refs: Record<string, React.RefObject<HTMLLIElement>>;
  active: number;
  suggestions: string[];
  onClick: React.MouseEventHandler<HTMLLIElement>;
}

const StyledListItem = styled.li`
  cursor: pointer;
  padding: 0.5rem 1rem;

  &:hover {
    color: blue;
  }
`;

const StyledListWrapper = styled.ul`
  position: absolute;
  top: 50px;
  z-index: 10;
  background: ${({ theme }) => theme.cloud["100"]};
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
      <StyledListWrapper ref={ref}>
        {suggestions.map((suggestion, idx) => (
          <StyledListItem
            css={css`
              color: ${active === idx ? "blue" : "#000"};
              font-weight: ${active === idx ? "bold" : "normal"};
              background: ${active === idx ? "#b8b0f9" : "#fff"};
            `}
            ref={refs[idx]}
            key={suggestion}
            onClick={onClick}
          >
            {suggestion}
          </StyledListItem>
        ))}
      </StyledListWrapper>
    );
  },
);

SuggestionList.displayName = "SuggestionListComponent";

export default SuggestionList;
