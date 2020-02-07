import React from 'react'
import CodeCard from '../presentational/CodeCard'
import modifyLength from '../../helpers/modifyLength'

const CodeCardContainer = ({code}) =>{

    return(
        <CodeCard code={modifyLength(code,'content')} key={code.id} />
    )
}

export default CodeCardContainer