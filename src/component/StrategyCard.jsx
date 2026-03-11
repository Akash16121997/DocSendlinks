function StrategyCard({ name, count }) {
  return (
    <div className="card">
      <span>{name}</span>

      <span className="count">
        • {count} {count === 1 ? "Strategy" : "Strategies"}
      </span>
    </div>
  );
}

export default StrategyCard;