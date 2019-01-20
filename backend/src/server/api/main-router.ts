import { Router } from 'express'
import { handleLogin } from './handlers/login'
import { checkBody } from './middlewares/check-body'

export const mainRouter = Router()

mainRouter.post('/login', checkBody(['username', 'chatRoomName']), handleLogin)
