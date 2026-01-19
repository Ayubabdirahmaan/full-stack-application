import express from 'express'
import { getUsers, register} from '../controllers/task.js'
const router = express.Router()

router.post('/tasks', register)


export default router