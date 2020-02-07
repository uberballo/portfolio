import React from 'react'
import CodeCard from '../presentational/CodeCard'

const CodeCardContainer = ({code}) =>{
    const MAX_LENGTH = 150

  const modifyCodeLenght= code => {
    const content= code.content;
    const newContent=
      content.length >  MAX_LENGTH
      ? content.substring(0, MAX_LENGTH) + '...'
      : content;
    const newCode = { ...code, content : newContent };
    return newCode;
  };
    return(
        <CodeCard code={code} key={code.id} />
    )
}

export default CodeCardContainer