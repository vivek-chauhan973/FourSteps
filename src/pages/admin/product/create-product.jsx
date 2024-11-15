import AdminLayout from "@/Component/admin/AdminLayout";
import BasicInfo from "@/Component/admin/ProductCreate/BasicInfoPro";
import React from "react";

const CreateProduct = () => {
  return (
    <AdminLayout>
      <div>
        <h4>welcome to create product</h4>
        <BasicInfo />
      </div>
    </AdminLayout>
  );
};

export default CreateProduct;
