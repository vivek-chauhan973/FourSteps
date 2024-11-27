import React, { useEffect, useState } from "react";
import BlogHero from "./BlogHero";
import BlogDescription from "./BlogDescription";
import { Footer } from "../Footer/Footer";

const getBlogData = async (title) => {
  const response = await fetch(
    `/api/blog/getallblogs?title=${title?.split("-")?.join(" ")}`
  );
  return await response.json();
};

const Bdetail = ({ title }) => {
  const [blogPackageData, setBlogPackageData] = useState(null);

  useEffect(() => {
    if (title) {
      getBlogData(title).then((res) => {
      
        setBlogPackageData(res);
      });
    }
    
  }, [title]);

  return (
    <>
      <div>
        {/*  for the hero section */}
        <BlogHero blogPackageData={blogPackageData}/>
      </div>
      {/* for the blog post content or description  */}
      <div>
        <BlogDescription  blogPackageData={blogPackageData}/>
      </div>
      {/* for the footer section  */}
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Bdetail;
