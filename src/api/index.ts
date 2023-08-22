import { Router } from 'express';
const router = Router();
import userRouter from './users/router';
import provinceRouter from './province/router';
import districtRouter from './district/router';
import villageRouter from './village/router';

router.use('/users', userRouter);

router.use('/province', provinceRouter);

router.use('/district', districtRouter);

router.use('/village', villageRouter);

export default router;
