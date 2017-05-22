'use strict';

module.exports = (sequelize, DataTypes) => {
  let models = sequelize.models;

  var Model = sequelize.define('student', {
    name: {
      type: DataTypes.STRING,
      primaryKey: true 
    },
    standard: {
      type: DataTypes.STRING,
    },
    gender: {
      type: DataTypes.INTEGER,
    },
    sports_enrolled: {
      type: DataTypes.INTEGER,
    },
  }, {
    classMethods: {
      associate: () => {
      }
    },
    tableName: 'student',
    underscored: true,
    timestamps: false,
  });

  return Model;
};

