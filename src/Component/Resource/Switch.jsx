import React from "react";
import Link from "next/link";
import { resources } from "@/Component/data/SwitchData";
const Switch = () => {
  return (
    <div>
      <div className="flex items-center justify-center py-4">
        <div className="flex flex-wrap gap-4 justify-center">
          {resources.map((resource, index) => (
            <Link key={index} href={resource.href} className="btn_filter">
              {resource.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Switch;
