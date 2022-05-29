import React from "react";
import higlightImage from "../../../Images/Highlights.png";
import highlight1 from "../../../Images/highlights1.png";
import highlight2 from "../../../Images/highlights-2.png";
import highlight3 from "../../../Images/highlights-3.png";
import highlight4 from "../../../Images/highlights-4.png";
const Highlights = () => {
  return (
    <div className="mb-60">
      <div className="flex justify-between ">
        {/* title */}
        <div className="ml-20 mt-72 ">
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
        <div className="mt-36  mr-32 ml-11 relative">
          <img
            src={higlightImage}
            alt=""
            style={{
              background:
                "linear-gradient(rgba(231, 249,253,0),rgba(231, 249, 253, 1))",
            }}
          />
          <div className="absolute top-12 left-14">
            <img src={highlight1} alt="" />
          </div>
          <div className="absolute top-20 right-28">
            <img src={highlight2} alt="" />
          </div>
          <div className="absolute top-40 right-0">
            {" "}
            <img src={highlight3} alt="" />
          </div>
          <div className="absolute bottom-24 left-0">
            <img src={highlight4} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
