import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import ToggleView from './component/ToggleView';
import DateDropdown from './component/DateDropdown';
import StrategyList from './component/StrategyList';
import { dateArray } from './data/data';

function App() {
 const [view, setView] = useState("Bullish");
  const [date, setDate] = useState(dateArray[0]);

  return (
    <div className="container">
      <ToggleView view={view} setView={setView} />

      <DateDropdown date={date} setDate={setDate} />

      <StrategyList view={view} date={date} />
    </div>
  );
}

export default App;
