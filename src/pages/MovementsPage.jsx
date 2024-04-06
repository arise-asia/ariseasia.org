const MovementsPage = () => (
  <div className="px-10 pt-60 bg-cyan-50">
    <div className="container">
      <h1 className="text-4xl font-bold text-center text-cyan-700 uppercase sm:text-5xl md:text-7xl font-heading">
        Movements
      </h1>
      <div className="flex justify-center pt-6">
        <p className="py-2 px-6 font-bold bg-white rounded-full">
          Check out{' '}
          <a className="underline" href="https://goarise.org">
            goarise.org
          </a>{' '}
          for where Arise Movements are taking place!
        </p>
      </div>
      <div className="flex flex-col lg:flex-row py-20">
        <div className="flex flex-col gap-y-4 px-10 xl:w-1/3">
          <button className="py-2 pl-8 font-bold text-left text-black bg-white rounded-full border-4 border-purple-300 hover:bg-purple-300">
            Past
          </button>
          <button className="py-2 pl-8 font-bold text-left text-black bg-white rounded-full border-4 border-purple-300 hover:bg-purple-300">
            Upcoming
          </button>
          <button className="py-2 pl-8 font-bold text-left text-black bg-white rounded-full border-4 border-purple-300 hover:bg-purple-300">
            Stay Tuned
          </button>
          <h3 className="text-2xl font-bold text-center font-heading">
            Country/City
          </h3>
          <div className="flex flex-col gap-y-2 p-2 bg-white rounded-xl">
            {[
              'Philippines: Cebu',
              'Philippines: CDO',
              'Pakistan',
              'Hong Kong',
              'Indonesia',
              'Nepal',
              'Latino',
            ].map((item) => (
              <button
                className="text-xl text-black bg-white rounded-xl border-4 border-purple-300 btn font-heading"
                key={item}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-y-4 xl:w-2/3">
          <h2 className="text-3xl font-bold text-purple-700 font-heading">
            Past Movements
          </h2>
          <div className="flex gap-x-4 p-6 bg-white rounded-3xl">
            <div className="bg-green-700">
              <img src="" alt="" className="w-32 h-32 bg-green-500" />
            </div>
            <div className="bg-gray-50">
              <p className="text-2xl font-bold text-cyan-700 font-heading">
                Arise Cebu Youth Mission Conference
              </p>
              <p className="pt-2 text-gray-500">December 2, 2023</p>
              <div className="flex gap-x-4 pt-4">
                <button>Praise Report</button>
                <button>Instagram</button>
                <button>Facebook</button>
                <button>Link</button>
              </div>
              <p></p>
            </div>
          </div>
          <div className="flex gap-x-4 justify-end">
            <button className="text-black bg-white rounded-full border-2 border-purple-300 btn btn-circle">
              &lt;
            </button>
            <button className="text-black bg-white rounded-full border-2 border-purple-300 btn btn-circle">
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default MovementsPage;
