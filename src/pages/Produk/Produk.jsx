import "./produk.css";
import ProductCard from "../../components/ProductCard";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Produk = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const handleClick = (e) => {
    navigate("/produk/details", {
      state: {
        data: e,
      },
    });
  };

  const getProductsData = async () => {
    try {
      const result = await axios(
        "https://api.koperasi-gim.com/api/categories",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return result.data.data;
      // return result.data.data;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProductsData().then((e) => {
      setData(e);
    });
  }, []);

  return (
    <>
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
              title={e.name}
              svgColor={e.svgcolor}
              img={e.productlogo}
              key={e.id}
              onClick={() => {
                handleClick(e);
              }}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Produk;
