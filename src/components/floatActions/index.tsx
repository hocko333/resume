import React, { useCallback } from 'react'
import { FloatActionsWrapper } from './style'
import { Button, Divider, Space, message } from 'antd'
import { FaMoon, FaShare } from 'react-icons/fa'
import { MdWbSunny } from 'react-icons/md'
import { BsFillCloudDownloadFill } from 'react-icons/bs'
import { useTheme } from '@/hooks'
import { ThemeEnum } from '@/types'
import copy from 'copy-to-clipboard'

const FloatActions: React.FC = () => {
  const { isDark, setTheme } = useTheme()

  const onThemeChange = useCallback(() => {
    setTheme(isDark ? ThemeEnum.light : ThemeEnum.dark)
  }, [isDark, setTheme])

  const handlePrint = useCallback(() => {
    window.print()
  }, [])

  const onShare = useCallback(() => {
    copy(window.location.href)
    message.success('已将当前链接复制到剪切板，快去分享吧')
  }, [])

  return (
    <FloatActionsWrapper>
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
        <div className='hide-on-mobile' style={{ padding: 4 }}>
          <Button
            type="text"
            icon={<BsFillCloudDownloadFill />}
            title="下载/打印简历"
            onClick={handlePrint}
          />
        </div>
        <div style={{ padding: 4 }}>
          <Button
            type="text"
            icon={<FaShare />}
            title="分享"
            onClick={onShare}
          />
        </div>
      </Space>
    </FloatActionsWrapper>
  )
}

export default FloatActions
