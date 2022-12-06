import React from "react";

const productDetails = ({ title, text }) => {
  return (
    <div className="flex flex-col w-1/2 sm:w-full ss:w-full gap-4 container">
      <h1 className="text-4xl border-b-4 border-b-black">{title}</h1>
      <h1>{text}</h1>
    </div>
  );
};

export default productDetails;
