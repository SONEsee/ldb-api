import { Request, Response, NextFunction } from 'express';
import { getVillageByDistrictIdService } from './service';
export const getVillageByDistrictIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req['params'];
    const result = await getVillageByDistrictIdService(id);
    return res.status(200).json({
      status: 'ok',
      items: result,
      message: '',
    });
  } catch (error) {
    console.error(error);
  }
};
