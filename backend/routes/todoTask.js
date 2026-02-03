import express from "express";
import { validate } from "../middleware/validationZod.js";
import { createTask } from "../controllers/todoTask.js";
import { taskValidationSchema } from "../Schema/taskSchema.js";

const router = express.Router();

router.post("/", validate(taskValidationSchema), createTask);

export default router;
