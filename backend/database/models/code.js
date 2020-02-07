'use strict';
module.exports = (sequelize, DataTypes) => {
  const Code = sequelize.define('Code', {
    title: DataTypes.STRING,
    language: DataTypes.STRING,
    description: DataTypes.STRING,
    code: DataTypes.STRING,
    projectId: DataTypes.INTEGER
  },
   {});
  Code.associate = function(models) {
    // associations can be defined here
    Code.belongsTo(models.Project,{
      foreignKey: 'projectId',
      as: 'project',
      onDelete:'CASCADE'
    })
  };
  return Code;
};