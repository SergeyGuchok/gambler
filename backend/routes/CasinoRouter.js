const express = require('express');
const CasinoService = require('../services/CasinoService');
const responseResult = require('../common/responseResult');

const CasinoRouter = express.Router();

CasinoRouter.get('/list/:category', async (req, res) => {
  const { category } = req.params;

  const result = await CasinoService.getCasinosByCategory(category);

  responseResult(result, res);
});

CasinoRouter.get('/', async (req, res) => {
  const result = await CasinoService.getTopCasinos();

  responseResult(result, res);
});

CasinoRouter.get('/list', async (req, res) => {
  const result = await CasinoService.getCasinosList();

  responseResult(result, res);
});

CasinoRouter.post('/add', async (req, res) => {
  const { ...data } = req.body;

  const result = await CasinoService.addCasino(data);

  responseResult(result, res);
});

CasinoRouter.post('/delete', async (req, res) => {
  const { id } = req.body;

  const result = await CasinoService.deleteCasino(id);

  responseResult(result, res);
});

module.exports = CasinoRouter;
