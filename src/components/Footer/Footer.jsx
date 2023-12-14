import React from "react";
import Logo from "../Logo";

function Footer() {
  return (
    <section className="relative overflow-hidden py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">
      <div className="mb-4 inline-flex items-center relative z-10">
        <Logo width="100px" />
      </div>
      <div className="relative z-10">
        <p className="text-sm text-black">
          <b>&copy; Copyright 2023. Made with 💜 .</b>
        </p>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-white opacity-30 blur-lg z-0"></div>
    </section>
  );
}

export default Footer;
