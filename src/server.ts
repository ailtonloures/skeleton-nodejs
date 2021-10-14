import express from 'express'
import cors from 'cors'

import { api } from '@routes/api'
import { web } from '@routes/web'

const app = express()

// * Config
app.use(cors())
// * Routes
app.use('/', web)
app.use('/api', api)

app.listen(8080)
