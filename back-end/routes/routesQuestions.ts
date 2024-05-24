import express from 'express';
import * as controller from '../controllers/questionsController';

const router = express.Router();

router.route('/getQuestions')
  .get(controller.getQuestions)
  .post(controller.insertQuestions)
  .delete(controller.dropQuestions);

router.route('/result')
  .get(controller.getResult)
  .post(controller.storeResult)
  .delete(controller.dropResult);

export default router;
