import React from "react";
import contact from "../../../Images/contact.png";
const ContactUs = () => {
  return (
    <section className="m-20 ">
      <h1 className="text-6xl text-center mb-1">Contact us</h1>
      <div className="flex gap-14 mt-16">
        <article>
          <img src={contact} alt="" />
        </article>
        <article>
          <div className="space-y-5">
            <label className="block">
              <span className="block text-xs font-medium text-slate-700">
                NAME
              </span>
              <input
                placeholder="Enter your name..."
                className="border py-4 pl-5 mt-3 rounded-2xl"
                style={{ width: "400px" }}
              />
            </label>
            <label className="block">
              <span className="block text-xs font-medium text-slate-700">
                SUBJECT
              </span>
              <input
                placeholder="Enter subject..."
                className="border py-4 pl-5 mt-3 rounded-2xl"
                style={{ width: "400px" }}
              />
            </label>

            <label className="block ">
              <span className="block text-xs font-medium text-slate-700">
                MESSAGES
              </span>
              <textarea
                id="message"
                rows="5"
                cols="50"
                className="border text-sm font-normal pt-5 pl-5"
                placeholder="Enter your messages..."
              ></textarea>
            </label>
          </div>
        </article>
        <article>
          <div className="space-y-5">
            <label className="block">
              <span className="block text-xs font-medium text-slate-700">
                EMAIL ADDRESS
              </span>
              <input
                placeholder="Your email address..."
                className="border py-4 pl-5 mt-3 rounded-2xl"
                style={{ width: "400px" }}
              />
            </label>
            <label className="block">
              <span className="block text-xs font-medium text-slate-700">
                ENQUIRY TYPE
              </span>

              <button
                id="dropdownDefault"
                data-dropdown-toggle="dropdown"
                className="border py-4 pl-5 mt-3 rounded-2xl text-slate-600 bg-white focus:ring-4  font-normal text-center inline-flex items-center  text-sm"
                type="button"
              >
                Advertising
                <svg
                  className="w-4 h-4 ml-72"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
            </label>
          </div>
        </article>
      </div>
      <button className="block mx-auto mt-12 px-16 py-5 bg-black text-white rounded-2xl">
        submit
      </button>
    </section>
  );
};

export default ContactUs;
