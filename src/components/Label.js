import React from 'react';
import PropTypes from 'prop-types';

const Label = ({ text, visible }) => {
  if (!visible) return null;
  
  return (
    <div style={{position: 'absolute', top: -45, zIndex: 2}}>
      { text }
    </div> 
  );
};

Label.propTypes = {
  text: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired
};

export default Label;