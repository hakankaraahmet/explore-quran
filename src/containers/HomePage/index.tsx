"use client";
import Button from "@/components/shared/Button";
import React from "react";

const HomePage = () => {
  return (
    <div className="text-primary_color w-full md:w-2/3 lg:w-1/2  my-auto">
      <div className="w-2/3 pl-4 lg:pl-0 lg:mx-auto">
        <h1 className="text-2xl lg:text-5xl font-bold my-8">
          Welcome to the world of Quran
        </h1>
        <p className="lg:text-xl ">
          Embark on a journey of discovery with our Quran application. Delve
          into the timeless beauty and guidance of each Surah, from the soothing
          verses of Al-Fatiha to the profound reflections of Al-Baqarah. Uncover
          spiritual treasures that transcend time, offering solace, insight, and
          a path to righteousness. Your companion in exploring the depths of the
          Quran's wisdom.
        </p>
      </div>
      <div className="flex mt-4 w-full lg:w-2/3 pl-4 lg:pl-0 lg:mx-auto">
        <Button title="Explore Quran" onClick={() => console.log(`clicked`)} />
        <Button
          title="About Me"
          onClick={() => console.log(`clicked`)}
          className="ml-4"
        />
      </div>
    </div>
  );
};

export default HomePage;
