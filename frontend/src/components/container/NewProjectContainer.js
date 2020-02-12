import React from 'react';
import ProjectForm from '../presentational/ProjectForm';
import useField from '../../helpers/useField';
import Adminservice from '../../sevices/adminService';

const NewProjectContainer = () => {
  const title = useField('text');
  const language = useField('text');
  const url = useField('text');
  const description = useField('text');

  const handleSubmit = async e => {
    const newProject = {
      title: title.value,
      language: language.value,
      url: url.value,
      description: description.value
    };
    const response = await Adminservice.createProject(newProject);
    console.log(response);
  };

  return (
    <ProjectForm
      title={title}
      language={language}
      url={url}
      description={description}
      handleSubmit={handleSubmit}
    />
  );
};

export default NewProjectContainer;
