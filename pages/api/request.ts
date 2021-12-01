import { NextApiRequest, NextApiResponse } from 'next'

export default async (_req: NextApiRequest, res: NextApiResponse) => {
  switch (_req.method) {
    case 'POST':
      try {
        const { method, url, json, headers } = _req.body;
        const h: any = {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
        headers.forEach((header: { key: string, value: string }) => {
          const { key, value } = header
          if (key.length > 0 && value.length > 0) {
            h[key] = value
          }
        });
        
        const config = {
          method: method,
          headers: {...h},
          body: json
        }
        console.log(config)
        if (method) {
          delete config.body
        }
        const begin = Date.now()
        const result = await fetch(url, config)
        const end = Date.now()
        const time = end - begin
        const { status } = result
        const response = await result.text();
        res.status(200).json({ status, response, time })
      } catch (err: any) {
        res.status(500).json({ statusCode: 500, response: err.message })
      }
      break
    default:
      res.status(405).end()
      break
  }
}
