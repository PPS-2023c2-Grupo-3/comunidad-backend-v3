import express from 'express';
import {
  getAll
} from '../controllers/jornadas';
import { withErrorHandling } from './utils';
import { validateToken } from '../middlewares/validador';

const router = express.Router();

router.get('/',validateToken, withErrorHandling(getAll));

export default router;