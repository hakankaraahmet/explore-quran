"use client";
import React from "react";
import SurahCard from "../../components/partials/SurahCard";

const HomePage = () => {
  const dummyData = Array.from({length : 5})
  
  return (
    <div className="text-secondary_color w-full grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-4  lg:gap-8 xl:gap-12">
      {dummyData.map((data, i) => (
        <SurahCard key={i}/>
      ))}
    </div>
  );
};

export default HomePage;
