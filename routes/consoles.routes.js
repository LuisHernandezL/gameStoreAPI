const express = require('express');

//controllers
<<<<<<< HEAD
const {
  createConsole,
  getAllConsoles,
  updateNameConsoles,
  deleteConsoles,
} = require('../controllers/consoles.controller');
=======
const { createConsole, 
    getAllConsoles, 
    updateNameConsoles, 
    deleteConsoles,
    assignGameToConsole } = require('../controllers/consoles.controller')
>>>>>>> d0782867311421f51bacc6f0066a9b80ecda192d

//middlewares
const { consoleExist } = require('../middleware/consoleExist.middleware');
const { protectSession } = require('../middleware/auth.middleware');

const consolesRouter = express.Router();

consolesRouter.get('/', getAllConsoles);

consolesRouter.use(protectSession);

consolesRouter.post('/', createConsole);

<<<<<<< HEAD
consolesRouter.patch('/:id');

consolesRouter.delete('/:id');
=======
consolesRouter.post('/assign-console', assignGameToConsole)

consolesRouter
.use('/:id', consoleExist)
.route('/:id')
.patch(updateNameConsoles)
.delete(deleteConsoles)

>>>>>>> d0782867311421f51bacc6f0066a9b80ecda192d

consolesRouter
  .use('/:id', consoleExist)
  .route('/:id')
  .patch(updateNameConsoles)
  .delete(deleteConsoles);

module.exports = { consolesRouter };
