'use strict';
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    title: DataTypes.STRING,
    language: DataTypes.STRING,
    url: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Project.associate = function(models) {
    Project.hasMany(models.Code,{
      foreignKey:'projectId',
      as:'codes',
      onDelete: 'CASVADE',
    })
    // associations can be defined here
  };
  return Project;
};