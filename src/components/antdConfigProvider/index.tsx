import React, { useMemo } from 'react'
import zhCN from 'antd/locale/zh_CN'
import { ConfigProvider, theme } from 'antd'
import { useTheme } from '@/hooks'

const AntdConfigProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { isDark } = useTheme()
  const algorithm = useMemo(
    () => (isDark ? theme.darkAlgorithm : theme.defaultAlgorithm),
    [isDark],
  )

  return <ConfigProvider locale={zhCN} theme={{ algorithm }}>{children}</ConfigProvider>
}

export default AntdConfigProvider
