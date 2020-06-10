import { PrismaClient } from '@prisma/client'
import * as bodyParser from 'body-parser'
import express from 'express'
import { config } from 'dotenv'
import cors, { CorsOptions } from 'cors'

import companies from './routes/companies'
import founders from './routes/founders'

config({ path: '.env3' })

const app = express()

const corsOptions: CorsOptions = {
  origin: (requestOrigin?: string, cb?: Function) => {
    const whitelist = ['http://interview.nicecmpny.com', 'http://techstars-1173038303.us-west-2.elb.amazonaws.com', 'http://52.13.29.211:3000', 'http://172.31.27.247:3000', process.env.CLIENT_BASE_URL, 'http://localhost:3000'];
    if (whitelist.indexOf(requestOrigin) !== -1 || !requestOrigin) {
      cb!(null, true)
    } else {
      cb!(new Error('Not allowed by CORS'))
    }
  },
}

app.use('*', cors(corsOptions))
app.use(bodyParser.json())
app.use('/companies', companies)
app.use('/founders', founders)

export const prisma = new PrismaClient()
// export const prisma2 = new PrismaClient({ datasources: { : process.env['DB_URL'] } })

export const server = app.listen(4000, () =>
  console.log(
    '🚀 Server ready at: http://localhost:4000\n⭐️ See sample requests: http://pris.ly/e/ts/rest-express#3-using-the-rest-api',
  ),
)
