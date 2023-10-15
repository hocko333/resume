import { ThemeEnum } from '@/types'

const THEME_KEY = 'APP_THEME'

/**
 * 获取存储的主题
 */
export function getThemeStorage(): ThemeEnum | null {
  return window.localStorage.getItem(THEME_KEY) as ThemeEnum | null
}

/**
 * 存储主题
 */
export function setThemeStorage(value: ThemeEnum): void {
  window.localStorage.setItem(THEME_KEY, value)
}

/**
 * 移除存储的主题
 */
export function removeThemeStorage(): void {
  window.localStorage.removeItem(THEME_KEY)
}
