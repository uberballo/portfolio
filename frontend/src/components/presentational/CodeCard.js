import React from 'react';

const CodeCard = ({ code,setCurrentCode }) => {
  return (
    <div className='card mt-4 ml-4 mr-4 text-center shadow-sm'>
      <div className='card-header'>
        <h5 className='card-title '>{code.title}</h5>
      </div>
      <div className='card-body'>
        <h6 className='card-subtitle mb-2 text-muted'>{code.language}</h6>
        <h6 className='card-subtitle mb-2'>{code.url}</h6>
        <p className='card-text'>{code.description}</p>
        <p className='card-text'>{code.content}</p>
      </div>
      <button onClick={() => setCurrentCode(code)} className='btn btn-primary'>
        Choose
      </button>
    </div>
  );
};

export default CodeCard;
