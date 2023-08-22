import { Request, Response, NextFunction } from 'express';
import { getDistrictByProvinceService } from './service';
export const getDistrictByProvinceController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    //id is province_id
    const { id } = req['params'];

    const result = await getDistrictByProvinceService(id);
    return res.status(200).json({
      status: 'ok',
      items: result,
      message: '',
    });
  } catch (error) {
    console.error(error);
  }
};
