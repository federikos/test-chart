import React from 'react';
import PropTypes from 'prop-types';

const types = ['min', 'max', 'average', 'median'];

const Toolbar = ({type, setType}) => {
  const handleClick = e => setType(e.target.value);
  return (
    <div>
      {
        types.map(type => <button key={type} value={type} onClick={handleClick}>{type}</button>)
      }
    </div>
  );
};

Toolbar.propTypes = {
  type: PropTypes.string.isRequired,
  setType: PropTypes.func.isRequired
};

export default Toolbar;