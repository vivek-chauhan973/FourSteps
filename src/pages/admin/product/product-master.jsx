
import AdminLayout from "@/Component/admin/AdminLayout";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faCirclePlus,
  faTrash,
  faXmark,
  faSave,
} from "@fortawesome/free-solid-svg-icons";

export default function ServiceMaster() {
 

  return (
    <AdminLayout>
      <div>
        <h1 className="text-xl mb-4">Service Master</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5  rounded">
          product master
        </div>
      </div>
    </AdminLayout>
  );
}
