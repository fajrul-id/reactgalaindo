import React from "react";

const ProductDetails = ({ title, text }) => {
  return (
    <div className="flex flex-col gap-4 container">
      <h1 className="text-4xl border-b-4 border-b-black">{title}aa</h1>
      <h1>{text}aa</h1>
    </div>
  );
};

export default ProductDetails;
