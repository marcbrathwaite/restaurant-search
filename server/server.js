// import fs from 'fs'
// import path from 'path'

import express from 'express'
// import React from 'react'
// import { renderToString } from 'react-dom/server'
// import { Provider } from 'react-redux'
// import store from './helpers/createStore'
// import App from '../src/App'

import registerSeverSideRender from './middleware/registerServerSideRender'

const app = express()

registerSeverSideRender(app)

// const publicPath = path.join(__dirname, '../build')

// app.get('/', (req, res) => {
//   fs.readFile(path.join(publicPath, 'index.html'), 'utf8', (err, data) => {
//     if (err) {
//       return res.status.send('An error occurred')
//     }

//     return res.send(
//       data.replace(
//         '<div id="root"></div>',
//         `<div id="root">${renderToString(
//           <Provider store={store}>
//             <App />
//           </Provider>
//         )}</div>`
//       )
//     )
//   })
// })

// app.use(express.static(publicPath))
const EXPRESS_PORT = process.env.PORT || 4000
app.listen(EXPRESS_PORT, () => {
  console.log(`Server started on port ${EXPRESS_PORT}`)
})
