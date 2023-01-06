const ProductDetailsAlbum = ({ ListPhoto }) => {
  return (
    <>
      <div
        className={`relative w-full h-full bg-slate-100-500 md:min-h-[40px] rounded-lg  shadow-[0px_0px_20px_0px_rgba(0,0,0,0.3)]`}
      >
        <div className="p-7 flex justify-around">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {ListPhoto?.map((value, index) => {
              return (
                <div key={index} className="flex w-full h-full items-center">
                  <img
                    className="relative hover:scale-110 duration-500"
                    src={value.url}
                    alt=""
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailsAlbum;
