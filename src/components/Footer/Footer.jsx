import React from "react";
import Logo from "../Logo";

function Footer() {
  return (
    <section className="relative overflow-hidden py-10 bg-red-300">
  <div className="mb-4 inline-flex items-center relative z-10">
    <Logo width="100px" />
  </div>
  <div className="relative z-10">
    <p className="text-sm text-black">
      <b>&copy; Copyright 2023. All Rights Reserved by DevUI.</b>
    </p>
  </div>
  <div className="absolute top-0 left-0 w-full h-full bg-white opacity-30 blur-lg z-0"></div>
</section>

  );
}

export default Footer;
