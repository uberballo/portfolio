import React, { useState, useEffect} from 'react';
import ProjectCard from '../presentational/ProjectCard'
import SingleProjectContainer from '../container/SingleProjectContainer'
import ProjectService from '../../sevices/projectService'

const CardContainer = () => {
  const [projects, setProjects] = useState();
  const [currentProject, setCurrentProject] = useState();

    useEffect(() =>{
        const getProjects= async () =>{
            const response = await ProjectService.getProjects()
            setProjects(response)
       }
       getProjects()
    },[])

  const cards = () => projects.map(p => <ProjectCard data={p} setCurrentProject={setCurrentProject} key={p.id} />);

  return (
    <div className='main'>
      {currentProject ? (
        <SingleProjectContainer project={currentProject} />
      ) : (
        <div className='row align-items-center justify-content-center'>
          <div className='row align-items-center justify-content-center'>{projects ? cards() : null}</div>
        </div>
      )}
    </div>
  );
};

export default CardContainer;
