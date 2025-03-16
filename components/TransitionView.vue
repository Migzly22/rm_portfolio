<!-- components/TransitionView.vue -->
<template>
    <div
      ref="elementRef"
      class="transition-all"
      :class="[
        isInView ? transitionClasses.visible : transitionClasses.hidden,
        `duration-${duration}`,
        `delay-${delay}`
      ]"
    >
      <slot />
    </div>
  </template>
  
  <script setup lang="ts">
  import { useInView } from '~/composables/useInView'
  import { computed } from 'vue'
  
  type EffectType = 'fade' | 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right' | 'scale'
  
  interface TransitionClasses {
    visible: string
    hidden: string
  }
  
  interface EffectMap {
    [key: string]: TransitionClasses
  }
  
  const props = defineProps({
    effect: {
      type: String as () => EffectType,
      default: 'fade',
      validator: (val: string) => ['fade', 'slide-up', 'slide-down', 'slide-left', 'slide-right', 'scale'].includes(val)
    },
    duration: {
      type: String,
      default: '700'
    },
    delay: {
      type: String,
      default: '0'
    },
    threshold: {
      type: Number,
      default: 0.1
    },
    rootMargin: {
      type: String,
      default: '0px'
    }
  })
  
  // Initialize the intersection observer
  const { targetRef: elementRef, isInView } = useInView({
    threshold: props.threshold,
    rootMargin: props.rootMargin
  })
  
  // Define transition classes based on the effect
  const transitionClasses = computed<TransitionClasses>(() => {
    const effects: EffectMap = {
      'fade': {
        visible: 'opacity-100',
        hidden: 'opacity-0'
      },
      'slide-up': {
        visible: 'opacity-100 translate-y-0',
        hidden: 'opacity-0 translate-y-10'
      },
      'slide-down': {
        visible: 'opacity-100 translate-y-0',
        hidden: 'opacity-0 -translate-y-10'
      },
      'slide-left': {
        visible: 'opacity-100 translate-x-0',
        hidden: 'opacity-0 translate-x-10'
      },
      'slide-right': {
        visible: 'opacity-100 translate-x-0',
        hidden: 'opacity-0 -translate-x-10'
      },
      'scale': {
        visible: 'opacity-100 scale-100',
        hidden: 'opacity-0 scale-95'
      }
    }
    
    return effects[props.effect]
  })
  </script>