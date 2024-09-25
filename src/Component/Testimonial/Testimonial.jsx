import React from "react";
import Slider from "react-slick";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };

  return (
    <>
      <div className="container">
        <div
          className="relative bg-cover bg-center   text-white justify-center items-center"
          style={{ backgroundImage: `url('/image/bg.jpg')` }}
        >
          <div className="  container py-12">
            <Slider {...settings}>
              <div className="">
                <div className="flex  flex-col items-center justify-center py-6   rounded-lg shadow-lg max-w-md mx-auto">
                  <h2 className="text-4xl text-white font-bold tracking-wide mb-4">
                    Testimonial
                  </h2>
                  <img
                    src="/image/ab.webp"
                    alt="Esmeralda"
                    className="rounded-full mt-3  object-cover mb-4 h-24 w-24 border-4 border-gray-400"
                  />
                  <div className=" flex gap-2 ">
                    <h3 className="text-xl font-semibold">Esmeralda111111</h3>
                    <p className="">Customer</p>
                  </div>

                  <p className=" italic">United States</p>
                  <p className="text-center mt-4">
                    Maecenas interdum, metus vitae tincidunt porttitor, magna
                    quam egestas sem, ac scelerisque nisl nibh vel lacus. Proin
                    eget gravida odio. Donec ullamcorper est eu accumsan cursus.
                  </p>
                  <div className="flex absolute top-20   ml-28">
                    <div className="  flex gap-2 ">
                      <div className=" bg-blue-600 h-6 w-6 items-center justify-center p-1 rounded-full">
                        <span>
                          <FaFacebookF />
                        </span>
                      </div>
                      <div className=" bg-[#1DA1F2]  text-white h-6 w-6 items-center justify-center p-1 rounded-full">
                        <span>
                          <FaTwitter />
                        </span>
                      </div>
                      <div className=" bg-[#FFC0CB]  text-white h-6 w-6 items-center justify-center p-1 rounded-full">
                        <span>
                          <TbWorldWww />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex  flex-col items-center justify-center   rounded-lg shadow-lg max-w-md mx-auto">
                  <h2 className="text-4xl text-white font-bold tracking-wide mb-4">
                    Testimonial
                  </h2>
                  <img
                    src="/image/ab.webp"
                    alt="Esmeralda"
                    className="rounded-full mt-3  object-cover mb-4 h-24 w-24 border-4 border-gray-400"
                  />
                  <div className=" flex gap-2 ">
                    <h3 className="text-xl font-semibold">Esmeralda111111</h3>
                    <p className="">Customer</p>
                  </div>

                  <p className=" italic">United States</p>
                  <p className="text-center mt-4">
                    Maecenas interdum, metus vitae tincidunt porttitor, magna
                    quam egestas sem, ac scelerisque nisl nibh vel lacus. Proin
                    eget gravida odio. Donec ullamcorper est eu accumsan cursus.
                  </p>
                  <div className="flex absolute top-20   ml-28">
                    <div className="  flex gap-2 ">
                      <div className=" bg-blue-600 h-6 w-6 items-center justify-center p-1 rounded-full">
                        <span>
                          <FaFacebookF />
                        </span>
                      </div>
                      <div className=" bg-[#1DA1F2]  text-white h-6 w-6 items-center justify-center p-1 rounded-full">
                        <span>
                          <FaTwitter />
                        </span>
                      </div>
                      <div className=" bg-[#FFC0CB]  text-white h-6 w-6 items-center justify-center p-1 rounded-full">
                        <span>
                          <TbWorldWww />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex  flex-col items-center justify-center p-6   rounded-lg shadow-lg max-w-md mx-auto">
                  <h2 className="text-4xl text-white font-bold tracking-wide mb-4">
                    Testimonial
                  </h2>
                  <img
                    src="/image/ab.webp"
                    alt="Esmeralda"
                    className="rounded-full mt-3  object-cover mb-4 h-24 w-24 border-4 border-gray-400"
                  />
                  <div className=" flex gap-2 ">
                    <h3 className="text-xl font-semibold">Esmeralda111111</h3>
                    <p className="">Customer</p>
                  </div>

                  <p className=" italic">United States</p>
                  <p className="text-center mt-4">
                    Maecenas interdum, metus vitae tincidunt porttitor, magna
                    quam egestas sem, ac scelerisque nisl nibh vel lacus. Proin
                    eget gravida odio. Donec ullamcorper est eu accumsan cursus.
                  </p>
                  <div className="flex absolute top-20   ml-28">
                    <div className="  flex gap-2 ">
                      <div className=" bg-blue-600 h-6 w-6 items-center justify-center p-1 rounded-full">
                        <span>
                          <FaFacebookF />
                        </span>
                      </div>
                      <div className=" bg-[#1DA1F2]  text-white h-6 w-6 items-center justify-center p-1 rounded-full">
                        <span>
                          <FaTwitter />
                        </span>
                      </div>
                      <div className=" bg-[#FFC0CB]  text-white h-6 w-6 items-center justify-center p-1 rounded-full">
                        <span>
                          <TbWorldWww />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;

//   for map function

// import React from "react";
// import Slider from "react-slick";

// const testimonials = [
//   {
//     name: "Esmeralda111111",
//     role: "Customer",
//     country: "United States",
//     image: "https://placehold.co/100x100",
//     quote: "Maecenas interdum, metus vitae tincidunt porttitor, magna quam egestas sem, ac scelerisque nisl nibh vel lacus. Proin eget gravida odio. Donec ullamcorper est eu accumsan cursus.",
//     social: [
//       { href: "#", imgSrc: "https://placehold.co/24x24?text=F", alt: "Facebook" },
//       { href: "#", imgSrc: "https://placehold.co/24x24?text=T", alt: "Twitter" },
//       { href: "#", imgSrc: "https://placehold.co/24x24?text=I", alt: "Instagram" }
//     ]
//   },
//   {
//     name: "Esmeralda222222",
//     role: "Customer",
//     country: "United States",
//     image: "https://placehold.co/100x100",
//     quote: "Maecenas interdum, metus vitae tincidunt porttitor, magna quam egestas sem, ac scelerisque nisl nibh vel lacus. Proin eget gravida odio. Donec ullamcorper est eu accumsan cursus."
//   },
//   {
//     name: "Esmeralda",
//     role: "Customer",
//     country: "United States",
//     image: "https://placehold.co/100x100",
//     quote: "Maecenas interdum, metus vitae tincidunt porttitor, magna quam egestas sem, ac scelerisque nisl nibh vel lacus. Proin eget gravida odio. Donec ullamcorper est eu accumsan cursus.",
//     social: [
//       { href: "#", imgSrc: "https://placehold.co/24x24?text=F", alt: "Facebook" },
//       { href: "#", imgSrc: "https://placehold.co/24x24?text=T", alt: "Twitter" },
//       { href: "#", imgSrc: "https://placehold.co/24x24?text=I", alt: "Instagram" }
//     ]
//   }
// ];

// const Testimonial = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 1000,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 5000,
//     cssEase: "linear",
//   };

//   return (
//     <div
//       className="relative bg-cover bg-center h-screen text-white justify-center items-center"
//       style={{ backgroundImage: `url('/image/bg.jpg')` }}
//     >
//       <div className="py-12">
//         <Slider {...settings}>
//           {testimonials.map((testimonial, index) => (
//             <div key={index}>
//               <div className="flex flex-col items-center justify-center p-6   rounded-lg shadow-lg max-w-md mx-auto">
//                 <h2 className="text-3xl font-bold mb-4">Testimonial</h2>
//                 <img
//                   src={testimonial.image}
//                   alt={testimonial.name}
//                   className="rounded-full mb-4"
//                 />
//                 <h3 className="text-xl font-semibold">{testimonial.name}</h3>
//                 <p className="">{testimonial.role}</p>
//                 <p className="">{testimonial.country}</p>
//                 <p className="text-center mt-4">
//                   {testimonial.quote}
//                 </p>
//                 {testimonial.social && (
//                   <div className="flex mt-4 absolute top-14 ml-28">
//                     {testimonial.social.map((social, idx) => (
//                       <a
//                         key={idx}
//                         href={social.href}
//                         className=" p-2 rounded-full"
//                       >
//                         <img src={social.imgSrc} alt={social.alt} />
//                       </a>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </div>
//   );
// };

// export default Testimonial;
