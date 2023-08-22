import { Router } from 'express';
const router = Router();

import { getVillageByDistrictIdController } from './controller';

router.get('/:id', getVillageByDistrictIdController);
export default router;
