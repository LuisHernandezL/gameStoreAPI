const express = require('express');

const app = express();

app.use(express.json());

const { usersRouter } = require('./routes/users.routes');
const { gamesRouter } = require('./routes/games.routes');
const { consolesRouter } = require('./routes/consoles.routes');

const { globalErrorHandler } = require('./controllers/error.controller');

const { AppError } = require('./utils/appError.util');

//Users Endpoint
app.use('/api/v1/users', usersRouter);
//Games Endpoint
app.use('/api/v1/games', gamesRouter);
<<<<<<< HEAD
//Consoles Endpoint
app.use('/api/v1/consoles');
=======
app.use('/api/v1/consoles', consolesRouter)
>>>>>>> d0782867311421f51bacc6f0066a9b80ecda192d

app.all('*', (req, res, next) => {
  next(
    new AppError(
      `${req.method} ${req.originalUrl} not found in this server`,
      404
    )
  );
});

app.use(globalErrorHandler);

module.exports = { app };
