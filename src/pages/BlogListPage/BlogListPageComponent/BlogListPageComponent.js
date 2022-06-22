import React from "react";
import Subscribe from "../../HomePage/Subscribe/Subscribe";
import BlogList from "../BlogList/BlogList";
import BlogSearchBox from "../BlogSearchBox/BlogSearchBox";

const BlogListPageComponent = () => {
  return (
    <div>
      <BlogSearchBox />
      <BlogList />
      <Subscribe />
    </div>
  );
};

export default BlogListPageComponent;
