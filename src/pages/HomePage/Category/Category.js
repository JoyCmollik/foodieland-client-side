import React, { useState } from "react";

const Category = (props) => {
  const { name, img, color } = props.category;

  return (
    <div
      className="text-center px-10 border shadow-lg mx-auto"
      style={{
        borderRadius: "30px",
        background: ` linear-gradient(${color})`,
      }}
    >
      <div
        style={{
          marginTop: "-50px",
        }}
        className="text-center mx-auto "
      >
        <img src={img} alt="" className="text-center" />
      </div>
      <h3 className="mt-12 text-lg font-semibold mb-7">{name}</h3>
    </div>
  );
};

export default Category;
