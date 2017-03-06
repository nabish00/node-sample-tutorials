import express from 'express';
import adminController from '../Controller/AdminController';

const router = express.Router();

router.post('/addAdmin',adminController.addAdmin);

export default router;