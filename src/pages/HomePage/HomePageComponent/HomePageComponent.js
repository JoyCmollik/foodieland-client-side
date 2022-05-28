import React from "react";
import Categories from "../Categories/Categories";
import Hero from "../Hero/Hero";
import Highlights from "../Highlights/Highlights";
import RecipeTimeline from "../RecipeTimeline/RecipeTimeline";

const HomePageComponent = () => {
  return (
    <>
      <Hero />
      <Categories />
      <Highlights />
      <RecipeTimeline />
    </>
  );
};

export default HomePageComponent;
