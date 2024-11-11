import Detail from "@/Component/WebinarDetail/Detail";
import React from "react";
import { useRouter } from "next/router";
import Nav from "@/Component/Header/Nav";
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
    </div>
  );
};

export default DynamicDetail;
