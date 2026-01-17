import express from 'express'
import { testTask } from '../controllers/task.js'
const router = express.Router()

router.get('/tasks', testTask)

export default router