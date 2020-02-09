import React, { useState, useEffect } from 'react';
import SingleProject from '../presentational/SingleProject';
import CodeService from '../../sevices/codeService';
import CodeCardContaier from '../container/CodeCardContainer'

const SingleProjectContainer = ({ project }) => {
  const [codes, setCodes] = useState();

  useEffect(() => {
    const getCodes = async () => {
      const response = await CodeService.getCodeWithId(project.id);
      setCodes(response);
    };
    getCodes();
  }, [project]);

  const cards = () => codes.map(c => <CodeCardContaier code={c} key={c.id}/>);

  return (
    <div >
      <SingleProject project={project} />
      <div className='container'>
        <div className='row '>
          {codes ? cards() : null}
        </div>
      </div>
    </div>
  );
};

export default SingleProjectContainer;
