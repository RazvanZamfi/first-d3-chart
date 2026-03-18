import { useState } from 'react'
import * as d3 from 'd3';
import Barplot from './barplot';
import './App.css'

const data = [
  { country: "United States", students: 68 },
  { country: "France", students: 21 },
  { country: "United Kingdom", students: 21 },
  { country: "Germany", students: 20 },
  { country: "Switzerland", students: 13 },
  { country: "Spain", students: 10 },
  { country: "Netherlands", students: 9 },
  { country: "India", students: 9 },
  { country: "Singapore", students: 8 },
  { country: "Ireland", students: 8 },
  { country: "Sweden", students: 7 },
  { country: "Australia", students: 7 },
  { country: "Canada", students: 6 },
  { country: "Finland", students: 5 },
  { country: "Mexico", students: 4 },
  { country: "Brazil", students: 4 },
  { country: "Saudi Arabia", students: 3 },
  { country: "Romania", students: 3 },
  { country: "Philippines", students: 3 },
  { country: "New Zealand", students: 3 },
];

function App() {
  const [sortMode, setSortMode] = useState("desc");
  const SortedData = [...data].sort((a,b) => {
    if (sortMode === "desc") return b.students - a.students;
    if (sortMode === "asc") return a.students - b.students;
    if (sortMode === "alpha") return a.country.localeCompare(b.country);
    return 0;
  });

  return (
    <>
    <div style={{display: 'flex', gap: 32, paddingLeft: 16}}>
      <h1>Where are the <strong>d3 ❤️ react</strong> class students coming from?</h1>
    </div>
    <div style={{display: 'flex', gap: 8, paddingLeft: 8}}>
      <p>Filter chart by:</p>
      <div style={{display: "flex", gap: 8}}>
        <button className={sortMode ==="desc" ? "active" : ""} onClick={() => setSortMode("desc")}>Descending</button>
        <button className={sortMode === "asc" ? "active" : ""} onClick={() => setSortMode("asc")}>Ascending</button>
        <button className={sortMode ==="alpha"? "active" : ""} onClick={() => setSortMode("alpha")}>Alphabetical</button>
      </div>
    </div>
      <div style={{display: 'flex', gap: 32}}>
        <Barplot data={SortedData}/>
      </div>
    </>
  )
}

export default App
