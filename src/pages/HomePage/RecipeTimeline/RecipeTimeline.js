import React, { useEffect, useState } from "react";
import RecipeTimelineList from "../RecipeTimelineList/RecipeTimelineList";

const RecipeTimeline = () => {
  const [recipeList, setRecipeList] = useState([]);

  useEffect(() => {
    fetch("recipeTimeline.json")
      .then((res) => res.json())
      .then((data) => {
        setRecipeList(data);
      });
  }, []);

  return (
    <div className="mb-60 mx-20">
      {/* title-section */}
      <div
        className="flex justify-between gap-4 "
        style={{ marginBottom: "60px" }}
      >
        <h2 className="text-5xl	font-semibold">
          Try this delicious recipe
          <br />
          to make your day
        </h2>
        <p className="text-gray-500 font-normal ">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor
          <br />
          incididunt ut labore et dolore magna aliqut enim ad minim{" "}
        </p>
      </div>
      {/* RecipeTimelineList */}
      <div className="grid grid-cols-4 gap-x-10 gap-y-6 mx-auto">
        {recipeList.map((recipe) => (
          <RecipeTimelineList
            key={recipe.id}
            recipeList={recipe}
          ></RecipeTimelineList>
        ))}
      </div>
    </div>
  );
};

export default RecipeTimeline;
