//Models
const { Games } = require('../models/games.model');
const { AppError } = require('../utils/appError.util');
const { catchAsync } = require('../utils/catchAsync.util');

const gameExist = catchAsync(async (req, res, next) => {
  const { id, gameId } = req.params;
<<<<<<< HEAD
  const game = await Games.findOne({ where: { id: id || gameId } });
=======
  const game = await Games.findOne({ where: { id : id || gameId } });
>>>>>>> d0782867311421f51bacc6f0066a9b80ecda192d

  if (!game) {
    return next(new AppError('Game not found', 404));
  }

  req.game = game;

  next();
});

module.exports = { gameExist };
