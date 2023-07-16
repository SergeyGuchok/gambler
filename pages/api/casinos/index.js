import CasinoService from 'backend/services/CasinoService';
import responseResult from 'backend/common/responseResult';
import nc from 'next-connect';

const handler = nc({
  onNoMatch: (req, res) => {
    res.status(501).json('Route not found');
  },
});

handler.get(async (req, res) => {
  const result = await CasinoService.getAllCasinos();

  responseResult(result, res);
});

handler.post(async (req, res) => {
  const result = await CasinoService.updateCasino(req.body);

  responseResult(result, res);
});

export default handler;
