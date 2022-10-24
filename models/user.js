const { DataTypes } = require('sequelize');

const Attributes = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    // field: 'id',
  },

  vehicle: {
    type: DataTypes.STRING,
    // allowNull: false,
    // field: 'display_name',
  },

  model: {
    type: DataTypes.STRING,
    unique: true,
    // allowNull: false,
    // field: 'email',
  },

  location: {
    type: DataTypes.STRING,
    // allowNull: false,
    // field: 'password',
  },

  time: {
    type: DataTypes.STRING,
    // allowNull: false,
    // field: 'image',
  },
};

module.exports = (sequelize) => {
  const User = sequelize.define(
    'User',
    Attributes,
    {
      underscore: true,
      timestamps: false,
      tableName: 'Users',
    },
  );
  
  return User;
};