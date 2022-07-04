const express = require('express');

const consolesRouter = express.Router();

consolesRouter.post('/');

consolesRouter.get('/');

consolesRouter.patch('/:id');

consolesRouter.delete('/:id');

module.exports = { consolesRouter };
