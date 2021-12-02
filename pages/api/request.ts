import { NextApiRequest, NextApiResponse } from 'next'

export default async (_req: NextApiRequest, res: NextApiResponse) => {
  switch (_req.method) {
    case 'POST':
      const begin = Date.now()
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
          headers: { ...h },
          timeout: 3000,
          body: JSON.stringify(json) as any
        }

        console.log(config)
        if (method === "GET") {
          delete config.body
        }


        const result = await fetch(url, config)
        const time = Date.now() - begin
        const { status } = result
        const response = await result.text();
        res.status(200).json({ status, response, time })
      } catch (err: any) {
        const time = Date.now() - begin
        res.status(500).json({ status: 500, response: err.message, time })
      }
      break
    default:
      res.status(405).end()
      break
  }
}
