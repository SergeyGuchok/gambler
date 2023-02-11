import DescriptionsService from 'backend/services/DescriptionService';
import responseResult from 'backend/common/responseResult';
import nc from 'next-connect';

const handler = nc({
  onNoMatch: (req, res) => {
    res.status(501).json('Route not found');
  },
});

handler.get(async (req, res) => {
  const { name } = req.query;

  const result = await DescriptionsService.getDescriptionByName(name);

  responseResult(result, res);
});

export default handler;
