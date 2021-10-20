import express from 'express'
import cors from 'cors'
import { json, urlencoded } from 'body-parser'

import { api } from '@routes/api'
import { web } from '@routes/web'

const app = express()

// * Config
app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
// * Routes
app.use('/', web)
app.use('/api', api)

app.listen(8080)
