import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import OtherRecipes from "../../../components/sharedComponents/OtherRecipes/OtherRecipes";
import BlogListRecipe from "../BlogListRecipe/BlogListRecipe";

const BlogList = () => {
  const pagination = [
    { id: 1, to: "" },
    { id: 2, to: "" },
    { id: 3, to: "" },
    { id: 4, to: "" },
    { id: 5, to: "" },
    { id: "...", to: "" },
  ];
  const [blogRecipes, setBlogRecipes] = useState([]);
  useEffect(() => {
    fetch("blogList.json")
      .then((res) => res.json())
      .then((data) => setBlogRecipes(data));
  }, []);
  return (
    <section className="mx-20 mt-14">
      <div className="flex justify-between gap-x-10">
        <div>
          {blogRecipes.map((recipe) => (
            <BlogListRecipe recipe={recipe} key={recipe.id} />
          ))}
        </div>
        <div>
          <OtherRecipes title={"Tasty Recipes"} />
        </div>
      </div>
      {/* pagination */}
      <div className="mt-11 text-center mb-24 ">
        <nav aria-label="Page navigation example">
          <ul className="inline-flex items-center -space-x-px">
            <li>
              <Link
                to="#"
                className="block py-5 px-6 rounded-2xl bg-gray-100 hover:bg-black text-black hover:text-white shadow-md"
              >
                <span className="sr-only">Previous</span>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </Link>
            </li>
            {pagination.map((pg) => (
              <li>
                <Link
                  key={pagination.id}
                  to="#"
                  className="py-5 px-6 border rounded-2xl bg-gray-100 hover:bg-black text-black hover:text-white shadow-md"
                >
                  {pg.id}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="#"
                className="block py-5 px-6 rounded-2xl bg-gray-100 hover:bg-black text-black hover:text-white shadow-md"
              >
                <span className="sr-only">Next</span>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default BlogList;
