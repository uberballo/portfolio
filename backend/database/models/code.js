'use strict';
module.exports = (sequelize, DataTypes) => {
  const Code = sequelize.define('Code', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    language: DataTypes.STRING,
    url: DataTypes.STRING,
    code: DataTypes.STRING
  },
   {});
  Code.associate = function(models) {
    // associations can be defined here
  };
  return Code;
};