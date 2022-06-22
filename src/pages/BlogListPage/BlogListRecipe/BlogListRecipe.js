import React from "react";

const BlogListRecipe = (props) => {
  const { img, title, name, personImg } = props.recipe;
  return (
    <article className="flex gap-x-10 mb-5  items-center justify-between">
      <div className="">
        <img src={img} alt="" />
      </div>
      <div>
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="text-base font-normal text-gray-500 ">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed
          <br />
          do eiusmod tempor incididunt ut labore et dolore magna aliqut enim
        </p>
        <div className="flex gap-4 items-center mt-2">
          <img src={personImg} alt="person-img" />
          <p className="text-base font-bold">{name}</p>
          <p className="ml-12 text-sm text-gray-500">12 November 2021</p>
        </div>
      </div>
    </article>
  );
};

export default BlogListRecipe;
