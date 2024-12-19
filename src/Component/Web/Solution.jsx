import React from "react";

const Solution = () => {
  const data = [
    {
      title: "Dividers",
      description: "A divider is a thin, lightweight rule th...",
    },
    {
      title: "Another Title",
      description: "Another description here...",
    },
    // add more data as needed
  ];

  return (
    <div className=" container-wrapper pt-5">
      <div className="flex py-2">
        <div>
          <h2 className="text-3xl text-primary font-semibold pb-5">
            <span className="bg-orange-50 px-2 py-2">Our </span>
            Industry Expertise
          </h2>
          <p className="text-base md:text-lg pb-3">
            We have excelled our experience in a wide range of industries to
            bring valuable insights and provide our clients with truly
            beneficial solutionsss.
          </p>
        </div>
      </div>

      <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 m-2">
        <div className="flex items-center mb-4">
          <div className="ml-4">
            <div className="font-bold text-xl">{data.title}</div>
            <p className="text-gray-600">{data.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solution;

// import React from 'react';

// const Card = ({ icon, title, description, link }) => {
//   return (
// <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 m-2">
//   <div className="flex items-center mb-4">
//     <div className="h-12 w-12 bg-red-500 rounded-full flex items-center justify-center text-white">
//       <img src={icon} alt={title} className="h-8 w-8"/>
//     </div>
//     <div className="ml-4">
//       <div className="font-bold text-xl">{title}</div>
//       <p className="text-gray-600">{description}</p>
//     </div>
//   </div>
//   <a href={link} className="text-blue-500">Related article</a>
// </div>
//   );
// }

// export default Card;

// import React from 'react';
// import Card from './Card';

// const data = [
//   {
//     icon: 'path/to/icon1.png',
//     title: 'Dividers',
//     description: 'A divider is a thin, lightweight rule th...',
//     link: '#'
//   },
//   {
//     icon: 'path/to/icon2.png',
//     title: 'Another Title',
//     description: 'Another description here...',
//     link: '#'
//   }
//   // add more data as needed
// ];

// const CardList = () => {
//   return (
//     <div className="flex flex-wrap justify-center">
//       {data.map((item, index) => (
//         <Card
//           key={index}
//           icon={item.icon}
//           title={item.title}
//           description={item.description}
//           link={item.link}
//         />
//       ))}
//     </div>
//   );
// }

// export default CardList;
