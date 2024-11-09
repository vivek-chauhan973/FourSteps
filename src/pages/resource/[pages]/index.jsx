import { useRouter } from "next/router";
import React from "react";
import Nav from "@/Component/Header/Nav";
import Hero from "@/Component/Resource/Hero";
import Switch from "@/Component/Resource/Switch";
import Filter from "@/Component/Resource/Filter";
import MainData from "@/Component/Resource/MainData";
import { useAppContext } from "@/Component/Context/context";

const Routes = () => {
  const router = useRouter();
  // console.log(router.query.pages);
  const Heading = router.query.pages;
  const { filterGlobalData } = useAppContext();
  return (
    <div className="container">
      <div>
        <Nav />
      </div>
      <div className="">
        <Hero Heading={Heading} />
      </div>
      <div className="py-10">
        <Switch />
      </div>
      {/* <div className="flex flex-col lg:flex-row"> */}
      <div className=" conatiner">
        <div className="px-10  grid grid-cols-1 xl:grid-cols-[300px,2fr] bg-gray-100 py-2 gap-10 relative">
          <Filter Heading={Heading} filterGlobalData={filterGlobalData} />
          <MainData Heading={Heading} />
        </div>
      </div>
    </div>
  );
};

export default Routes;
