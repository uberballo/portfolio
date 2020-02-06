import React from 'react'

const SingleCode = ({code}) =>{
    return(
        <div className="jumbotron">
            <div className="container mt-4">
                <h2 className="display-3 text-center">{code.title}</h2>
                <p>{code.description}</p>
            </div>
        </div>
    )
}

export default SingleCode