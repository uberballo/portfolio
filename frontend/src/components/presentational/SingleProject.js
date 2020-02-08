import React from 'react'

const SingleProject = ({project}) =>{
    return(

        <div className="jumbotron">
            <div className="container mt-4">
                <h2 className="display-3 text-center">{project.title}</h2>
                <a href={project.url}>{project.url}</a>
                <p>{project.description}</p>
            </div>
        </div>
    )
}

export default SingleProject