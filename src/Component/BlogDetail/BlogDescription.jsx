import React from "react";

import Image from "next/image";
import SuggestedBlog from "./SuggestedBlog";
import { Link as ScrollLink } from "react-scroll";
import BlogSideForm from "./BlogSideForm";

const BlogDescription = ({ blogPackageData }) => {
  console.log(
    "content summary------> ",
    blogPackageData?.blogQuestions?.[1]?.blogSubQuestion?.questions
  );
  return (
    <div>
      {/* Blog BlogDescription section start*/}
      <div className="container-wrapper py-10">
        <div className="  grid grid-cols-1  xl:grid-cols-[2fr,1fr]">
          <div className=" bg-white shadow-md px-4 py-4 ">
            <div id="ItinerarySubSection" className="mt-5">
              <p
                dangerouslySetInnerHTML={{
                  __html: blogPackageData?.contentsummary,
                }}
              ></p>
            </div>
            {blogPackageData?.blogQuestions?.map((item, i) => (
              <div className="pt-7" id={`${item?._id}`}>
                <h3 className="text-[30px] font-medium mb-2">{item?.title}</h3>
                <p className="text-base leading-relaxed">
                  <p
                    dangerouslySetInnerHTML={{ __html: item?.information }}
                  ></p>
                </p>
                {item?.blogSubQuestion?.questions?.length > 0 &&
                  item?.blogSubQuestion?.questions?.map((item1, k) => (
                    <div className="pt-7" to={`${item1?._id}st${k}`}>
                      <h3 className="text-[30px] font-medium mb-2">
                        {k + 1}
                        {"."} {item1?.title}
                      </h3>
                      <p className="text-base leading-relaxed">
                        <p
                          dangerouslySetInnerHTML={{
                            __html: item1?.information,
                          }}
                        ></p>
                      </p>
                    </div>
                  ))}
              </div>
            ))}
            {/* <div className="pt-7" id="2nd">
              <h3 className="text-[30px] font-medium mb-2">
                How long does it take the average person to plan a trip?
              </h3>
              <p className="text-base leading-relaxed">
                The study found that trip plannings not only time-consuming, but
                stressful. Over a fifth (22%) of adults surveyed found the
                planning process to be frustrating. Separate research
                commissioned by Hotels.com confirmed this with over 25% of those
                surveyed stating they found trip planning to be one of lifes
                biggest stressors. And roughly 40% stated they had be willing to
                pay more to avoid the planning and research. These are just a
                few reasons to use apps for trip planning to cut down on the
                stress.
              </p>
            </div>
            <div className="pt-7" id="3rd">
              <h3 className="text-[30px] font-medium mb-2">
                Business travel tips: how do you plan a trip like a
                professional?
              </h3>
              <p className="text-base leading-relaxed">
                The study found that trip plannings not only time-consuming, but
                stressful. Over a fifth (22%) of adults surveyed found the
                planning process to be frustrating. Separate research
                commissioned by Hotels.com confirmed this with over 25% of those
                surveyed stating they found trip planning to be one of lifes
                biggest stressors. And roughly 40% stated theyd be willing to
                pay more to avoid the planning and research. These are just a
                few reasons to use apps for trip planning to cut down on the
                stress.
              </p>
            </div>
            <div className="pt-7" id="4th">
              <h3 className="text-[30px] font-medium mb-2">
                How can a corporate travel app simplify the planning process?
              </h3>
              <p className="text-base leading-relaxed">
                The study found that trip plannings not only time-consuming, but
                stressful. Over a fifth (22%) of adults surveyed found the
                planning process to be frustrating. Separate research
                commissioned by Hotels.com confirmed this with over 25% of those
                surveyed stating they found trip planning to be one of lifes
                biggest stressors. And roughly 40% stated theyd be willing to
                pay more to avoid the planning and research. These are just a
                few reasons to use apps for trip planning to cut down on the
                stress.
              </p>
            </div>
            <div className="pt-7" id="5th">
              <h3 className="text-[30px] font-medium mb-2">
                Top 8 corporate travel tools
              </h3>
              <p className="text-base leading-relaxed">
                With these apps, youll be able to put all our business travel
                tips into action for fuss-free planning.
              </p>
              <ol className="ml-10 py-5">
                <li className="text-2xl mb-5">
                  <h4 className="text-2xl font-medium mb-3">
                    {" "}
                    Hopper: Best for predicting the lowest prices
                  </h4>
                  <p className="text-base leading-relaxed font-normal">
                    Theres nothing worse than booking a flight, only to see that
                    its dropped in price a week later. With Hopper, you can time
                    your bookings to ensure that youre getting the best deals.
                    The apps algorithm analyses billions of prices daily to
                    predict the near future of flight and accommodation costs.
                    Then, when the lowest prices are predicted, the app notifies
                    you that its time to book. An impressive 95% accuracy rate
                    makes it a trustworthy option, too.
                  </p>
                </li>
                <li className="text-2xl mb-5">
                  <h4 className="text-2xl font-medium mb-3">
                    {" "}
                    Splitwise: Best way to manage shared expenses
                  </h4>
                  <p className="text-base leading-relaxed font-normal">
                    Theres nothing worse than booking a flight, only to see that
                    its dropped in price a week later. With Hopper, you can time
                    your bookings to ensure that youre getting the best deals.
                    The apps algorithm analyses billions of prices daily to
                    predict the near future of flight and accommodation costs.
                    Then, when the lowest prices are predicted, the app notifies
                    you that its time to book. An impressive 95% accuracy rate
                    makes it a trustworthy option, too.
                  </p>
                </li>
                <li className="text-2xl mb-5">
                  <h4 className="text-2xl font-medium mb-3">
                    TripIt: Best for multi-destination itineraries
                  </h4>
                  <p className="text-base leading-relaxed font-normal">
                    Theres nothing worse than booking a flight, only to see that
                    its dropped in price a week later. With Hopper, you can time
                    your bookings to ensure that youre getting the best deals.
                    The apps algorithm analyses billions of prices daily to
                    predict the near future of flight and accommodation costs.
                    Then, when the lowest prices are predicted, the app notifies
                    you that its time to book. An impressive 95% accuracy rate
                    makes it a trustworthy option, too.
                  </p>
                </li>
                <li className="text-2xl mb-5">
                  <h4 className="text-2xl font-medium mb-3">
                    {" "}
                    Wanderlog: Best company trip planning app for road trips
                  </h4>
                  <p className="text-base leading-relaxed font-normal">
                    Theres nothing worse than booking a flight, only to see that
                    its dropped in price a week later. With Hopper, you can time
                    your bookings to ensure that youre getting the best deals.
                    The apps algorithm analyses billions of prices daily to
                    predict the near future of flight and accommodation costs.
                    Then, when the lowest prices are predicted, the app notifies
                    you that its time to book. An impressive 95% accuracy rate
                    makes it a trustworthy option, too.
                  </p>
                </li>
                <li className="text-2xl mb-5">
                  <h4 className="text-2xl font-medium mb-3">
                    Wheely: Best for arriving in style
                  </h4>
                  <p className="text-base leading-relaxed font-normal">
                    Theres nothing worse than booking a flight, only to see that
                    its dropped in price a week later. With Hopper, you can time
                    your bookings to ensure that youre getting the best deals.
                    The apps algorithm analyses billions of prices daily to
                    predict the near future of flight and accommodation costs.
                    Then, when the lowest prices are predicted, the app notifies
                    you that its time to book. An impressive 95% accuracy rate
                    makes it a trustworthy option, too.
                  </p>
                </li>
                <li className="text-2xl mb-5">
                  <h4 className="text-2xl font-medium mb-3">
                    Sygic: Best for bleisure travellers
                  </h4>
                  <p className="text-base leading-relaxed font-normal">
                    Theres nothing worse than booking a flight, only to see that
                    its dropped in price a week later. With Hopper, you can time
                    your bookings to ensure that youre getting the best deals.
                    The apps algorithm analyses billions of prices daily to
                    predict the near future of flight and accommodation costs.
                    Then, when the lowest prices are predicted, the app notifies
                    you that its time to book. An impressive 95% accuracy rate
                    makes it a trustworthy option, too.
                  </p>
                </li>
                <li className="text-2xl mb-5">
                  <h4 className="text-2xl font-medium mb-3">
                    {" "}
                    Packing Pro: Best for strict luggage requirements
                  </h4>
                  <p className="text-base leading-relaxed font-normal">
                    Theres nothing worse than booking a flight, only to see that
                    its dropped in price a week later. With Hopper, you can time
                    your bookings to ensure that youre getting the best deals.
                    The apps algorithm analyses billions of prices daily to
                    predict the near future of flight and accommodation costs.
                    Then, when the lowest prices are predicted, the app notifies
                    you that its time to book. An impressive 95% accuracy rate
                    makes it a trustworthy option, too.
                  </p>
                </li>
                <li className="text-2xl mb-5">
                  <h4 className="text-2xl font-medium mb-3">
                    Booking.com for Business: Best for full-service business
                    travel platform
                  </h4>
                  <p className="text-base leading-relaxed font-normal">
                    Theres nothing worse than booking a flight, only to see that
                    its dropped in price a week later. With Hopper, you can time
                    your bookings to ensure that youre getting the best deals.
                    The apps algorithm analyses billions of prices daily to
                    predict the near future of flight and accommodation costs.
                    Then, when the lowest prices are predicted, the app notifies
                    you that its time to book. An impressive 95% accuracy rate
                    makes it a trustworthy option, too.
                  </p>
                </li>
              </ol>
            </div> */}
          </div>
          {/* for sider section  */}
          <div className="px-6  test-base">
            <div className="sticky top-0 z-10">
              <BlogSideForm />
              <div className="">
                {blogPackageData?.blogQuestions?.map((item, i) => (
                  <ScrollLink
                    key={i}
                    to={`${item?._id}`}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                  >
                    <p className="text-md font-medium mb-2 hover:cursor-pointer hover:text-primary">
                      {item?.title}
                    </p>
                    <ol className="text-para font-medium ml-10">
                      {item?.blogSubQuestion?.questions?.length > 0 &&
                        item?.blogSubQuestion?.questions?.map((item1, k) => (
                          <li
                            key={k}
                            className="hover:cursor-pointer hover:text-primary"
                          >
                            <ScrollLink
                              to={`${item1?._id}st${k}`}
                              spy={true}
                              smooth={true}
                              offset={-100}
                              duration={500}
                            >
                              {item1?.title}
                            </ScrollLink>
                          </li>
                        ))}
                    </ol>
                  </ScrollLink>
                ))}
                {/* <ScrollLink
                  to="2nd"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  <p className="text-md font-medium mb-2 hover:cursor-pointer hover:text-primary">
                    How long does it take the average person to plan a trip?
                  </p>
                </ScrollLink>
                <ScrollLink
                  to="3rd"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  <p className="text-md font-medium mb-2 hover:cursor-pointer hover:text-primary">
                    Business travel tips: how do you plan a trip like a
                    professional?
                  </p>
                </ScrollLink>
                <ScrollLink
                  to="4th"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  <p className="text-md font-medium mb-2 hover:cursor-pointer hover:text-primary">
                    How can a corporate travel app simplify the planning
                    process?
                  </p>
                </ScrollLink>
                <ScrollLink
                  to="5th"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  <h2 className="font-semibold text-lg my-4 hover:cursor-pointer hover:text-primary">
                    Top 8 corporate travel tools
                  </h2>
                </ScrollLink> */}
                {/* <ol className="text-para font-medium ml-10">
                  <li className="hover:cursor-pointer hover:text-primary">
                    Hopper: Best for predicting the lowest prices
                  </li>
                       
                </ol> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  Suggested Blog here*/}
      <div>
        <SuggestedBlog />
      </div>
      {/* Blog BlogDescription section end*/}
    </div>
  );
};

export default BlogDescription;
