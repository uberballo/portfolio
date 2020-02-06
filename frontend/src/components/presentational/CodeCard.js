import React from 'react';

const CodeCard = ({ data }) => {
  return (
    <div className='card text-center'>
      <div className='card-header'>
        <h5 className='card-title '>{data.title}</h5>
      </div>
      <div className='card-body'>
        <h6 className='card-subtitle mb-2 text-muted'>{data.language}</h6>
        <h6 className='card-subtitle mb-2'>{data.url}</h6>
        <p className='card-text'>{data.description}</p>
        <p className='card-text'>{data.code}</p>
      </div>
    </div>
  );
};

export default CodeCard;
