
import React from 'react';

const ProjectCard = ({ data,setCurrentProject}) => {
  return (
    <div className='card mt-4 ml-4 mr-4 text-center shadow-sm'>
      <div className='card-header'>
        <h5 className='card-title '>{data.title}</h5>
      </div>
      <div className='card-body'>
        <h6 className='card-subtitle mb-2 text-muted'>{data.language}</h6>
        <h6 className='card-subtitle mb-2'>{data.url}</h6>
        <p className='card-text'>{data.description}</p>
      </div>
      <a onClick={() => setCurrentProject(data)} className='btn btn-primary'>
        Choose
      </a>
    </div>
  );
};

export default ProjectCard;
