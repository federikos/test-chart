import React, { useEffect, useState } from 'react';
import { MIN, MAX, AVERAGE, MEDIAN, HEIGHT_MULTIPLIER } from '../constants';
import Label from './Label';
import PropTypes from 'prop-types';

const Column = ({ monthData, type, monthName }) => {
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
      [MIN]: Math.min(...temperatures),
      [MAX]: Math.max(...temperatures),
      [AVERAGE]: average,
      [MEDIAN]: median
    })
  }, [monthData]);

  return (
    <div 
      className='column'
      style={{ 
        height: Math.abs(heights[type] * HEIGHT_MULTIPLIER) || 0, 
        bottom: heights[type] > 0 ? 'auto' : heights[type] * HEIGHT_MULTIPLIER || 0
      }}      
      onMouseOver={() => setIsHover(true)} 
      onMouseLeave={() => setIsHover(false)}>
        <Label text={`${monthName} ${heights[type] && heights[type].toFixed(2)}`} visible={isHover}/>
    </div>
  );
};

Column.propTypes = {
  monthData: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  })),
  type: PropTypes.string.isRequired,
  monthName: PropTypes.string.isRequired
};

export default Column;