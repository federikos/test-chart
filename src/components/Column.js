import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Column = ({ monthData, type, month }) => {
  const [ heights, setHeights ] = useState({});
  const [ isHover, setIsHover] = useState(false);


  useEffect(() => {
    const temperatures = monthData.map(item => Number(item.value));
    const halfOfLength = temperatures.length / 2;
    const average = temperatures.reduce((acc, item) => acc + item, 0) / temperatures.length;
    const median = temperatures.length % 2 === 0 
      ? (temperatures[halfOfLength] + temperatures[halfOfLength - 1]) / 2 
      : temperatures[Math.floor(halfOfLength - 1)]

    setHeights({
      min: Math.min(...temperatures),
      max: Math.max(...temperatures),
      average,
      median
    })
  }, [monthData]);

  return (
    <div className='column'
    style={{ 
      height: Math.abs(heights[type] * 10) || 0, 
      bottom: heights[type] > 0 ? 'auto' : heights[type] * 10 || 0
    }}      
      onMouseOver={() => setIsHover(true)} 
      onMouseLeave={() => setIsHover(false)} >
      {
        isHover 
          ? <div style={{position: 'absolute', top: -45, zIndex: 2}}>{`${month} ${heights[type].toFixed(2)}`}</div> 
          : null
      }
    </div>
  );
};

Column.propTypes = {
  monthData: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  })),
  type: PropTypes.string.isRequired,
  month: PropTypes.string.isRequired
};

export default Column;