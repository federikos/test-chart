import data from './data.json';
import React, { useState } from 'react';
import Column from './components/Column';
import Toolbar from './components/Toolbar';
import monthNames from './monthNames';
import { MIN } from './constants';
import './App.css';

function App() {
  const [ type, setType ] = useState(MIN);

  return (
    <>
      <Toolbar type={type} setType={setType} />
      <div className="chart">
        {
          monthNames.map(month => {
            const monthData = [ ...data.filter(day => day.date.includes(month.genitive)) ];
            return <Column key={month.nominative} monthData={monthData} type={type} monthName={month.nominative}/>
          })
        }
      </div>
    </>
  );
}

export default App;
