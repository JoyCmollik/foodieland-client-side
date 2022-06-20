import React from "react";
import Categories from "../Categories/Categories";
import Hero from "../Hero/Hero";
import Highlights from "../Highlights/Highlights";
import RecipeTimeline from "../RecipeTimeline/RecipeTimeline";
import Subscribe from "../Subscribe/Subscribe";

const HomePageComponent = () => {
  return (
    <>
      <Hero />
      <Categories />
      <Highlights />
      <RecipeTimeline />
      <Subscribe />
    </>
  );
};

export default HomePageComponent;
