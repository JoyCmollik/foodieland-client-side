import React from "react";
import { FiPrinter, FiShare } from "react-icons/fi";
import { RiRestaurantFill, RiTimerFill } from "react-icons/ri";
import person from "../../../Images/RecipeIntro-1.png";
import recipeBanner from "../../../Images/Recipe-banner.png";
const RecipeIntro = () => {
  return (
    <section className="mt-20 mx-20">
      <h1 className="text-6xl font-semibold">Health Japanese Fried Rice</h1>
      <div className="flex gap-8 flex-row-reverse mr-20">
        <p className="flex flex-col items-center text-xs">
          <span className=" p-3  bg-sky-100 rounded-full ">
            <FiPrinter />
          </span>
          Print
        </p>
        <p className="flex flex-col items-center text-xs">
          <span className=" p-3  bg-sky-100 rounded-full">
            <FiShare />
          </span>
          Share
        </p>
      </div>
      {/* recipe details */}
      <div className="flex gap-20">
        <div className="flex gap-3">
          <img src={person} alt="" />
          <p className="text-base capitalize text-left items-center justify-center">
            john smith
            <br />
            <span className="text-gray-700 text-sm">15 March 2022</span>
          </p>
        </div>
        <div className="flex justify-center items-center gap-3">
          <RiTimerFill className="text-lg" />
          <p className="text-base capitalize text-left items-center justify-center">
            Prep time
            <br />
            <span className="text-gray-700 text-sm">15 minutes</span>
          </p>
        </div>
        <div className="flex justify-center items-center gap-3">
          <RiTimerFill className="text-lg" />
          <p className="text-base capitalize text-left items-center justify-center">
            cook time
            <br />
            <span className="text-gray-700 text-sm">15 minutes</span>
          </p>
        </div>
        <div className="flex justify-center items-center gap-3">
          <RiRestaurantFill className="text-lg" />
          <p className="text-base capitalize text-left items-center justify-center">
            cook time
            <br />
            <span className="text-gray-700 text-sm">15 minutes</span>
          </p>
        </div>
      </div>
      <article className="flex mt-14 gap-8 ">
        {/* receipe banner */}
        <div className="">
          <img src={recipeBanner} alt="" className="rounded-3xl" />
        </div>
        <div
          className="bg-sky-100 rounded-3xl"
          style={{ width: "400px", height: "560px" }}
        >
          {/* nutrition - info */}
          <div className=" mx-8 ">
            <h3 className="text-2xl mt-8 mb-6">Nutrition Infromation</h3>
            <p className="text-gray-500 text-lg font-medium flex justify-between  border-b border-gray-400 py-4">
              Calories <span className="text-black ">219.9kcal</span>
            </p>
            <p className="text-gray-500 text-lg font-medium flex justify-between  border-b border-gray-400 py-4">
              Total Fat <span className="text-black ">10.7g</span>
            </p>
            <p className="text-gray-500 text-lg font-medium flex justify-between  border-b border-gray-400 py-4">
              Protein <span className="text-black ">7.9g</span>
            </p>
            <p className="text-gray-500 text-lg font-medium flex justify-between  border-b border-gray-400 py-4">
              Carbohydrate <span className="text-black ">22.3g</span>
            </p>
            <p className="text-gray-500 text-lg font-medium flex justify-between  border-b border-gray-400 py-4">
              Cholesterol <span className="text-black ">37.4mg</span>
            </p>
            <p className="text-gray-500 text-base  mt-20">
              adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore
              et dolore magna aliqua.{" "}
            </p>
          </div>
        </div>
      </article>
      <p className="text-gray-500 text-base font-norma mt-16 text-left ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud
        <br />
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </section>
  );
};

export default RecipeIntro;
