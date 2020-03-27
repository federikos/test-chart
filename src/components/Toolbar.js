import React from 'react';
import { types } from '../constants';
import PropTypes from 'prop-types';

const Toolbar = ({type, setType}) => {
  const handleClick = e => setType(e.target.value);
  return (
    <div className='toolbar'>
      {
        types.map(t => 
          <button className={t === type ? 'active-btn' : null} key={t} value={t} onClick={handleClick}>
            { t }
          </button>)
      }
    </div>
  );
};

Toolbar.propTypes = {
  type: PropTypes.string.isRequired,
  setType: PropTypes.func.isRequired
};

export default Toolbar;