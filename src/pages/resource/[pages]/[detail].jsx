import Detail from "@/Component/WebinarDetail/Detail";
import React from "react";
import { useRouter } from "next/router";
import Nav from "@/Component/Header/Nav";
import Pdetail from "@/Component/ProductDetail/Pdetail";
import Cdetail from "@/Component/CaseStudiesDetail/Cdetail";
const DynamicDetail = () => {
  const router = useRouter();
  const { detail, pages } = router.query;
  console.log(".......data.........>>>>>>>>>>>>>", router);
  return (
    <div>
      {/*  navbar section */}
      <div>
        <Nav />
      </div>

      {pages === "webinar" && <Detail title={detail} />}
      {pages === "product" && <Pdetail title={detail} />}
      {pages === "case-studies" && <Cdetail title={detail} />}
    </div>
  );
};

export default DynamicDetail;
