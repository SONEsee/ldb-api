import { Router } from 'express';
const router = Router();

import { getDistrictByProvinceController } from './controller';

router.get('/:id', getDistrictByProvinceController);
export default router;
