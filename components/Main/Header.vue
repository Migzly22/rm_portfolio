<template>
    <div class="text-3xl md:text-5xl font-semibold flex flex-row gap-1 text-primary items-center">
        <UIcon name="i-tabler-caret-right-filled" />
        <div class="pe-3">{{ title }}</div>
        <div class="border-t border-primary flex-1"></div>
        <slot/>
    </div>
</template>

<script setup lang="ts">

const props = defineProps({
    title : { type : String, required : true},
})

</script>

<style scoped>

</style>