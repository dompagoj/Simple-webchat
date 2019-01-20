import { Request, Response, NextFunction } from 'express'
import { difference } from 'lodash'

export function checkBody(params: string[]) {
  return function(req: Request, res: Response, next: NextFunction) {
    const diff = difference(params, Object.keys(req.body))

    if (diff.length > 0) {
      return res.status(400).json({ error: 'Missing username or chatRoomName' })
    }

    next()
  }
}
