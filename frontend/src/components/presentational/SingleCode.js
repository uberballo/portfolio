import React from 'react';

const SingleCode = ({ code, setCurrentCode }) => {
  return (
    <div className='container mt-4'>
      <button
        type='button'
        className='btn btn-primary'
        onClick={() => setCurrentCode()}
      >
        Minimize
      </button>
      <h2 className='display-3 text-center'>{code.title}</h2>
      <p>{code.description}</p>
      <div className='jumbotron'>
        <p>{code.content}</p>
      </div>
    </div>
  );
};

export default SingleCode;
