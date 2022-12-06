import React from "react";
import { BsBackspaceFill } from "react-icons/bs";
const Modal = ({ children, handleClose }) => {
  return (
    <div className="z-10 w-full h-full fixed top-0 left-0 bg-white flex justify-center items-center flex-col">
      {children}
      <button
        className="text-lg flex items-center gap-1 top-20 left-4 absolute border-none outline-none drop-shadow-lg text-slate-900"
        onClick={handleClose}
      >
        <BsBackspaceFill />
        Kembali Ke Produk
      </button>
    </div>
  );
};

export default Modal;
