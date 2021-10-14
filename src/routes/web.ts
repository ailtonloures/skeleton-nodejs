import { Router } from 'express'

const web = Router()

web.get('', (request, response) =>
  response.json({
    message: 'Hello World'
  })
)

export { web }
