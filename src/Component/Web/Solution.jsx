import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const spineConditions = [
  "Prolaped Intervertebal disc",
  "Slip disc & Sciatica",
  "Degenerative Spine Conditions",
  "Spinal Canal Stenosis Decompression",
  "Spondylolisthesis",
  "Adult Degenerative Deformities",
  "Spinal Fusion Surgery",
  "Craniovertebral Junction Instability",
  "Pediatric Congenital Spine Deformities",
  "Osteoporosis",
  "Spinal Deformities",
  "Kyphoscoliosis",
  "Tuberculosis of Spine",
  "Post Infectious Spine Deformities",
  "Correction",
  "Spinal Infections",
  "Spine Tumors",
  "Spine Trauma",
  "Facet arthritis",
  "Geriatric Spine Disorders",
];

const App = () => {
  return (
    // [#BFECFF]
    <div className="h-auto bg-background ">
      <div className="container-wrapper py-10">
        <div>
          <h2 className="md:text-3xl text-lg text-heading font-semibold pb-2 md:pb-4">
            Our Solutions
          </h2>
          <p className="text-sm md:text-lg md:px-0 px-3 pb-3">
            We have excelled in our experience across a wide range of industries
            to bring valuable insights and provide our clients with truly
            beneficial solutions.
          </p>
        </div>
        <div className="grid pl-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  mx-auto">
          {spineConditions.map((condition, index) => (
            <Link href="#" key={index}>
              <div
                key={index}
                className="group flex items-center justify-between bg-white rounded-lg shadow p-4 cursor-pointer transition-transform transform hover:scale-105"
              >
                <span className="text-white bg-blue-800 px-3 py-2 rounded-full">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-gray-800 font-medium text-center flex-1 ml-2">
                  {condition}
                </span>
                <div className="right-2 bottom-1 absolute transform rotate-[50deg] group-hover:rotate-0 transition-transform duration-300">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="text-blue-800"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
