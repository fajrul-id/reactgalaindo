import React from "react";

const Visi = () => {
  return (
    <div className="box-border order-first w-full text-black border-solid md:w-1/2 md:pl-10 md:order-none">
      <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
        Boost Productivity
      </h2>
      <p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-lg">
        Build an atmosphere that creates productivity in your organization and
        your company culture.
      </p>
      <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
        <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
          <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full">
            <span className="text-sm font-bold">✓</span>
          </span>{" "}
          Maximize productivity and growth
        </li>
        <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
          <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full">
            <span className="text-sm font-bold">✓</span>
          </span>{" "}
          Speed past your competition
        </li>
        <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
          <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full">
            <span className="text-sm font-bold">✓</span>
          </span>{" "}
          Learn the top techniques
        </li>
      </ul>
    </div>
  );
};

export default Visi;
