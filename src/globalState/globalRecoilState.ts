import { ThemeEnum } from '@/types'
import { getThemeStorage } from '@/utils/themeStorage'
import { atom } from 'recoil'

export const globalThemeState = atom<ThemeEnum>({
  key: 'globalThemeState',
  default: getThemeStorage() || ThemeEnum.dark,
})
