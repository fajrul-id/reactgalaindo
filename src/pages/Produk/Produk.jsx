import "./produk.css";
import React, { useState } from "react";
import data from "../../constant/productData";
import ProductCard from "../../components/ProductCard";
import ProducDetails from "../../components/ProductDetails";
import Modal from "../../components/Modal";
const Produk = () => {
  const [selectedCard, setSelectedCard] = useState({
    show: false,
    data: {},
  });

  const handleSelectedCard = (data) => {
    setSelectedCard({
      show: true,
      data: data,
    });
  };

  const handleCloseModal = () => {
    setSelectedCard({
      show: false,
    });
  };

  return (
    <>
      {selectedCard.show ? (
        <Modal handleClose={handleCloseModal}>
          <div className="flex ss:flex-col sm:flex-row  items-center">
            <span className="flex items-center justify-center w-1/2 sm:w-full ss:w-full">
              <img alt="" className="w-2/5" src={selectedCard.data.image} />
            </span>
            <ProducDetails
              title={selectedCard.data.title}
              text={selectedCard.data.text}
            />
          </div>
        </Modal>
      ) : null}
      <section
        id="produk"
        className="relative w-full bg-gray-100 pt-7 pb-7 md:pt-10 md:pb-24"
      >
        <div>
          <h2 className="text-4xl font-bold text-center text-gray-800 ">
            PRODUK
          </h2>
        </div>

        {/* PRODUK */}
        <div className="p-24 pt-8 flex flex-wrap items-center justify-center w-screen">
          {data.map((e) => (
            <ProductCard
              title={e.title}
              svgColor={e.svgColor}
              img={e.image}
              key={e.id}
              onClick={() => {
                handleSelectedCard(e);
              }}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Produk;
