const MovementsPage = () => (
  <div className="px-10 pt-60 bg-cyan-50">
    <div className="flex flex-col gap-8 items-center">
      <h1 className="text-4xl font-bold text-center text-cyan-700 uppercase sm:text-5xl md:text-7xl font-heading">
        Movements
      </h1>

      <a
        role="button"
        className="btn bg-white rounded-full font-bold border-0 w-full md:w-3/5"
        href="https://www.goarise.org/"
        rel="noreferrer noopener"
        target="_blank"
      >
        Check out goarise.org for where Arise Movements are taking place!
      </a>

      <h2 className="mb-5 text-3xl font-bold text-center text-cyan-700 md:text-5xl">
        COMING SOON!
      </h2>
    </div>
  </div>
);

export default MovementsPage;
