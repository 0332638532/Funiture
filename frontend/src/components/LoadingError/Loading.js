import React from "react";
import DotLoader from "react-spinners/DotLoader";

const Loading = () => {
  return (
    <>
      <div className="loading-page">
        <DotLoader
          loading={true}
          color="#36D7B7"
          speedMultiplier="1"
          size="45px"
        />
      </div>
    </>
  );
};

export default Loading;
