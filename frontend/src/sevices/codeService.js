import axios from "axios"
const baseUrl = "/api/code"

const getCode = async () =>{
    try{
        const res = await axios.get(baseUrl)
        return res.data.codes
    } catch (error){
        console.log(error)
    }
}

export default {getCode}