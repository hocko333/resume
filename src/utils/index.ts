import { ThemeEnum } from '@/types'
import { getThemeStorage, setThemeStorage } from '@/utils/themeStorage'

export function initTheme() {
  const html = document.documentElement
  const cachedTheme: ThemeEnum = getThemeStorage() || ThemeEnum.dark
  if (cachedTheme === ThemeEnum.dark) {
    html.dataset.theme = ThemeEnum.dark
    setThemeStorage(ThemeEnum.dark)
  } else {
    html.dataset.theme = ThemeEnum.light
    setThemeStorage(ThemeEnum.light)
  }
}
