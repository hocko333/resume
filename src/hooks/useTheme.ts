import { globalThemeState } from '@/globalState/globalRecoilState'
import { ThemeEnum } from '@/types'
import { setThemeStorage } from '@/utils/themeStorage'
import { useCallback, useMemo } from 'react'
import { useRecoilState } from 'recoil'

function useTheme() {
  const [themeState, setThemeState] = useRecoilState(globalThemeState)
  const isDark = useMemo(() => themeState === ThemeEnum.dark, [themeState])
  const setTheme = useCallback((value: ThemeEnum) => {
    setThemeStorage(value)
    document.documentElement.dataset.theme = value
    setThemeState(value)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    isDark,
    theme: themeState,
    setTheme,
  }
}

export default useTheme
