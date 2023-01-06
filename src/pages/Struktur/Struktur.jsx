import "./struktur.css";
import React from "react";

const Struktur = () => {
  return (
    <section id="produk" className="relative w-full bg-gray-100 pb-32">
      <h2 className="text-4xl font-bold text-center text-gray-800 pt-10 md:pt-10 ">
        Struktur Organisasi
      </h2>

      <div className="w-screen pt-6 flex flex-wrap justify-center items-center ss:flex-wrap-reverse sm:-mx-3">
        <div className="w-full flex items-center md:w-3/4 hover:scale-105 hover:shadow-xl duration-500">
          <div className="w-full h-auto overflow-hidden rounded-md shadow-xl lg:w-full md:w-full ss:w-[350px] ss:mx-auto ss:hidden lg:block md:block sm:hidden sm:rounded-xl">
            <img
              src="assets/img/struktur.jpeg"
              className="object-fit w-full"
              alt="desktop"
            />
          </div>
          <div className="w-full hidden h-auto overflow-hidden rounded-md shadow-xl ss:block lg:hidden md:hidden sm:block lg:w-full md:w-full ss:w-[350px] ss:mx-auto sm:rounded-xl">
            <img src="assets/img/mobile-struktur.png" alt="mobile" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Struktur;
