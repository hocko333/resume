import React, { memo, useEffect } from 'react'
import ResumePage from './components/resumePage'
import globalState, { Lang } from './constants/lang'
import FloatActions from './components/floatActions'
import { FloatButton } from 'antd'
import { initTheme } from './utils'

const App: React.FC = memo(() => {
  useEffect(() => {
    initTheme()
  }, [])

  return (
    <>
      <FloatActions />
      <ResumePage lang={globalState.lang as Lang} />
      <FloatButton.BackTop />
    </>
  )
})

export default App
