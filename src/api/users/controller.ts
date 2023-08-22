import { Request, Response, NextFunction } from 'express';
import {
  createUserService,
  getUsersDataService,
  getUserDataByIdService,
  handleUpdateUploadImage,
  updateUserService,
  deleteUserByIdService,
} from './service';
import * as _ from 'lodash';
export const createUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, surename, date_of_birth, occupation, position, village_id } =
      req['body'];

    const file = req.file;
    let image = null;

    if (typeof file !== 'undefined') {
      image = `/uploads/profile/${file.filename}`;
    }

    const result = await createUserService(
      name,
      surename,
      date_of_birth,
      occupation,
      position,
      image ?? 'NOT_FOUND',
      Number(village_id)
    );

    return res.status(200).json({
      status: 'ok',
      items: result.id,
      message: 'Create user success',
    });
  } catch (error) {
    console.error(error);
  }
};

export const getUsersDataController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await getUsersDataService();
    return res.status(200).json({
      status: 'ok',
      items: result,
      message: '',
    });
  } catch (error) {
    console.error(error);
  }
};

export const getUserDataByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req['params'];
    const result = await getUserDataByIdService(id);
    return res.status(200).json({
      status: 'ok',
      items: result,
      message: '',
    });
  } catch (error) {
    console.error(error);
  }
};

export const updateUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, surename, village_id, date_of_birth, occupation, position } =
      req['body'];
    const { id } = req['params'];

    const file = req.file;
    let image = null;

    if (typeof file !== 'undefined') {
      const handleUpdateUploadImageFunction = await handleUpdateUploadImage(id);
      image = `/uploads/profile/${file.filename}`;
    }
    const result = await updateUserService(
      name,
      surename,
      date_of_birth,
      occupation,
      position,
      image,
      village_id,
      id
    );

    return res.status(200).json({
      status: 'ok',
      items: result,
      message: 'Update user success',
    });
  } catch (error) {
    console.error(error);
  }
};

export const deleteUserByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req['params'];
    const handleUpdateUploadImageFunction = await handleUpdateUploadImage(id);
    const result = await deleteUserByIdService(id);
    return res.status(200).json({
      status: 'ok',
      items: result,
      message: 'Delete user success',
    });
  } catch (error) {
    console.error(error);
  }
};
