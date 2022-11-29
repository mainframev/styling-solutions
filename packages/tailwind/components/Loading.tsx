import React from "react";
import LoaderIcon from "./LoaderIcon";

const Loading = () => {
  return (
    <div className="flex flex-col items-center w-full absolute z-100 gap-2 mx-8">
      <LoaderIcon />
      <p className="text-2xl text-cloud-200 text-center">Loading</p>
    </div>
  );
};

export default Loading;
