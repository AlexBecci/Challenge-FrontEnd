import React from "react";

function TextFooter() {
  return (
    <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
      <div>
        <p className="lg:px-16 lg:text-sm font-normal">
          <span className="hover:text-yellow-200 cursor-pointer duration-300">
            C/ Gran Vía, 27, 6º Izquierda, 28013 Madrid
          </span>
          <br />
          <span className="hover:text-yellow-200 cursor-pointer duration-300">
            +34 915 76 68 76
          </span>
          |
          <span className="hover:text-yellow-200 cursor-pointer duration-300">
            +34 612 27 84 09
          </span>
          <br />
          <span className="hover:text-yellow-200 cursor-pointer duration-300">
            madrid@brotherad.com
          </span>
        </p>
      </div>
    </div>
  );
}

export default TextFooter;
