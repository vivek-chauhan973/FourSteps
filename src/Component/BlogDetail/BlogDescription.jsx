import React from "react";

import Image from "next/image";
import SuggestedBlog from "./SuggestedBlog";
import { Link as ScrollLink } from "react-scroll";
import BlogSideForm from "./BlogSideForm";

const BlogDescription = () => {
  return (
    <div>
      {/* Blog BlogDescription section start*/}
      <div className="container-wrapper py-10">
        <div className="  grid grid-cols-1  xl:grid-cols-[2fr,1fr]">
          <div className=" bg-white shadow-md px-4 py-4 ">
            <div id="ItinerarySubSection" className="mt-5">
              <p className="text-base leading-relaxed ">
                We are all looking for productivity hacks to help us get
                organized and reduce stress, and with an app for trip planning
                you can get business travel booked in no time. Whether you are
                after a streamlined way to track expenses, stick to a budget,
                pack more efficiently, or plan your route, business travel apps
                tackle all the above.
              </p>
              <p className="text-base leading-relaxed">
                With so many corporate travel apps on the market, it can be
                difficult to know which are worth using. Never fear we have
                rounded up the top eight apps and a few bonus business travel
                tips to help you get started.
              </p>
            </div>
            <div className="pt-7" id="1st">
              <h3 className="text-[30px] font-medium mb-2">
                What is a business travel app?
              </h3>
              <p className="text-base leading-relaxed">
                What do we mean by corporate travel app, exactly, and what can
                these business travel apps do? Whether accessed via a desktop or
                downloaded to your smartphone or tablet, travel apps lighten the
                load of trip planning. Use general travel apps to find and book
                flights, hotels, and car rentals, or plan your itinerary. With
                business-specific apps, you can also track expenses and find
                meeting facilities.
              </p>
            </div>
            <div className="pt-7" id="2nd">
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
            </div>
          </div>
          {/* for sider section  */}
          <div className="px-6  test-base">
            <div className="sticky top-0 z-10">
              <BlogSideForm />
              <div className="">
                <ScrollLink
                  to="1st"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  <p className="text-md font-medium mb-2 hover:cursor-pointer hover:text-primary">
                    What is a business travel app?
                  </p>
                </ScrollLink>
                <ScrollLink
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
                </ScrollLink>
                <ol className="text-para font-medium ml-10">
                  <li className="hover:cursor-pointer hover:text-primary">
                    Hopper: Best for predicting the lowest prices
                  </li>
                  <li className="hover:cursor-pointer hover:text-primary">
                    Splitwise: Best way to manage shared expenses
                  </li>
                  <li className="hover:cursor-pointer hover:text-primary">
                    TripIt: Best for multi-destination itineraries
                  </li>
                  <li className="hover:cursor-pointer hover:text-primary">
                    Wanderlog: Best company trip planning app for road trips
                  </li>
                  <li className="hover:cursor-pointer hover:text-primary">
                    Wheely: Best for arriving in style
                  </li>
                  <li className="hover:cursor-pointer hover:text-primary">
                    Sygic: Best for bleisure travellers
                  </li>
                  <li className="hover:cursor-pointer hover:text-primary">
                    Packing Pro: Best for strict luggage requirements
                  </li>
                  <li className="hover:cursor-pointer hover:text-primary">
                    Booking.com for Business: Best for full-service business
                    travel platform
                  </li>
                </ol>
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
