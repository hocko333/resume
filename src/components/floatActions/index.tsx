import React, { useCallback } from 'react'
import { HiddenOnMobileAndPrint } from './style'
import { Button, Divider, Space } from 'antd'
import { FaMoon } from 'react-icons/fa'
import { MdWbSunny } from 'react-icons/md'
import { BsFillCloudDownloadFill } from 'react-icons/bs'
import { useTheme } from '@/hooks'
import { ThemeEnum } from '@/types'

const FloatActions: React.FC = () => {
  const { isDark, setTheme } = useTheme()

  const onThemeChange = useCallback(() => {
    setTheme(isDark ? ThemeEnum.light : ThemeEnum.dark)
  }, [isDark, setTheme])

  const handlePrint = useCallback(() => {
    window.print()
  }, [])

  return (
    <HiddenOnMobileAndPrint>
      <Space
        split={
          <Divider
            type="vertical"
            style={{ margin: 0, height: 20, borderColor: '#ddd' }}
          />
        }
        size={0}
      >
        <div style={{ padding: 4 }}>
          <Button
            type="text"
            icon={isDark ? <MdWbSunny /> : <FaMoon />}
            title="切换主题"
            onClick={onThemeChange}
          />
        </div>
        <div style={{ padding: 4 }}>
          <Button
            type="text"
            icon={<BsFillCloudDownloadFill />}
            title="下载/打印简历"
            onClick={handlePrint}
          />
        </div>
      </Space>
    </HiddenOnMobileAndPrint>
  )
}

export default FloatActions
