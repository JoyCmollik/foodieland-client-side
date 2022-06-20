import React, { useState } from "react";
import { RiTimerFill } from "react-icons/ri";
import { MdRestaurant } from "react-icons/md";
import { AiFillHeart } from "react-icons/ai";
const RecipeTimelineList = (props) => {
  const { name, img } = props.recipeList;
  const [value, setValue] = useState("text-gray-500");
  const handleIcon = (newValue) => {
    if (value === "text-gray-500") {
      newValue = "text-red-500";
      setValue(newValue);
    } else if (value === "text-red-500") {
      newValue = "text-gray-500";
      setValue(newValue);
    }
  };
  return (
    <div className=" mx-auto">
      {/* image */}

      <div className="mb-4 relative ">
        <img
          src={img}
          alt="recipeTimelineList"
          style={{ borderRadius: "20px" }}
        />
        <div className="absolute top-0 right-0">
          <p className="border inline-block p-3 rounded-full m-4 bg-white">
            <AiFillHeart onClick={handleIcon} className={`w-5 h-5  ${value}`} />
          </p>
        </div>
      </div>
      {/* title */}
      <div className="mb-4">
        <h2 className="font-semibold text-lg">{name}</h2>
      </div>
      {/* icons */}
      <div className="flex mb-4">
        <p className="">
          <RiTimerFill className="inline w-6 h-6" />{" "}
          <span className="text-sm text-gray-500 ml-3">30 minutes</span>
        </p>
        <p className="ml-7">
          <MdRestaurant className="inline w-6 h-6" />
          <span className="text-sm font-medium text-gray-500 ml-3.5">
            Healthy
          </span>
        </p>
      </div>
    </div>
  );
};

export default RecipeTimelineList;
