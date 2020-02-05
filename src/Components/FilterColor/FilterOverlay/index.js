import React from 'react';
import './styles.css';

const OverlayFilter = ({ color, opacity }) => {
  return (
    <div className="overlay" style={{ backgroundColor:color, opacity: opacity }} />
  );
}

export default OverlayFilter;