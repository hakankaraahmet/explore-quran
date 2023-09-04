import React from "react";
import CardStar from "../../icons/CardStar";

const MainLoadingSkeleton = () => {
  return (
    <div className="flex-1 flex justify-center items-center">
      <span className="scale-150 rotate">
        <CardStar />
      </span>
    </div>
  );
};

export default MainLoadingSkeleton;
