import { NextFunction, Request, Response } from 'express'
import { User } from '../../../data/User'

export async function handleLogin(req: Request, res: Response, next: NextFunction) {
  const { username } = req.body

  let user = await User.findOne({ where: { username } })
  if (!user) {
    user = await User.create({
      username,
    }).save()
  }

  return res.status(200).json({ user })
}
