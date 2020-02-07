const models = require('../database/models');

const getAllProjects = async (req, res) => {
  try {
    const projects = await models.Project.findAll();
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
      include: 'codes'
    });
    return res.status(200).json({
      projects
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllProjects,
  getAllProjectsWithCodes
};
