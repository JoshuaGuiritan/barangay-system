import StatisticCards from "./components/StatisticCards";
import RainForcastCard from "./components/RainForcastCard";
import CalendarCard from "./components/CalendarCard";

function HomePage() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="col-span-1 lg:col-span-2 flex flex-col gap-5">
          <StatisticCards />
          <RainForcastCard />
        </div>
        <div className="col-span-1">
          <CalendarCard />
        </div>
      </div>
    </>
  );
}

export default HomePage;
