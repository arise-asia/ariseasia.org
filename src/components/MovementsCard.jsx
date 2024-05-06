const MovementsCard = ({ title, subtitle, links, description, imgUrl }) => (
  <div className="flex flex-col lg:flex-row gap-x-4 gap-y-6 p-6 bg-white rounded-3xl">
    <div className="mx-auto">
      <img src={imgUrl} alt="" className="w-32 h-32 bg-green-500 rounded-xl" />
    </div>
    <div>
      <p className="text-2xl font-bold text-cyan-700 font-heading">{title}</p>
      <p className="pt-2 text-gray-500">{subtitle}</p>
      <div className="flex flex-wrap gap-x-4 gap-y-2 pt-4">
        {links &&
          links.map((item) => (
            <a
              className="py-1 px-6 font-bold bg-purple-50 rounded-3xl border-2 border-purple-300 hover:bg-purple-300"
              href={item.target}
              key={item.title}
            >
              {item.title}
            </a>
          ))}
      </div>
      <p className="pt-4">{description}</p>
    </div>
  </div>
);

export default MovementsCard;
