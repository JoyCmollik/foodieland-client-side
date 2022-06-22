import { useEffect } from "react";
import { useState } from "react";

const useRecipeList = () => {
  const [recipeList, setRecipeList] = useState([]);

  useEffect(() => {
    fetch("recipeTimeline.json")
      .then((res) => res.json())
      .then((data) => {
        setRecipeList(data);
      });
  }, []);
  return [recipeList];
};

export default useRecipeList;
