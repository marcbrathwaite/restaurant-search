import fs from 'fs'
import path from 'path'

import express from 'express'

import store from '../helpers/createStore'
import renderer from '../helpers/renderer'

const registerSeverSideRender = (app) => {
  const publicPath = path.join(__dirname, '../../build')

  app.get('/', (req, res) => {
    fs.readFile(path.join(publicPath, 'index.html'), 'utf8', (err, data) => {
      if (err) {
        return res.status.send('An error occurred')
      }

      return res.send(
        renderer(data, store)
      )
    })
  })

  app.use(express.static(publicPath))
}

export default registerSeverSideRender
