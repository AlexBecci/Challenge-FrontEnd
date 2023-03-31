import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineInstagram } from "react-icons/ai";
import { TbWorld } from "react-icons/tb";
function EmojiFooter() {
  return (
    <div className="flex lg:w-2/5 flex-col items-center text-base font-normal">
            <div className="flex flex-wrap  md:mr-auto">
              <a href="#s" className="mr-5 ">
                <HiOutlineMail size={40} />
              </a>
              <a href="#s" className="mr-5 ">
                <AiOutlineInstagram size={40} />
              </a>
              <a href="#s" className="mr-5 ">
                <TbWorld size={40} />
              </a>
            </div>
            <div className="flex flex-wrap  md:mr-auto pt-3 lg:pb-0 pb-5 lg:text-base text-xl">
                <h1 >2023</h1>
                <p className="mx-2 ">Brother Madrid</p>
            </div>
          </div>
  );
}

export default EmojiFooter;
