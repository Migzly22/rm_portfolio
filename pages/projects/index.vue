<template>
    <section id="project" class="my-5">
        <div class="text-3xl md:text-5xl font-semibold flex flex-row gap-1 text-primary items-center mt-20">
            <UIcon name="i-tabler-slash" />
            <div class="pe-3">Projects</div>
        </div>
        <Project class="py-5 md:py-10" :has-limit="false"/>
    </section>
</template>

<script setup lang="ts">
import { forceScrollToSection } from '~/utils/main';

onMounted(() => {
  if(import.meta.client) {
    forceScrollToSection('project')
  }
})
</script>

<style scoped>

</style>