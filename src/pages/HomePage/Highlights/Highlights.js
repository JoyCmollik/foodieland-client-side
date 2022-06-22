import React from "react";
import higlightImage from "../../../Images/Highlights.png";

const Highlights = () => {
  return (
    <div className="mb-60 mx-20">
      <div className="flex justify-center">
        {/* title */}
        <div className="mx-auto mt-72  ">
          <h2 className="text-5xl font-semibold ">
            Everyone can be a <br /> chef in their own kitchen
          </h2>
          <p
            className="text-base font-normal text-gray-400 mt-7"
            style={{ marginBottom: "72px" }}
          >
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed <br /> do
            eiusmod tempor incididunt ut labore et dolore magna aliqut enim{" "}
            <br /> ad minim{" "}
          </p>
          <button className="bg-black py-5 text-white px-12 rounded-2xl text-sm">
            Learn More
          </button>
        </div>
        {/* image */}
        <div className="mt-36  mx-auto  ">
          <img
            src={higlightImage}
            alt=""
            style={{
              background:
                "linear-gradient(rgba(231, 249,253,0),rgba(231, 249, 253, 1))",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Highlights;
