const views = ["Bullish", "Bearish", "Rangebound", "Volatile"];

function ToggleView({ view, setView }) {
  return (
    <div className="tabs">
      {views.map((data, id) => (
        <button
          key={id}
          className={view === data ? "active" : ""}
          onClick={() => setView(data)}
        >
          {data}
        </button>
      ))}
    </div>
  );
}

export default ToggleView;