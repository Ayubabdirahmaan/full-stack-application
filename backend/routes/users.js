import express from 'express'
import { getUsers} from '../controllers/task.js'
const router = express.Router()

router.get('/allUser', getUsers)


export default router