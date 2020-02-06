import React from 'react'
import Header from '../presentational/Header'
import Code from '../presentational/Code'

const temp = {
    id: 1,
title: "koodi1",
language: "Java",
url: "github.com",
description: "kuvaus1",
code: "for looppi",
createdAt: "2020-02-06T13:07:07.049Z",
updatedAt: "2020-02-06T13:07:07.049Z"
}

const HomePageContainer = () =>{

    return(
        <div className = "HomePageContainer">
            <Header />
            <body>
                <Code data={temp}/>
            </body>
        </div>
    )
}

export default HomePageContainer