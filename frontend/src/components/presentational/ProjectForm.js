import React from 'react';

const ProjectForm = ({title,language,url,description, handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className='form-group'>
        <label >Title</label>
        <input
          type='text'
          className='form-control'
          id='titleInput'
          placeholder='Title'
          {...title}
        />
      </div>
      <div className='form-group'>
        <label >Language</label>
        <input
          type='text'
          className='form-control'
          id='languageInput'
          placeholder='language'
          {...language}
        />
      </div>
      <div className='form-group'>
        <label >URL</label>
        <input
          type='text'
          className='form-control'
          id='urlInput'
          placeholder='url'
          {...url}
        />
      </div>
      <div className='form-group'>
        <label >Description</label>
        <textarea
          className='form-control'
          id='descriptionTextArea'
          rows='3'
          {...description}
        ></textarea>
      </div>
        <button type='submit' className='btn btn-primary'>
          Add
        </button>
    </form>
  );
};

export default ProjectForm