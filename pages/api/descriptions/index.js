import DescriptionsService from 'backend/services/DescriptionService';
import responseResult from 'backend/common/responseResult';
import nc from 'next-connect';

const handler = nc({
  onNoMatch: (req, res) => {
    res.status(501).json('Route not found');
  },
});

handler.get(async (req, res) => {
  const result = await DescriptionsService.getDescriptions();

  responseResult(result, res);
});

handler.post(async (req, res) => {
  const result = await DescriptionsService.updateDescription(req.body);

  responseResult(result, res);
});

export default handler;
