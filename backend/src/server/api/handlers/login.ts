import { NextFunction, Request, Response } from 'express'
import { ChatRoom } from '../../../data/ChatRoom'
import { User } from '../../../data/User'

export async function handleLogin(req: Request, res: Response, next: NextFunction) {
  const { username, chatRoomName } = req.body

  const p1 = User.create({
    username,
  })
  const p2 = ChatRoom.create({
    name: chatRoomName,
  })

  await Promise.all([p1, p2])

  return res.status(200)
}
