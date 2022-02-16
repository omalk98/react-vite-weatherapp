import React from 'react';
import './css/Marker.css';

export default function Marker(props) {
    const { color, name } = props;
    return (
      <div className='cus-tag-hover'>
        <div
          className="pin bounce"
          style={{ backgroundColor: color, cursor : 'pointer' }}
          title={name}
        />
        <div className="pulse" />
      </div>
    );
  };