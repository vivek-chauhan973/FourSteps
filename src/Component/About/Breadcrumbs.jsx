import React from "react";
import Link from "next/link";

const Breadcrumbs = ({ crumbs }) => {
  return (
    <nav className="flex items-center space-x-2 py-4">
      <Link href="/" className="text-blue-500 hover:underline">
        Home
      </Link>
      {crumbs.map((crumb, index) => (
        <React.Fragment key={index}>
          <span className="text-gray-500">/</span>
          {index === crumbs.length - 1 ? (
            <span className="text-gray-700">{crumb.label}</span>
          ) : (
            <Link href={crumb.href} className="text-blue-500 hover:underline">
              {crumb.label}
            </Link>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
