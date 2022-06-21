import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import recipe1 from "../../../Images/ingredients-1.png";
import recipe2 from "../../../Images/Ingredients-2.png";
import recipe3 from "../../../Images/ingredients-3.png";
import ads from "../../../Images/Ads.png";
const RecipeIngredients = () => {
  return (
    <section className="mx-20 mb-20">
      <div className="flex justify-between">
        <article>
          <h2 className="text-4xl font-semibold mb-12">Ingredients</h2>
          <div>
            <h3 className="text-2xl">For main dish</h3>
            <p
              className="flex items-center gap-6 mt-8 py-7 border-b border-gray-200"
              style={{ width: "760px" }}
            >
              <AiFillCheckCircle />
              <div className="border border-gray-300 w-52 h-0"></div>
            </p>

            <p
              className="flex items-center gap-6 mt-8 py-7 border-b border-gray-200"
              style={{ width: "760px" }}
            >
              <AiFillCheckCircle className="border border-gray-600 p-2 rounded-full" />
              <p className="">Lorem ipsum dolor sit amet</p>
            </p>
            <p
              className="flex items-center gap-6 mt-8 py-7 border-b border-gray-200"
              style={{ width: "760px" }}
            >
              <AiFillCheckCircle className="border border-gray-600 p-2 rounded-full" />
              <p className="">Lorem ipsum dolor sit amet</p>
            </p>
            <p
              className="flex items-center gap-6 mt-8 py-7 border-b border-gray-200"
              style={{ width: "760px" }}
            >
              <AiFillCheckCircle className="border border-gray-300 p-2 rounded-full" />
              <p className="">Lorem ipsum dolor sit amet</p>
            </p>
          </div>
          <div className="mt-16">
            <h3 className="text-2xl">For the sauce</h3>
            <p
              className="flex items-center gap-6 mt-8 py-7 border-b border-gray-200"
              style={{ width: "760px" }}
            >
              <AiFillCheckCircle className="border border-gray-400 p-2 rounded-full" />
              <p className="">Lorem ipsum dolor sit amet</p>
            </p>
            <p
              className="flex items-center gap-6 mt-8 py-7 border-b border-gray-200"
              style={{ width: "760px" }}
            >
              <AiFillCheckCircle className="border border-gray-400 p-2 rounded-full" />
              <p className="">Lorem ipsum dolor sit amet</p>
            </p>
            <p
              className="flex items-center gap-6 mt-8 py-7 border-b border-gray-300"
              style={{ width: "760px" }}
            >
              <AiFillCheckCircle className="border border-gray-600 p-2 rounded-full" />
              <p className="">Lorem ipsum dolor sit amet</p>
            </p>
          </div>
        </article>
        <article className="flex flex-col gap-y-8">
          <h2 className="text-3xl font-semibold ">Other Recipe</h2>
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
      </div>
    </section>
  );
};

export default RecipeIngredients;
