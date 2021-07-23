import express from "express";
import Vehicle from './vehicles';

const childRouter = express.Router();
const parentRouter = express.Router();

childRouter.use('/vehicle', Vehicle)
export default parentRouter.use('/', childRouter);

