import Detail from "@/Component/WebinarDetail/Detail";
import React from "react";
import { useRouter } from "next/router";
const DynamicDetail = () => {
  const router = useRouter();
  const { detail, pages } = router.query;
  console.log(".......data.........>>>>>>>>>>>>>", router);
  return <div>{pages === "webinar" && <Detail title={detail} />}</div>;
};

export default DynamicDetail;
