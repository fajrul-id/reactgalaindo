import "./legalitas.css";
const Legalitas = () => {
  return (
    <section
      id="legalitas"
      className="relative w-full bg-gray-100 pt-3 pb-0  ss:pt-16 md:pt-2 md:pb-24"
    >
      <div>
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8 mt-0 sm:mt-10 ">
          Legalitas
        </h2>
      </div>
      <div className="box-border pb-10 flex flex-col items-center content-center  mx-auto  order-first w-full text-black border-solid  md:pl-10 md:order-none">
        <p className="ss:px-4 pb-8 mb-0 leading-7 text-center text-gray-700 border-0 text-lg font-semibold border-gray-300 lg:text-lg">
          Akta Pendirian Koperasi produsen Gala Indo Mandiri
        </p>
        <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
          <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
            <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full">
              <span className="text-sm font-bold">✓</span>
            </span>{" "}
            Badan Hukum No.2/tgl 22 Desember 2021
          </li>
          <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
            <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full">
              <span className="text-sm font-bold">✓</span>
            </span>{" "}
            Nomor AHU - 0014216.AH.01.26 Tahun 2021.
          </li>
          <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
            <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full">
              <span className="text-sm font-bold">✓</span>
            </span>{" "}
            Nomor induk Koperasi 1771060090120
          </li>
          <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
            <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full">
              <span className="text-sm font-bold">✓</span>
            </span>{" "}
            NPWP Koperasi 63.255.453.1-311.0
          </li>
        </ul>
        {/* End  VISI */}
      </div>
    </section>
  );
};

export default Legalitas;
