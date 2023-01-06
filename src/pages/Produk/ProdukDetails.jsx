import React from "react";
import ProductDetailsCard from "../../components/ProductDetailsCard";
import { useLocation } from "react-router-dom";
import { BsBackspaceFill } from "react-icons/bs";
import ProductDetailsUnit1 from "../../components/ProductDetailsUnit";
import ProductDetailsAlbum from "../../components/ProductDetailsAlbum";
import { Link } from "react-router-dom";
import { useState } from "react";
const ProductDetails = () => {
  const location = useLocation();

  const { data } = location.state;

  // console.log(data.products[0].images);

  const [listPhoto, setListPhoto] = useState(data.products[0]?.images);

  return (
    <>
      <Link
        to="/produk"
        className="text-lg flex items-center gap-1 top-20 left-4 absolute border-none outline-none drop-shadow-lg text-slate-900"
      >
        <BsBackspaceFill />
        Kembali Ke Produk
      </Link>
      <section id="details" className="w-screen py-16 shadow-sm mb-14">
        <div className="w-full gap-8 flex flex-col md:flex-row  md:px-14">
          <div className="md:w-[30%] md:h-full flex justify-center">
            <div className="flex">
              <ProductDetailsCard
                title={data.name}
                svgColor={data.svgcolor}
                img={data.productlogo}
                key={data.id}
                desc={data.productdesc}
              />
            </div>
          </div>
          <div className="w-full flex gap-8 flex-col md:w-[65%] md:flex-row sm:w-full items-center md:items-start justify-center">
            <div className="md:w-[20%] w-[90%] flex justify-around md:flex-col gap-2">
              {data.products.map((value, index) => (
                <ProductDetailsUnit1
                  detailstitle={value.name}
                  key={value.id}
                  onClick={() => setListPhoto(value.images)}
                />
              ))}
            </div>
            <div className="w-[85%] md:w-full md:h-full flex items-center">
              <ProductDetailsAlbum ListPhoto={listPhoto} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
