import React from "react";
import PacmanLoader from "react-spinners/PacmanLoader";

const LoadingPage = () => {
  return (
    <>
      <div className="background-image">
        <div className="loading">
          <h2>
            Cảm ơn bạn đã đến với seaFurniture. Vui lòng đợi sau ít phút...
          </h2>
          <PacmanLoader
            loading={true}
            color="#f7941d"
            speedMultiplier="1"
            size="30px"
            width={100}
            height={100}
          />
        </div>
      </div>
    </>
  );
};

export default LoadingPage;
