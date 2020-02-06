import React from 'react';

const CodeCard = ({ data,setCurrentCode }) => {
  return (
    <div className='card mt-4 ml-4 mr-4 text-center shadow-sm'>
      <div className='card-header'>
        <h5 className='card-title '>{data.title}</h5>
      </div>
      <div className='card-body'>
        <h6 className='card-subtitle mb-2 text-muted'>{data.language}</h6>
        <h6 className='card-subtitle mb-2'>{data.url}</h6>
        <p className='card-text'>{data.description}</p>
        <p className='card-text'>{data.code}</p>
      </div>
      <a onClick={() => setCurrentCode(data)} className='btn btn-primary'>
        Choose
      </a>
    </div>
  );
};

export default CodeCard;
