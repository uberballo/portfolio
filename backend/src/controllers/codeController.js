const models = require('../database/models')
const getTokenFrom = require('../helper/tokenExtractor')
const jwt = require('jsonwebtoken')




const CreateCode = async(req, res) =>{
    const token = getTokenFrom(req)

    try{
        const decodedToken = jwt.verify(token, process.env.SECRET)
        if (!token || !decodedToken.admin){
            return res.status(401).json({error: 'token missing or invalid'})
        }
        const code = await models.Code.create(req.body)
        return res.status(201).json({
            code
        })
    } catch (error){
        return res.status(500).json({ error: error.message });
    }
}

const GetAllCodes = async(req, res) =>{
    try{
       const codes = await models.Code.findAll()
       return res.status(200).json({
           codes
       })
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}
const getCodesWithId = async(req, res) =>{
    try{
       const id= req.params.id || 0
       const codes = await models.Code.findAll({
           where:{
               projectId:id
           }
       })
       return res.status(200).json({
           codes
       })
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

module.exports ={
    CreateCode,
    GetAllCodes,
    getCodesWithId
}