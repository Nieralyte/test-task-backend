import _ from 'lodash-fp'
import * as $$ from './util.js'

import express from 'express'
import morgan from 'morgan'
import serveStatic from 'serve-static'
import serveIndex from 'serve-index'
//import bodyParser from 'body-parser'
//import cookieParser from 'cookie-parser'
import vhost from 'vhost'

import mainHost from './main-host.js'
import object1Vhost from './object1-vhost.js'
import object2Vhost from './object2-vhost.js'

const app = express()

// enable CORS:

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  
  next()
})

app.use(morgan('dev')) // logger
//app.use(bodyParser.urlencoded({extended: true}))
//app.use(bodyParser.json())
//app.use(cookieParser())

app.use(vhost('object1.localhost', object1Vhost))
app.use(vhost('object2.localhost', object2Vhost))

app.use('/', mainHost)
app.use('/static', serveStatic('../test-task-frontend'))
app.use('/static', serveIndex('../test-task-frontend'))

app.listen(process.env.PORT || 80)
