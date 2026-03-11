import { dateArray } from "../data/data";

function DateDropdown({ date, setDate }) {
  return (
    <select
      className="dropdown"
      value={date}
      onChange={(e) => setDate(e.target.value)}
    >
      {dateArray.map((d) => (
        <option key={d} value={d}>
          {d}
        </option>
      ))}
    </select>
  );
}

export default DateDropdown;