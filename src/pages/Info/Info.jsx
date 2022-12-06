import "./info.css";
const Info = () => {
  return (
    <section
      id="info"
      className="relative w-full bg-gray-100 pt-7 pb-7  ss:pt-16 md:pt-10 md:pb-24"
    >
      <div>
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8 sm:mt-10 ">
          INFO
        </h2>
      </div>
      <div className="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16">
        {/* VISI */}
        <div className="box-border order-first w-full text-black border-solid md:w-1/2 md:pl-10 md:order-none">
          <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
            Visi
          </h2>
          <p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-lg">
            Visi kami adalah Visi
          </p>
        </div>
        {/* End  VISI */}

        {/* MISI */}
        <div className="box-border w-full text-black border-solid md:w-1/2 md:pl-6 xl:pl-32">
          <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
            Misi
          </h2>
          <p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-10 lg:text-lg">
            Misi kami adalah Misi
          </p>
        </div>
        {/* End  MISI */}
      </div>
    </section>
  );
};

export default Info;
