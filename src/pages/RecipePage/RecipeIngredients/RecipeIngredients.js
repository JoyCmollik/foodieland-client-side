import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import OtherRecipes from "../../../components/sharedComponents/OtherRecipes/OtherRecipes";
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
              <span className="border border-gray-300 w-52 h-0"></span>
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
        <OtherRecipes title={"Other Recipe"} />
      </div>
    </section>
  );
};

export default RecipeIngredients;
