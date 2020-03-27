import data from './data.json';
import React, { useState } from 'react';
import Column from './components/Column';
import './App.css';

const monthNames = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

function App() {
  const [ type, setType ] = useState('min');

  return (
    <>
      <div className="chart">
        {
          monthNames.map(month => {
            const monthData = [ ...data.filter(day => day.date.includes(month)) ];
            return <Column key={month} monthData={monthData} type={type} month={month}/>
          })
        }
      </div>
    </>
  );
}

export default App;
