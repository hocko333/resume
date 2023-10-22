import React, { useCallback } from 'react'
import { FloatActionsWrapper } from './style'
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
    <FloatActionsWrapper>
      <Space
        split={
          <Divider
            type="vertical"
            className='hide-on-mobile'
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
        <div className='hide-on-mobile' style={{ padding: 4 }}>
          <Button
            type="text"
            icon={<BsFillCloudDownloadFill />}
            title="下载/打印简历"
            onClick={handlePrint}
          />
        </div>
      </Space>
    </FloatActionsWrapper>
  )
}

export default FloatActions
