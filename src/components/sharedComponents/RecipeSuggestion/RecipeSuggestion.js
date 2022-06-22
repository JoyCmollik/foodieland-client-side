import React from "react";
import useRecipeList from "../../../hooks/useRecipeList";
import RecipeTimelineList from "../../../pages/HomePage/RecipeTimelineList/RecipeTimelineList";

const RecipeSuggestion = (props) => {
  const [recipeList] = useRecipeList();
  return (
    <div className="mt-28 mx-20">
      <h1 className="font-semibold text-4xl text-center mb-20">
        {props.title}
      </h1>
      <div className="grid grid-cols-4 gap-x-10 gap-y-6">
        {recipeList.slice(0, 4).map((recipe) => (
          <RecipeTimelineList
            key={recipe.id}
            recipeList={recipe}
          ></RecipeTimelineList>
        ))}
      </div>
    </div>
  );
};

export default RecipeSuggestion;
