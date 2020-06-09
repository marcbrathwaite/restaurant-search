import express from 'express'

import registerSeverSideRender from './middleware/registerServerSideRender'

const app = express()

registerSeverSideRender(app)

const EXPRESS_PORT = process.env.PORT || 4000
app.listen(EXPRESS_PORT, () => {
  console.log(`Server started on port ${EXPRESS_PORT}`)
})
