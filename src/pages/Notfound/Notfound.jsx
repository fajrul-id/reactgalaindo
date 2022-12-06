import { Link } from "react-router-dom";
import "./notfound.css";
const Notfound = () => {
  return (
    <div className="h-[95vh] w-full flex flex-col justify-center items-center bg-[#1A2238]">
      <h1 className="text-[10rem] font-extrabold text-white tracking-widest">
        404
      </h1>
      <div className="bg-[#FF6A3D] px-2 py-2 text-sm text-white shadow-md rounded rotate-12 absolute">
        HALAMAN TIDAK DI TEMUKAN
      </div>
      <button className="mt-5">
        <div className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring">
          <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0" />
          <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
            <Link to="/">Go Home</Link>
          </span>
        </div>
      </button>
    </div>
  );
};

export default Notfound;
