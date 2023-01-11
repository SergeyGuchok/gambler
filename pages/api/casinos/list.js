import CasinoService from 'backend/services/CasinoService'
import responseResult from 'backend/common/responseResult'

export default async function handler(req, res) {
  const { method } = req
  if (method !== 'GET') {
    return res.status(400).json(`Cannot ${method} api/casinos/list`)
  }

  const result = await CasinoService.getCasinosList()

  responseResult(result, res)
}
