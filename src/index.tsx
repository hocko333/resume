import { Global } from '@emotion/react'
import { StrictMode } from 'react'
import ReactDom from 'react-dom'

import { App } from './components/App'
import globalState, { Lang } from './globalState'
import { globalStyles } from './style'

const $root = document.getElementById('root') as HTMLElement

export const render = (Component: any, lang: Lang) => {
  const renderMethod = module.hot ? ReactDom.render : ReactDom.hydrate
  renderMethod(
    <>
      <Global styles={globalStyles} />
      <StrictMode>
        <Component lang={lang} />
      </StrictMode>
    </>,
    $root,
  )
}

render(App, globalState.lang as Lang)

if (process.env.NODE_ENV === 'development') {
  if (module.hot) {
    // Hot Module Replacement API
    module.hot.accept('./components/App', () => {
      render(App, globalState.lang as Lang)
    })
  }
}
