import React from 'react';
import PropTypes from 'prop-types';

const types = ['min', 'max', 'average', 'median'];

const Toolbar = ({type, setType}) => {
  const handleClick = e => setType(e.target.value);
  return (
    <div className='toolbar'>
      {
        types.map(t => <button className={t === type ? 'active-btn' : null} key={t} value={t} onClick={handleClick}>{t}</button>)
      }
    </div>
  );
};

Toolbar.propTypes = {
  type: PropTypes.string.isRequired,
  setType: PropTypes.func.isRequired
};

export default Toolbar;