import axios from "axios"
const baseUrl = "/api/project"

const getProjects = async () =>{
    try{
        const res = await axios.get(baseUrl)
        console.log(res.data)
        return res.data.projects
    } catch (error){
        console.log(error)
    }
}

export default {getProjects}