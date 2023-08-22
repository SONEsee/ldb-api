import { Router, Response, Request } from 'express';
const router = Router();
import {
  createUserController,
  getUsersDataController,
  getUserDataByIdController,
  updateUserController,
  deleteUserByIdController,
} from './controller';
import upload from '../../utils/upload';

router.post('/create', upload('profile').single('file'), createUserController);

router.get('/get_users_data', getUsersDataController);

router.get('/get_user_data_by_id/:id', getUserDataByIdController);

router.put(
  '/update/:id',
  upload('profile').single('file'),
  updateUserController
);

router.delete('/delete/:id', deleteUserByIdController);
export default router;
