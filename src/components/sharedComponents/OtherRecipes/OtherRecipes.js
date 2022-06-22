import React from "react";
import recipe1 from "../../../Images/ingredients-1.png";
import recipe2 from "../../../Images/Ingredients-2.png";
import recipe3 from "../../../Images/ingredients-3.png";
import ads from "../../../Images/Ads.png";
const OtherRecipes = (props) => {
  return (
    <section>
      <article className="flex flex-col gap-y-8">
        <h2 className="text-3xl font-semibold ">{props.title}</h2>
        <div className="flex gap-x-6 justify-between">
          <div>
            <img src={recipe1} alt="" className="rounded-lg" />
          </div>
          <h2 className="text-xl font-semibold ">
            Chicken Meatball with Creamy Chees...
            <br />
            <span className="text-sm font-medium text-gray-600">
              By Andreas Paula
            </span>
          </h2>
        </div>
        <div className="flex gap-x-6 justify-between">
          <div>
            <img src={recipe2} alt="" className="rounded-lg" />
          </div>
          <h2 className="text-xl font-semibold ">
            The Creamiest Creamy Chicken an...
            <br />
            <span className="text-sm font-medium text-gray-600">
              By Andreas Paula
            </span>
          </h2>
        </div>
        <div className="flex gap-x-6 justify-between">
          <div>
            <img src={recipe3} alt="" className="rounded-lg" />
          </div>
          <h2 className="text-xl font-semibold ">
            Chicken Meatball with Creamy Chees...
            <br />
            <span className="text-sm font-medium text-gray-600">
              By Andreas Paula
            </span>
          </h2>
        </div>
        {/* ad */}
        <div className="mt-24">
          <img src={ads} alt="" />
        </div>
      </article>
    </section>
  );
};

export default OtherRecipes;
