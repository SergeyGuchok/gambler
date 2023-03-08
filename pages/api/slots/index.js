import SlotsService from 'backend/services/SlotsService';
import responseResult from 'backend/common/responseResult';
import nc from 'next-connect';

const handler = nc({
  onNoMatch: (req, res) => {
    res.status(501).json('Route not found');
  },
});

handler.get(async (req, res) => {
  const { page } = req.query;

  const result = await SlotsService.getSlots(page || 1);

  responseResult(result, res);
});

handler.post(async (req, res) => {
  const result = await SlotsService.updateSlot(req.body);

  responseResult(result, res);
});

export default handler;
