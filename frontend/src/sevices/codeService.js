import axios from "axios"
const baseUrl = "/api/code"

const getCode = async () =>{
    try{
        const res = await axios.get(baseUrl)
        console.log(res.data)
        return res.data
    } catch (error){
        console.log(error)
    }
}

export default {getCode}