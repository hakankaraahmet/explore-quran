import React from "react";
import Search from "../../components/shared/Search";
import HomePageLoadingSkeleton from "../../components/partials/HomePageLoadingSkeleton";

const Loading = () => {
  return (
    <div>
      <Search />
      <HomePageLoadingSkeleton/>
    </div>
  );
};

export default Loading;
