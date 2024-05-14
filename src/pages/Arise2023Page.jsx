import day1Img from '../../public/schedule/day-1.jpg';
import day2Img from '../../public/schedule/day-2.jpg';
import day3Img from '../../public/schedule/day-3.jpg';
import day4Img from '../../public/schedule/day-4.jpg';
import day5Img from '../../public/schedule/day-5.jpg';

const Arise2023Page = () => (
  <div className="px-10 pt-60 bg-cyan-50">
    <h1 className="text-4xl font-bold text-center text-cyan-700 uppercase sm:text-5xl md:text-7xl font-heading">
      Arise 2023 Program
    </h1>

    {/* Desktop version */}
    <div className="hidden md:block md:py-10">
      <img alt="Program full" src="/program.png" />
    </div>

    {/* Mobile version */}
    <div className="block md:hidden flex flex-col gap-8 items-center py-10 xl:flex-row justify-center">
      <img alt="Program day 1" src={day1Img} className="xl:w-1/6" />
      <img alt="Program day 2" src={day2Img} className="xl:w-1/6" />
      <img alt="Program day 3" src={day3Img} className="xl:w-1/6" />
      <img alt="Program day 4" src={day4Img} className="xl:w-1/6" />
      <img alt="Program day 5" src={day5Img} className="xl:w-1/6" />
    </div>
  </div>
);

export default Arise2023Page;
