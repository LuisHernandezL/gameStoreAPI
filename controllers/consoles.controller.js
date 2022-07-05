//model
<<<<<<< HEAD
const { Consoles } = require('../models/consoles.model');
=======
const { Consoles } = require('../models/consoles.model')
const { Games } = require('../models/games.model')
const { GameInConsole } = require('../models/gamesInConsoles.model')
>>>>>>> d0782867311421f51bacc6f0066a9b80ecda192d

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

<<<<<<< HEAD
const getAllConsoles = catchAsync(async (req, res, next) => {
  const data = await Consoles.findAll({
    attributes: ['id', 'name', 'company', 'status'],
  });
=======
const getAllConsoles = catchAsync(async(req, res, next) => {
    const data = await Consoles.findAll({
        attributes: ['id', 'name', 'company', 'status'],
        include: [{model: Games, attributes: ['title', 'genre', 'status']}],
        where: {status: 'active'}
    }
    );
>>>>>>> d0782867311421f51bacc6f0066a9b80ecda192d

  res.status(200).json({
    status: 'succes',
    data,
  });
});

const updateNameConsoles = catchAsync(async (req, res, next) => {});

<<<<<<< HEAD
const deleteConsoles = catchAsync(async (req, res, next) => {});

module.exports = {
  createConsole,
  getAllConsoles,
  updateNameConsoles,
  deleteConsoles,
};
=======
const updateNameConsoles = catchAsync(async(req, res, next) => {
    const { name } = req.body
    const { console } = req

    await console.update({name})

    res.status(204).json({})
})

const deleteConsoles = catchAsync(async(req, res, next) => {
    const { console } = req

    await console.update({status: 'delete'})

    res.status(204).json({})
})

const assignGameToConsole = catchAsync(async(req, res, next) => {
    const { gameId, consoleId } = req.body
    const newAssign = await GameInConsole.create({
        gameId,
        consoleId
    })

    res.status(200).json({
        status: 'success',
        newAssign
    })
})


module.exports = { createConsole, getAllConsoles, updateNameConsoles, deleteConsoles, assignGameToConsole }
>>>>>>> d0782867311421f51bacc6f0066a9b80ecda192d
