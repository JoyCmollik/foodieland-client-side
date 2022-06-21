import React from "react";
import Categories from "../Categories/Categories";
import FeaturedRecipeList from "../FeaturedRecipeList/FeaturedRecipeList";
import Hero from "../Hero/Hero";
import Highlights from "../Highlights/Highlights";
import RecipeTimeline from "../RecipeTimeline/RecipeTimeline";
import Subscribe from "../Subscribe/Subscribe";

const HomePageComponent = () => {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedRecipeList />
      <Highlights />
      <RecipeTimeline />
      <Subscribe />
    </>
  );
};

export default HomePageComponent;
