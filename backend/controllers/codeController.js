const models = require('../database/models')

const CreateCode = async(req, res) =>{
    try{
        console.log(req.body)
        const code = await models.Code.create(req.body)
        return res.status(200).json({
            code
        })
    } catch (error){
        return res.status(500).json({ error: error.message });
    }
}

const GetAllCodes = async(req, res) =>{
    try{
       const codes = await models.Code.findAll()
       return res.status(201).json({
           codes
       })
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

module.exports ={
    CreateCode,
    GetAllCodes
}