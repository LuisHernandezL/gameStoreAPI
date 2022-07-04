const express = require('express');

const { db, DataTypes } = require('../utils/dataBase');

const GameInConsole = db.define('GameInConsole', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  gameId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  consoleId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  status: {
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: 'active',
  },
});

module.exports = { GameInConsole };
