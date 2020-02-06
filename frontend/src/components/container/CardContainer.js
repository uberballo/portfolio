import React, { useState, useEffect} from 'react';
import CodeCard from '../presentational/CodeCard';
import SingleCode from '../presentational/SingleCode';
import CodeServive from '../../sevices/codeService'

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
];

const CardContainer = () => {
  const [codes, setCodes] = useState();
  const [currentCode, setCurrentCode] = useState();

    useEffect(() =>{
        const getCode = async () =>{
            const response = await CodeServive.getCode()
            setCodes(response)
       }
       getCode()
    },[])

  const cards = () => codes.map(c => <CodeCard data={c} setCurrentCode={setCurrentCode} key={c.id} />);

  return (
    <div className='main'>
      {currentCode ? (
        <SingleCode code={currentCode} />
      ) : (
        <div className='row align-items-center justify-content-center'>
          <div className='row align-items-center justify-content-center'>{codes ? cards() : null}</div>
        </div>
      )}
    </div>
  );
};

export default CardContainer;
