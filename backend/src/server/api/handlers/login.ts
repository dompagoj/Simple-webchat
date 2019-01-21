import { NextFunction, Request, Response } from 'express'
import { ChatRoom } from '../../../data/ChatRoom'
import { User } from '../../../data/User'

export async function handleLogin(req: Request, res: Response, next: NextFunction) {
  const { username } = req.body

  const user = await User.findOne({ where: { username } })
  if (!user) {
    await User.create({
      username,
    }).save()
  }

  return res.status(200)
}
