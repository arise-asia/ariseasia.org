const AsiaMap = () => (
  <div className="relative">
    <img
      alt="Map of Asia"
      className="mx-auto w-full max-w-screen-xl"
      src="/asia.svg"
    />
    {/* <p className="absolute top-0 left-1/2 px-6 bg-orange-500 rounded-full w-fit"> */}
    {/*   test */}
    {/* </p> */}
    {/* <div */}
    {/*   className={`absolute z-10 w-2 h-2 rounded -translate-x-1/2 -translate-y-1/2 ${"bg-orange-600"}`} */}
    {/* /> */}
    {/* <div className="absolute w-2 h-2 rounded bg-white/40 animate-[ping-dot_2s_linear_infinite]" /> */}
    {/* <div className="absolute w-2 h-2 rounded bg-white/40 animate-[ping-dot_2s_linear_infinite_1s]" /> */}
    {/* <MapPin /> */}
  </div>
);

export default AsiaMap;

const MapPin = ({ children, onClick, orientation, status }) => {
  const Button = () => (
    <>
      <button
        className={`relative flex z-10 items-center py-1 px-1 uppercase rounded xl:px-3 xl:rounded-3xl text-[0.65rem] font-heading w-fit peer ${
          status == "planned"
            ? "text-white bg-orange-500"
            : status == "future"
              ? "text-white bg-orange-700"
              : "text-gray-500 bg-gray-300"
        }`}
        onClick={onClick}
      >
        {status == "future" && (
          <div className="absolute w-full h-full rounded xl:rounded-3xl -z-10 bg-orange-700/30 animate-[ping-button_1s_linear_infinite] xl:animate-[ping-button-xl_1s_linear_infinite]" />
        )}
        {children}
      </button>
    </>
  );
  const Pin = () => {
    switch (orientation) {
      case "top-left":
        return (
          <div className="-translate-x-[56%] -translate-y-8 xl:translate-x-5 xl:-translate-y-9">
            <div className="hidden lg:flex lg:flex-col lg:items-center xl:items-end xl:-translate-x-full">
              <Button />
              <div
                className={`w-2 h-2 transform origin-top-left -rotate-45 xl:-translate-x-4 ${
                  status == "planned"
                    ? "bg-orange-500"
                    : status == "future"
                      ? "bg-orange-700"
                      : "bg-gray-300"
                }`}
              />
            </div>
          </div>
        );
      case "top-right":
        return (
          <div className="-translate-x-[56%] -translate-y-8 xl:-translate-x-5 xl:-translate-y-9">
            <div className="hidden lg:flex lg:flex-col lg:items-center xl:items-start">
              <Button />
              <div
                className={`w-2 h-2 transform origin-top-left -rotate-45 xl:translate-x-3 ${
                  status == "planned"
                    ? "bg-orange-500"
                    : status == "future"
                      ? "bg-orange-700"
                      : "bg-gray-300"
                }`}
              />
            </div>
          </div>
        );
      case "bottom-left":
        return (
          <div className="-translate-x-[42%] translate-y-2 xl:translate-x-5">
            <div className="hidden lg:flex lg:flex-col-reverse lg:items-center xl:items-end xl:-translate-x-full">
              <Button />
              <div
                className={`w-2 h-2 transform origin-bottom-right -rotate-45 xl:-translate-x-3 ${
                  status == "planned"
                    ? "bg-orange-500"
                    : status == "future"
                      ? "bg-orange-700"
                      : "bg-gray-300"
                }`}
              />
            </div>
          </div>
        );
      case "bottom-right":
      default:
        return (
          <div className="-translate-x-[45%] translate-y-2 xl:-translate-x-5">
            <div className="hidden lg:flex lg:flex-col-reverse lg:items-center xl:items-start">
              <Button />
              <div
                className={`w-2 h-2 transform origin-bottom-right -rotate-45 xl:translate-x-4 ${
                  status == "planned"
                    ? "bg-orange-500"
                    : status == "future"
                      ? "bg-orange-700"
                      : "bg-gray-300"
                }`}
              />
            </div>
          </div>
        );
    }
  };

  return (
    <>
      <div
        className={`absolute z-10 w-2 h-2 rounded -translate-x-1/2 -translate-y-1/2 ${
          status == "planned"
            ? "bg-orange-400"
            : status == "future"
              ? "bg-orange-600"
              : "bg-gray-500"
        }`}
      />
      {status != "past" && (
        <>
          <div className="absolute w-2 h-2 rounded bg-white/40 animate-[ping-dot_2s_linear_infinite]" />
          <div className="absolute w-2 h-2 rounded bg-white/40 animate-[ping-dot_2s_linear_infinite_1s]" />
        </>
      )}
      <Pin />
    </>
  );
};
