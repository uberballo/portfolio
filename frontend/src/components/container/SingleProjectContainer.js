import React, { useState, useEffect } from 'react';
import SingleProject from '../presentational/SingleProject';
import CodeService from '../../sevices/codeService';
import CodeCard from '../presentational/CodeCard'

const SingleProjectContainer = ({ project }) => {
  const [codes, setCodes] = useState();

  useEffect(() => {
    const getCodes = async () => {
      const response = await CodeService.getCodeWithId(project.id);
      setCodes(response);
    };
    getCodes();
  }, []);

  const cards = () => codes.map(c => <CodeCard data={c} key={c.id} />);

  return (
    <div >
      <SingleProject data={project} />
      <div className='container'>
        <div className='row '>
          {codes ? cards() : null}
        </div>
      </div>
    </div>
  );
};

export default SingleProjectContainer;
