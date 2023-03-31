import React from "react";
import UpFooter from "./Footer/UpFooter";


function Footer() {
  return (
    <div>
      <UpFooter />
      <footer className="text-gray-600 bg-gray-900 body-font">
        <div className="container px-5 py-0 mx-auto">
          <div className="flex flex-wrap sm:m-0 -mx-4 -mb-10 -mt-4">
            <div className="px-4 md:w-1/3 sm:mb-0 mb-6 flex-row sm:mx-5">
              <div className="flex flex-wrap">
                <h2 className="text-xl font-medium title-font text-zinc-200 mt-5 mx-5">
                  s
                </h2>
                <h2 className="text-xl font-medium title-font text-zinc-200 mt-5 mx-5">
                  s
                </h2>
                <h2 className="text-xl font-medium title-font text-zinc-200 mt-5 mx-5">
                  s
                </h2>
              </div>
              <div className="flex flex-row text-center">
                <p className="text-base leading-relaxed mt-0">2021</p>
                <a className="text-indigo-500 inline-flex items-center mt-0 mx-6">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
