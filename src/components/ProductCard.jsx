import React from "react";

const ProductCard = ({ svgColor, img, title, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`flex-shrink-0 m-6 relative overflow-hidden ${svgColor} rounded-lg max-w-[12rem] shadow-lg hover:scale-105 hover:shadow-xl duration-500`}
    >
      <svg
        className="absolute bottom-0 left-0 mb-8"
        viewBox="0 0 375 283"
        fill="none"
        style={{ transform: "scale(1.5)", opacity: "0.1" }}
      >
        <rect
          x="159.52"
          y={175}
          width={152}
          height={152}
          rx={8}
          transform="rotate(-45 159.52 175)"
          fill="white"
        />
        <rect
          y="107.48"
          width={152}
          height={152}
          rx={8}
          transform="rotate(-45 0 107.48)"
          fill="white"
        />
      </svg>
      <div className="relative pt-10 px-10 flex items-center justify-center">
        <div
          className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
          style={{
            background: "radial-gradient(black, transparent 60%)",
            transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
            opacity: "0.2",
          }}
        />
        <img className="relative w-40" src={img} alt="" />
      </div>
      <div className="relative flex flex-col gap-2 items-center text-white px-4 pb-4 mt-4">
        <span className="block font-semibold -mb-1 capitalize">{title}</span>
        <span className="cursor-pointer block bg-white rounded-full text-orange-500 text-xs font-bold px-[20px] py-2 leading-none items-center">
          Lihat Detail
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
