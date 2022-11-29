import React from "react";
import LoaderIcon from "./LoaderIcon";

// const StyledText = styled.span`
//   font-size: 1.5rem;
//   color: #ccc;
//   text-align: center;
// `;

// const StyledWrapper = styled.div`
//   display: flex;
//   position: absolute;
//   z-index: 100;
//   flex-direction: column;
//   justify-content: center;
//   width: 100%;
//   align-items: center;
//   gap: 8px;
//   margin: 2rem 0;
// `;

const Loading = () => {
  return (
    <div>
      <LoaderIcon />
      <p>Loading</p>
    </div>
  );
};

export default Loading;
