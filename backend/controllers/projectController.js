const models = require('../database/models');
const getTokenFrom = require('../helper/tokenExtractor');
const jwt = require('jsonwebtoken')

const getAllProjects = async (req, res) => {
  try {
    const projects = await models.Project.findAll({
      attributes: ['title','language','url','description']
    });
    return res.status(200).json({
      projects
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllProjectsWithCodes = async (req, res) => {
  try {
    const projects = await models.Project.findAll({
      attributes: ['title','language','url','description'],
      include: 'codes'
    });
    return res.status(200).json({
      projects
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const createProject = async (req, res) =>{
    const token = getTokenFrom(req)
    console.log(token)
    try{
        const decodedToken = jwt.verify(token, process.env.SECRET)
        if (!token || !decodedToken.admin){
            return res.status(401).json({error: 'token missing or invalid'})
        }
        const project = await models.Project.create(req.body)
        return res.status(201).json({
            project
        })
    } catch (error){
        return res.status(500).json({ error: error.message });
    }
}

module.exports = {
  getAllProjects,
  getAllProjectsWithCodes,
  createProject
};
