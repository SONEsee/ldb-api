import { Router } from 'express';
const router = Router();
import { getProvinceController } from './controller';

router.get('/', getProvinceController);

export default router;
