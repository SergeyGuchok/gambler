import AdsService from 'backend/services/AdsService';
import responseResult from 'backend/common/responseResult';
import nc from 'next-connect';

const handler = nc({
  onNoMatch: (req, res) => {
    res.status(501).json('Route not found');
  },
});

handler.get(async (req, res) => {
  const result = await AdsService.getPanelCasinoAds();

  responseResult(result, res);
});

export default handler;
