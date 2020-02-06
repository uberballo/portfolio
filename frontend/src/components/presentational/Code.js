import React from 'react'


const Code = ({data}) =>{
    return(
        <div>
            <h1>
                {data.title}
            </h1>
            <h2>
                {data.language}
            </h2>
            <h2>
                {data.url}
            </h2>
            <p>{data.description}</p>
            <p>{data.code}</p>
        </div>
    )
}

export default Code