const UnitUsahaDetails = ({ ListUnitUsaha }) => {
  return (
    <>
      <div
        className={`relative w-full h-full bg-slate-100-500 md:min-h-[40px] rounded-lg`}
      >
        <div className="p-7 flex justify-around">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            <div className="flex flex-col min-w-[300px] gap-4">
              {ListUnitUsaha?.map((value, index) => {
                return (
                  <div key={index}>
                    <h1 className="w-fit">{value.unit_name}</h1>
                    <div className="flex items-center">
                      <div className="h-1 w-full bg-slate-400 flex items-center">
                        <span
                          style={{ width: `${value.unit_percentage}%` }}
                          className={`block h-2 bg-slate-900 rounded-md`}
                        ></span>
                      </div>
                      <h1 className="w-[20%] text-center">
                        {value.unit_percentage}%
                      </h1>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UnitUsahaDetails;
