import Faq from "@/Component/FAQ/Faq";
import Nav from "@/Component/Header/Nav";
import Link from "next/link";

export default function Resource() {
  const cardData = [
    {
      title: "Stat Report 2024",
      description: "Discovin the UiPath Community industry report.",
      type: "FEATURED | ANALYST REPORT",
      image: "/image/1.png", // Add the image URL
    },
    {
      title: "2024 Robotic Process Automation",
      description: "UiPath for Robotic Process Automation.",
      type: "FEATURED | ANALYST REPORT",
      image: "/image/1.png", // Add the image URL
    },
    {
      title: "Everest Group Assessment 2024",
      description:
        "According to their market impact, vision, and capabilities.",
      type: "FEATURED | ANALYST REPORT",
      image: "/image/1.png", // Add the image URL
    },
    {
      title: "Everest Group Assessment 2024",
      description:
        "According to their market impact, vision, and capabilities.",
      type: "FEATURED | ANALYST REPORT",
      image: "/image/1.png", // Add the image URL
    },
  ];

  return (
    <>
      <div className="bg-slate-100 ">
        <Nav />
        <div className="container-wrapper">
          <div className="flex items-center justify-center py-4  bg-gray-100">
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/resource/all" className="btn_filter">
                Show all
              </Link>
              <Link href="/resource/webinar" className="btn_filter">
                Webinar
              </Link>
              <Link href="/resource/case-studies" className="btn_filter">
                Case & studies
              </Link>
              <Link href="/resource/training" className="btn_filter">
                Training
              </Link>
              <Link href="/resource/demo-videos" className="btn_filter">
                Demos & Videos
              </Link>
            </div>
          </div>
        </div>
        <div className=" container-wrapper  grid grid-cols-1 xl:grid-cols-[320px,2fr] gap-5 relative">
          <div className="relative">
            <div className="hidden xl:block">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-lg font-semibold mb-4">FILTER BY:</h2>

                <div className="mb-6">
                  <h3 className="font-semibold text-md mb-2">Industries</h3>
                  <label className="flex items-center mb-1">
                    <input
                      type="checkbox"
                      className="form-checkbox h-4 w-4 text-blue-600"
                    />
                    <span className="ml-2">Banking and Financial Services</span>
                  </label>
                  <label className="flex items-center mb-1">
                    <input
                      type="checkbox"
                      className="form-checkbox h-4 w-4 text-blue-600"
                    />
                    <span className="ml-2">Customer Experience</span>
                  </label>
                  <label className="flex items-center mb-1">
                    <input
                      type="checkbox"
                      className="form-checkbox h-4 w-4 text-blue-600"
                    />
                    <span className="ml-2">Energy and Utilities</span>
                  </label>
                  <label className="flex items-center mb-1">
                    <input
                      type="checkbox"
                      className="form-checkbox h-4 w-4 text-blue-600"
                    />
                    <span className="ml-2">Healthcare</span>
                  </label>
                  <button className="text-blue-500 mt-2">Show more</button>
                </div>

                <div className="mb-6">
                  <h3 className="font-semibold text-md mb-2">Departments</h3>
                  <label className="flex items-center mb-1">
                    <input
                      type="checkbox"
                      className="form-checkbox h-4 w-4 text-blue-600"
                    />
                    <span className="ml-2">Contact Center</span>
                  </label>
                  <label className="flex items-center mb-1">
                    <input
                      type="checkbox"
                      className="form-checkbox h-4 w-4 text-blue-600"
                    />
                    <span className="ml-2">Finance and Accounting (F&A)</span>
                  </label>
                  <label className="flex items-center mb-1">
                    <input
                      type="checkbox"
                      className="form-checkbox h-4 w-4 text-blue-600"
                    />
                    <span className="ml-2">Human Resources (HR)</span>
                  </label>
                  <label className="flex items-center mb-1">
                    <input
                      type="checkbox"
                      className="form-checkbox h-4 w-4 text-blue-600"
                    />
                    <span className="ml-2">Information Technology (IT)</span>
                  </label>
                  <button className="text-blue-500 mt-2">Show more</button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              {/* <SearchCarPagePackageList/> */}

              <div className="grid grid-cols-1 bg-red-500 sm:grid-cols-2 md:grid-cols-3 gap-2 p-2 lg:grid-cols-3">
                {cardData.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-md px-3 py-4 m-2   transition-transform transform hover:scale-105"
                  >
                    <div className="flex items-center">
                      <img
                        src={item.image}
                        alt={item.type}
                        className="w-40 h-40"
                      />
                    </div>
                    <div className="font-semibold text-xs pt-5 pb-1 text-blue-600">
                      {item.type}
                    </div>
                    <h3 className="text-md md:text-lg font-bold mb-2 break-words">
                      {item.title}
                    </h3>
                    <p className="text-sm md:text-md text-gray-700">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* <div className="border-t border">
                    <div className="w-full md:w-3/4 m-auto px-2 pb-5">
                        <div className="text-center mt-5 mb-10">
                            <p className="md:text-[22px] text-[20px] font-semibold mb-2 capitalize">
                                Frequently Asked Questions (FAQs) <span className='lowercase'>for</span>
                            </p>
                            <p className="text-para md:text-base">
                                We help you prepare for your trip and ensure an effortless and enjoyable travel experience.
                            </p>
                        </div>
                        <Faq/>
                    </div>
                </div> */}
        {/* <div className="border-t border">
                    <BottomLink/>
                </div> */}
      </div>
    </>
  );
}
