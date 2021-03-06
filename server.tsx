import { renderToString } from 'react-dom/server'
import { Global } from '@emotion/react'
import { writeFileSync } from 'fs'
import { join } from 'path'

import { App } from './src/components/App'
import { globalStyles } from './src/style'
import globalState from './src/globalState'

writeFileSync(join(process.cwd(), 'public', 'index.html'), render(), 'utf8')

function render() {
  const responseString = renderToString(
    <html lang="zh-cmn-Hans">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>程宽的简历</title>
      </head>
      <style>
        {'.print-btn { display: block;}'}
      </style>
      <style media="print">{'.print-btn { display: none;}'}</style>
      <body>
        <div id="root">
          <Global styles={globalStyles} />
          <App lang={globalState.lang} />
        </div>
      </body>
    </html>,
  )

  return responseString
}
