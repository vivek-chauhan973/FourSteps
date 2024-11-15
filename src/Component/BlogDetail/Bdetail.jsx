import React from "react";
import BlogHero from "./BlogHero";
import BlogDescription from "./BlogDescription";
import { Footer } from "../Footer/Footer";

const Bdetail = () => {
  return (
    <>
      <div>
        {/*  for the hero section */}
        <BlogHero />
      </div>
      {/* for the blog post content or description  */}
      <div>
        <BlogDescription />
      </div>
      {/* for the footer section  */}
      <div>
        <Footer />  
      </div>
    </>
  );
};

export default Bdetail;
