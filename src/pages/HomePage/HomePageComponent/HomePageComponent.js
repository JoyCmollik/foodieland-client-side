import React from "react";
import Footer from "../../../components/sharedComponents/Footer/Footer";
import Categories from "../Categories/Categories";
import FeaturedRecipeList from "../FeaturedRecipeList/FeaturedRecipeList";
import Hero from "../Hero/Hero";
import Highlights from "../Highlights/Highlights";
import RecipeTimeline from "../RecipeTimeline/RecipeTimeline";
import Subscribe from "../Subscribe/Subscribe";

const HomePageComponent = () => {
  return (
    <div className="space-y-[160px]">
      <Hero />
      <Categories />
      <FeaturedRecipeList />
      <Highlights />
      <RecipeTimeline />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default HomePageComponent;
