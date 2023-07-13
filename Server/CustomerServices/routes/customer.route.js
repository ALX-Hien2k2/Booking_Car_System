import express from 'express';
import CustomerController from '../controllers/customer.controller.js';
import Authorization from '../middlewares/authorization.js';
const router = express.Router();

router.get('/',CustomerController.test);
router.post('/login', CustomerController.login);
router.post('/logout', CustomerController.logout);


export default router;