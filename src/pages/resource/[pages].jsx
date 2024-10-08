import { useRouter } from "next/router";
import React from "react";
import Nav from "@/Component/Header/Nav";
import Hero from "@/Component/Resource/Hero";
import Switch from "@/Component/Resource/Switch";
import Filter from "@/Component/Resource/Filter";
import MainData from "@/Component/Resource/MainData";

const Routes = () => {
  const router = useRouter();
  console.log(router.query.pages);
  const Heading = router.query.pages;

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
      <div className="flex flex-col lg:flex-row">
        <Filter />
        <MainData />
      </div>
    </div>
  );
};

export default Routes;
