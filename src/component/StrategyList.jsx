import { strategyArray } from "../data/data";
import StrategyCard from "./StrategyCard";

function StrategyList({ view, date }) {
  const strategyData = strategyArray.find((item) => item.View === view);

  const strategies = strategyData?.Value[date] || [];
  
  const counts = strategies.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});



  if (strategies.length === 0) {
    return (
      <div className="empty">
        There are no strategies for
        <br />
        <b>{date}</b>
      </div>
    );
  }

  return (
    <div>
      {Object.entries(counts).map(([name, count]) => (
        <StrategyCard key={name} name={name} count={count} />
      ))}
    </div>
  );
}

export default StrategyList;