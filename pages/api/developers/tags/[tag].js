import DeveloperService from 'backend/services/DeveloperService';
import responseResult from 'backend/common/responseResult';
import nc from 'next-connect';

const handler = nc({
  onNoMatch: (req, res) => {
    res.status(501).json('Route not found');
  },
});

handler.get(async (req, res) => {
  const { tag } = req.query;

  const result = await DeveloperService.getDevelopersByTag(tag);

  responseResult(result, res);
});

export default handler;
