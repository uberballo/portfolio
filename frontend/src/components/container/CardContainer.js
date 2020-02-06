import React, { useState } from 'react';
import CodeCard from '../presentational/CodeCard';
import SingleCode from '../presentational/SingleCode';

const temp = [
  {
    id: 1,
    title: 'koodi1',
    language: 'Java',
    url: 'github.com',
    description: 'kuvaus1',
    code: 'for looppi',
    createdAt: '2020-02-06T13:07:07.049Z',
    updatedAt: '2020-02-06T13:07:07.049Z'
  },
  {
    id: 2,
    title: 'koodi1',
    language: 'Java',
    url: 'github.com',
    description: 'kuvaus1',
    code: 'for looppi',
    createdAt: '2020-02-06T13:07:07.049Z',
    updatedAt: '2020-02-06T13:07:07.049Z'
  },
  {
    id: 3,
    title: 'koodi1',
    language: 'Java',
    url: 'github.com',
    description: 'kuvaus1',
    code: 'for looppi',
    createdAt: '2020-02-06T13:07:07.049Z',
    updatedAt: '2020-02-06T13:07:07.049Z'
  },
  {
    id: 4,
    title: 'koodi1',
    language: 'Java',
    url: 'github.com',
    description: 'kuvaus1',
    code: 'for looppi',
    createdAt: '2020-02-06T13:07:07.049Z',
    updatedAt: '2020-02-06T13:07:07.049Z'
  }
];

const CardContainer = () => {
  const [codes, setCodes] = useState(temp);
  const [currentCode, setCurrentCode] = useState();

  const cards = () => codes.map(c => <CodeCard data={c} setCurrentCode={setCurrentCode} key={c.id} />);

  console.log(codes);
  return (
    <div className='main'>
      {currentCode ? (
        <SingleCode code={currentCode} />
      ) : (
        <div className='row align-items-center justify-content-center'>
          <div className='row '>{codes ? cards() : null}</div>
        </div>
      )}
    </div>
  );
};

export default CardContainer;
