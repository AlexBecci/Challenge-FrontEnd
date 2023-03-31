import React from "react";
import EmojiFooter from "./Footer/EmojiFooter";
import TextFooter from "./Footer/TextFooter";
import TitleFooter from "./Footer/TitleFooter";
import UpFooter from "./Footer/UpFooter";

function Footer() {
  return (
    <div>
      <UpFooter />
      <footer className="text-zinc-500 body-font bg-zinc-800 ">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <EmojiFooter />
          <TitleFooter />
          <TextFooter />
        </div>
      </footer>
    </div>
  );
}

export default Footer;
