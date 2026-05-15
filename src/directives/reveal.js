export const vReveal = {
  mounted(el) {
    el.classList.add('reveal-element')

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('revealed')
        }
      },
      {
        threshold: 0.15,
      },
    )

    observer.observe(el)
  },
}