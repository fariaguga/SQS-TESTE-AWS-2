const { DataTypes } = require('sequelize');

const Attributes = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    // field: 'id',
  },

  name: {
    type: DataTypes.STRING,
    // allowNull: false,
    // field: 'display_name',
  },

  email: {
    type: DataTypes.STRING,
    unique: true,
    // allowNull: false,
    // field: 'email',
  },

  wpp: {
    type: DataTypes.STRING,
    // allowNull: false,
    // field: 'password',
  },

  music: {
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