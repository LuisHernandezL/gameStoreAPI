//model
const { Consoles } = require('../models/consoles.model');

//utils
const { AppError } = require('../utils/appError.util');
const { catchAsync } = require('../utils/catchAsync.util');

const createConsole = catchAsync(async (req, res, next) => {
  const { name, company } = req.body;

  const newConsole = await Consoles.create({
    name,
    company,
  });

  res.status(201).json({
    status: 'success',
    newConsole,
  });
});

const getAllConsoles = catchAsync(async (req, res, next) => {
  const data = await Consoles.findAll({
    attributes: ['id', 'name', 'company', 'status'],
  });

  res.status(200).json({
    status: 'succes',
    data,
  });
});

const updateNameConsoles = catchAsync(async (req, res, next) => {});

const deleteConsoles = catchAsync(async (req, res, next) => {});

module.exports = {
  createConsole,
  getAllConsoles,
  updateNameConsoles,
  deleteConsoles,
};
