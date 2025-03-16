// composables/useInView.ts
import { ref, onMounted, onBeforeUnmount } from 'vue'

interface InViewOptions {
  threshold?: number | number[]
  rootMargin?: string
  root?: Element | Document | null
}

export function useInView(options: InViewOptions = {}): {
  targetRef: Ref<HTMLElement | null>
  isInView: Ref<boolean>
} {
  const targetRef = ref<HTMLElement | null>(null)
  const isInView = ref<boolean>(false)
  let observer: IntersectionObserver | null = null

  const defaultOptions: InViewOptions = {
    threshold: 0.1,
    rootMargin: '0px',
    ...options
  }

  onMounted(() => {
    if (import.meta.client && targetRef.value) {
      observer = new IntersectionObserver(([entry]) => {
        isInView.value = entry.isIntersecting
      }, defaultOptions)
      
      observer.observe(targetRef.value)
    }
  })

  onBeforeUnmount(() => {
    if (observer && targetRef.value) {
      observer.unobserve(targetRef.value)
      observer.disconnect()
    }
  })

  return { targetRef, isInView }
}