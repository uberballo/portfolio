import React from 'react'

const SingleProject = ({data}) =>{
    return(

        <div className="jumbotron">
            <div className="container mt-4">
                <h2 className="display-3 text-center">{data.title}</h2>
                <p>{data.description}</p>
            </div>
        </div>
    )
}

export default SingleProject