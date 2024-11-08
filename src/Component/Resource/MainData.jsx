import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState ,useEffect } from "react";
const fetchAllWebinar=async ()=>{
  return await ((await fetch("/api/webinar/webinar",{method:"GET"})).json());
}
const MainData = ({Heading}) => {
  const router=useRouter();
const [allTypeData,setAllTypeData]=useState([]);

useEffect(()=>{
  fetchAllWebinar().then(res=>{console.log("all type data -----> ",res);setAllTypeData(res||[])})
},[])
  return (
    <div>
      {/* <div className="flex justify-center max-w-3xl pb-2 mx-auto items-center">
        <div className="bg-white shadow-lg items-center rounded-lg p-3 h-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
         
          <div className="flex justify-center sm:col-span-2 md:col-span-1">
            <Image
              src="/image/try.jpeg" 
              alt="Service"
              height={220}
              width={220}
              className="rounded object-cover"
            />
          </div>

         
          <div className="flex flex-col border-t sm:border-t-0 md:border-l border-gray-300 px-3">
            <h2 className="text-lg font-bold">Webinar Title</h2>
            <div className="flex text-gray-800 font-normal mt-1">
              <span className="mr-2">key points...of webinar</span>
            </div>
            <p className="mt-1 text-sm md:text-xs line-clamp-3 text-gray-700">
              A paragraph is defined as “a group of sentences or a single
              sentence that forms a...
            </p>
          </div>

          
          <div className="flex flex-col border-t sm:border-t-0 md:border-l border-gray-300 px-4">
            <div className="text-center md:text-left">
              <div className="text-green-600 text-md py-1 font-semibold">
                Speaker...vivek chauhan
              </div>

              <div>
                <p className="text-gray-900 text-sm">Date: 02-10-2024</p>
                <p className="text-gray-900 text-sm">time: 40min</p>
              </div>
            </div>
            <Link href="webinar/pradhumn" className="mt-4 w-full bg-orange-500 text-white px-4 py-2 rounded self-center md:self-start">
              VIEW DETAILS
            </Link>
          </div>
        </div>
      </div> */}
      {Heading==="webinar"&&allTypeData?.map(item=><div className="flex relative justify-center max-w-3xl mx-auto items-center  pb-8">
        <div className="bg-white shadow-lg items-center rounded-lg p-3 mt-5 h-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 relative">
         
          {(item?.selectType==="upcoming"||item?.selectType==="on-demond")&&<div className="absolute top-2">
            <div className="rounded-r-sm px-2 bg-black">
              <p className="py-1 text-xs text-white">Upcoming Webinars</p>
            </div>
          </div>}

       
          <div className="flex justify-center sm:col-span-2 md:col-span-1">
            <Image
              src={item?.path} 
              alt="Service"
              height={220}
              width={220}
              className="rounded object-cover"
            />
          </div>

         
          <div className="flex flex-col border-t sm:border-t-0 md:border-l border-gray-300 px-3">
            <h2 className="text-lg font-bold">{item?.title}</h2>
            <div className="flex text-gray-800 font-normal mt-1">
              <span className="mr-2">{item?.subtitle}</span>
            </div>
            <p className="mt-1 text-sm md:text-xs line-clamp-3 text-gray-700">
            {item?.description}
            </p>
          </div>

        
          <div className="flex flex-col border-t sm:border-t-0 md:border-l border-gray-300 px-4">
            <div className="text-center md:text-left">
              <div className="text-green-600 text-md py-1 font-semibold">
                {item?.speaker?.name}
              </div>

              <div>
                <p className="text-gray-900 text-sm">Date: {item?.date}</p>
                <p className="text-gray-900 text-sm">time: {item?.time}min</p>
              </div>
            </div>
            <button className="mt-4 bg-orange-500 w-full text-white px-4 py-2 rounded self-center md:self-start">
              VIEW DETAILS
            </button>
          </div>
        </div>
      </div>)}
    </div>
  );
};

export default MainData;
