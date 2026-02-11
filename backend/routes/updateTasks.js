import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { validate } from "../middleware/validationZod.js";
import { taskValidationSchema } from "../Schema/taskSchema.js";
import { updateTask } from "../controllers/todoTask.js";
const router = express.Router();


router.put("/:id", protect, validate(taskValidationSchema), updateTask);

export default router;