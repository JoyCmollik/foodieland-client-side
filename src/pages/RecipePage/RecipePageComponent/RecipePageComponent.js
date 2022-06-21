import React from "react";
import RecipeIngredients from "../RecipeIngredients/RecipeIngredients";

import RecipeIntro from "../RecipeIntro/RecipeIntro";

const RecipePageComponent = () => {
  return (
    <div>
      <RecipeIntro />
      <RecipeIngredients />
    </div>
  );
};

export default RecipePageComponent;
