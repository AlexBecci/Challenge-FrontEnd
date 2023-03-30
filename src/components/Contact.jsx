import React from "react";
import Form from "./Contact/Form";
import ImageTitle from "./Contact/ImageTitle";

function Contact() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container lg:px-0 px-5  mx-auto">
        <div className="flex flex-wrap  m-auto">
          <div className="lg:px-0 px-4 md:w-1/2 w-full">
            <ImageTitle />
          </div>
          <div className="py-4 px-10 md:w-1/2 w-full">
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
