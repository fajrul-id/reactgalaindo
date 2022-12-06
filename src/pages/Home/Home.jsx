import Banner from "../../components/Banner";
import Info from "../Info/Info";
import "./home.css";

const Home = () => {
  return (
    <>
      <section
        id="home"
        className="relative px-2 h-[90vh] lg:pt-20 md:pt-16 sm:pt-6 ss:py-0 ss:pb-10 bg-[#EFF6F0] md:px-0"
      >
        <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
          <div className="flex flex-wrap-reverse items-center sm:-mx-3">
            <div className="w-full md:w-1/2 md:px-3">
              <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-[3.5rem]">
                  <span className="block xl:inline">Bangkit Bersama</span>
                  <span className="block text-[#04BFAD] l:inline">
                    Memberdayakan Menstabilkan Ekonomi Dapur
                  </span>
                </h1>
                <p className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">
                  Koperasi Hadir,
                  <br /> Untuk memperbaiki Ekonomi Dapur dan Pemberdayaan
                  Anggota
                </p>
                <div className="relative flex flex-col sm:flex-row sm:space-x-4">
                  <a
                    href="#info"
                    className="flex items-center px-6 py-3 text-gray-100 bg-gray-600 rounded-md hover:bg-gray-200 hover:text-gray-600"
                  >
                    Tampilkan Info
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full lg:mt-0 md:mt-0 sm:mt-0 2xl:mt-0 md:w-1/2 ss:mt-4">
              <div className="w-full h-auto overflow-hidden rounded-md shadow-xl lg:w-full md:w-full ss:w-10/12 ss:mx-auto sm:rounded-xl">
                <Banner />
              </div>
            </div>
          </div>
        </div>

        <div
          className="fill-[#04BFAD] mt-4 bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
          style={{ height: "100%", transform: "translateZ(0px)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            data-name="Layer 3"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            version="1.1"
            x={0}
            y={0}
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </section>
      <Info />
    </>
  );
};

export default Home;
