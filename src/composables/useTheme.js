import {
  onMounted,
  ref,
  watch,
} from 'vue'

const theme = ref('dark')

export function useTheme() {
  const applyTheme = (value) => {
    document.documentElement.setAttribute(
      'data-theme',
      value,
    )
  }

  onMounted(() => {
    const storedTheme =
      localStorage.getItem('novacare-theme')

    if (storedTheme) {
      theme.value = storedTheme
    }

    applyTheme(theme.value)
  })

  watch(theme, (value) => {
    localStorage.setItem(
      'novacare-theme',
      value,
    )

    applyTheme(value)
  })

  const toggleTheme = () => {
    theme.value =
      theme.value === 'dark'
        ? 'light'
        : 'dark'
  }

  return {
    theme,
    toggleTheme,
  }
}