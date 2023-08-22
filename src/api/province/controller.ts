import { Request, Response, NextFunction } from 'express';
import { getProvinceService } from './service';
export const getProvinceController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await getProvinceService();
    return res.status(200).json({ status: 'ok', items: result, message: '' });
  } catch (error) {
    console.error(error);
  }
};
