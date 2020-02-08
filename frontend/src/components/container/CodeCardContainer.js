import React,{useState} from 'react'
import CodeCard from '../presentational/CodeCard'
import modifyLength from '../../helpers/modifyLength'
import SingleCode from '../presentational/SingleCode'

const CodeCardContainer = ({code}) =>{
    const [currentCode, setCurrentCode] = useState()

    return(
        currentCode  
        ? <SingleCode code={currentCode} setCurrentCode={setCurrentCode} />
        : <CodeCard code={modifyLength(code,'content')} setCurrentCode={setCurrentCode} key={code.id} />
         
    )
}

export default CodeCardContainer