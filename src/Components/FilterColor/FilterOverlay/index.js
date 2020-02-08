import React from 'react';
import './styles.css';

const OverlayFilter = ({ color, opacity }) => (
  <div className="overlay" style={{ backgroundColor: color, opacity }} />
);

export default OverlayFilter;
