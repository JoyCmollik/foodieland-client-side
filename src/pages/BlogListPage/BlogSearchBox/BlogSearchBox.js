import React from "react";

const BlogSearchBox = () => {
  return (
    <section className="mt-20 flex flex-col justify-center mb-1">
      {/* title */}
      <div className="text-center">
        <h1 className="mb-6 text-center text-6xl font-semibold">
          Blog & Article
        </h1>
        <p className="text-gray-500 text-base mb-20">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore
        </p>
      </div>
      {/* search box */}
      <div className="mx-auto">
        <div className="border p-2 rounded-3xl">
          <input
            className="text-sm font-medium w-48 ml-8"
            type="text"
            name=""
            id=""
            placeholder="Search article, news or recipe..."
          />
          <button
            type="submit"
            className="bg-black text-white py-5 px-14 rounded-2xl ml-72"
          >
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSearchBox;
