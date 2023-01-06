import React from "react";

const ProductDetailsCard = ({ svgColor, img, title, desc }) => {
  return (
    <>
      <div className="h-full flex items-center justify-center">
        <div className="flex flex-col items-center gap-4 ">
          <div
            className={`p-10 max-w-[10rem] relative ${svgColor} rounded-lg sm:max-w-[15rem] md:max-w-[20rem] md:max-h-[40rem] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.3)] hover:scale-105 hover:shadow-xl duration-500`}
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
            <div className="relative flex items-center justify-center">
              <img className="relative" src={img} alt="" />
            </div>
            <div className="relative flex flex-col gap-2 items-center text-white px-4 pb-4 mt-4">
              <span className="block font-semibold -mb-1 capitalize">
                {title}
              </span>
            </div>
          </div>
          <p className="max-w-[20rem] text-md text-justify text-black capitalize">
            {desc}
          </p>
        </div>
      </div>
    </>
  );
};

export default ProductDetailsCard;
