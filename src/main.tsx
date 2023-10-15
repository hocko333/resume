import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { globalStyles } from './style'
import { Global } from '@emotion/react'
import { RecoilRoot } from 'recoil'
import AntdConfigProvider from './components/antdConfigProvider/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <Global styles={globalStyles} />
    <React.StrictMode>
      <RecoilRoot>
        <AntdConfigProvider>
          <App />
        </AntdConfigProvider>
      </RecoilRoot>
    </React.StrictMode>
  </>,
)
