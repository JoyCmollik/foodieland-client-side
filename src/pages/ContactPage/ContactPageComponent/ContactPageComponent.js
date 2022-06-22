import React from "react";
import RecipeSuggestion from "../../../components/sharedComponents/RecipeSuggestion/RecipeSuggestion";
import Subscribe from "../../HomePage/Subscribe/Subscribe";
import ContactUs from "../ContactUs/ContactUs";

const ContactPageComponent = () => {
  return (
    <div>
      <ContactUs />
      <Subscribe />
      <RecipeSuggestion title={"Check out the delicious recipe"} />
    </div>
  );
};

export default ContactPageComponent;
