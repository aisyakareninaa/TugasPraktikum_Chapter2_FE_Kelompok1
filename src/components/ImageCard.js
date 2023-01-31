import React from "react";

const ImageCard = ({ image }) => {
  const desc = image.description;
  const res = desc.substr(0, 40);
  return (
    <a href="" className="bg-white rounded-lg overflow-hidden mx-auto w-64 space-x-0">
      <img
        src={image.image}
        alt=""
        className="w-full h-48 md:h-48 object-contain p-2 my-5 rounded-md"
      />
      <div className="px-6 py-8">
        <div className="font-bold text-indigo-400 text-lg mb-3">{image.name}</div>
        <div className="text-indigo-400">
          <ul>
            <li>{res}...</li>
            <li className="text-base mt-1">
              <strong>{image.price}</strong>
            </li>
            <li className="text-indigo-300 text-sm">
              {image.category}
            </li>
          </ul>
        </div>
      </div>
    </a>
  );
};

export default ImageCard;
