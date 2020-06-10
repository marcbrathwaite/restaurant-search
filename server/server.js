import express from 'express'
import compression from 'compression'

import registerSeverSideRender from './middleware/registerServerSideRender'

const app = express()
app.use(compression())

registerSeverSideRender(app)

const EXPRESS_PORT = process.env.PORT || 4000
app.listen(EXPRESS_PORT, () => {
  console.log(`Server started on port ${EXPRESS_PORT}`)
})
