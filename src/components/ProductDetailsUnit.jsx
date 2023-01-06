import React from "react";

const ProductDetailsUnit = ({ detailstitle, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="flex ss:justify-center sm:justify-center gap-4 justify-end container cursor-pointer"
    >
      <span className="w-[85%] bg-slate-600 p-1 rounded-full">
        <h1 className="text-l hover:text-emerald-300 text-slate-200 text-center">
          {detailstitle}
        </h1>
      </span>
    </div>
  );
};

export default ProductDetailsUnit;
