import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
  return fetch('https://zenquotes.io/api/today')
      .then((res) => res.json())
      .then((resData) => {
        res.status(200).json(resData);
      })
}
