import { Router } from 'express'

const api = Router()

api.get('', (request, response) =>
  response.json({
    message: 'Hello World'
  })
)

export { api }
