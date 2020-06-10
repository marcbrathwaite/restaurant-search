import React from 'react'
import { Helmet } from 'react-helmet'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'

import { ServerStyleSheet, StyleSheetManager } from 'styled-components'

import App from '../../src/components/App'

const renderer = (html, store) => {
  const sheet = new ServerStyleSheet()

  const serverHTML = renderToString(
    <Provider store={store}>
      <StyleSheetManager sheet={sheet.instance}>
        <App />
      </StyleSheetManager>
    </Provider>
  )

  const styles = sheet.getStyleTags()
  const helmet = Helmet.renderStatic()

  html = html.replace(
    '<div id="root"></div>',
    `<div id="root">${serverHTML}</div>`
  )

  // Put title, meta and styles in head on html
  const head = helmet.title.toString() + helmet.meta.toString() + styles
  const index = html.indexOf('</head>')
  const html1 = html.slice(0, index)
  const html2 = html.slice(index)
  return html1 + head + html2
}

export default renderer
