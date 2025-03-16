<template>
  <div class="w-screen h-screen bg-gray-900 overflow-auto relative">
    <div class="fixed top-0 w-screen z-[100]">
      <UContainer class="bg-gray-900">
        <div class="text-white flex flex-row justify-between items-center p-3">
          <div class="text-3xl "> RMigz <span class="text-primary">.</span> </div>
          <div class=" hidden md:flex flex-row gap-3">
            <div v-for="items in menuList" @click="goTo(items.path, items.section)"
              :class="[ 'cursor-pointer', isActive(items)?'text-white' : 'text-primary border-b border-primary' ]"
            > 
              {{  items.name }}
            </div>
          </div>
          <UButton icon="i-lucide-panel-right-open" variant="ghost" class="block md:hidden" @click="openMenu = true"/>
        </div> 
      </UContainer>
    </div>
    <UContainer class="h-full">
      <div class="w-full flex flex-col  h-full">
        
        <slot />
      </div>


    </UContainer>

    <USlideover v-model:open="openMenu">
      <template #content>
        <div class="w-screen h-screen bg-gray-900 overflow-auto">
          <div class="text-white py-5 flex flex-col gap-5 justify-between items-center h-full">
            <div class="text-3xl "> RMigz <span class="text-primary">.</span> </div>
            <div class=" flex flex-col gap-3 flex-1 justify-center">
              <div v-for="items in menuList" @click="mobileRedirect(items)"
                :class="[  'cursor-pointer text-2xl text-center ', isActive(items) ?'text-white' : 'text-primary border-b border-primary' ]"
              > 
                {{  items.name }}
              </div>
            </div>
            <UButton icon="i-lucide-panel-left-open" variant="ghost" class="justify-center items-center" @click="openMenu = false" label="Collapse" />  
          </div>
        </div>
      </template>
    </USlideover>
  </div>
</template>

<script lang="ts" setup>
import { forceScrollToSection } from '~/utils/main'


const route = useRoute()
const router = useRouter()
const mobileRedirect = (items: any) =>{
  router.push(items.path)
  goTo(items.path, items.section)
  openMenu.value = false
}


const menuList = ref([
  {
    name : "Home",
    path : "/#",
    section : 'home'
  },
  {
    name : "About Me",
    path : "/#about",
    section : 'about'
  },
  {
    name : "Projects",
    path : "/#projects",
    section : 'projects'
  },
])

watch(route,(newData) =>{

  if(newData.fullPath === '/projects') {
    console.log(newData)
    const data = menuList.value.filter((item) => item.name !== "Projects")
    data.push({
      name : "Projects",
      path : "/projects",
      section : 'projects'
    },)
    menuList.value = data
  }else {
    const data = menuList.value.filter((item) => item.name !== "Projects")
    data.push({
      name : "Projects",
      path : "/#projects",
      section : 'projects'
    },)
    menuList.value = data
  }
},{immediate: true, deep : true} )

const openMenu = ref(false)
const isActive = (items: any) =>{
  if(items.path === '/#') {
    if(route.fullPath === '/') return false
  }
  return items.path !== route.fullPath 
}


const goTo = (path : string, name : string) => {
  navigateTo(path).then(() => {
    forceScrollToSection(name)
  })
}
</script>

<style>

</style>