import React from "react";
import ProductDetailsCard from "../../components/ProductDetailsCard";
import { useLocation } from "react-router-dom";
import { BsBackspaceFill } from "react-icons/bs";
import ProductDetailsUnit1 from "../../components/ProductDetailsUnit";
import { Link } from "react-router-dom";
import { useState } from "react";
import UnitUsahaDetails from "../../components/UnitUsahaDetails";
const ProductDetails = () => {
  const location = useLocation();

  const { data } = location.state;

  // console.log(data.products[0].images);

  const [listUnitUsaha, setListUnitUsaha] = useState(data.products[0]?.units);
  console.info(data);

  return (
    <>
      <Link
        to="/unitusaha"
        className="text-lg flex items-center gap-1 top-20 left-4 absolute border-none outline-none drop-shadow-lg text-slate-900"
      >
        <BsBackspaceFill />
        Kembali Ke Unit Usaha
      </Link>
      <section id="details" className="w-screen py-16 shadow-sm mb-14">
        <div className="w-full gap-8 flex flex-col md:flex-row  md:px-14">
          <div className="md:w-[30%] md:h-full flex justify-center">
            <div className="flex">
              <ProductDetailsCard
                title={data.name}
                svgColor={data.svgcolor}
                img={data.unitusahalogo}
                key={data.id}
                desc={data.unitusahadesc}
              />
            </div>
          </div>
          <div className="w-full flex gap-8 flex-col md:w-[65%] md:flex-row sm:w-full items-center md:items-start justify-center">
            <div className="md:w-[20%] w-[90%] flex justify-around md:flex-col gap-2">
              {data.products.map((value, index) => (
                <ProductDetailsUnit1
                  detailstitle={value.name}
                  key={value.id}
                  onClick={() => setListUnitUsaha(value.units)}
                />
              ))}
            </div>
            <div className="relative w-full h-full bg-slate-100-500 md:min-h-[40px] rounded-lg  shadow-[0px_0px_20px_0px_rgba(0,0,0,0.3)]">
              <div className="w-full grid grid-cols-1 items-center p-4">
                <UnitUsahaDetails ListUnitUsaha={listUnitUsaha} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
