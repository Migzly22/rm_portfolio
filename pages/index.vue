<template>
  <div class=" h-full w-full">
    <div class=" h-full w-full ">
      <Home/>

      <section id="about" class="p-2 min-h-screen">
        <MainHeader  title="About Me" class="mt-20"/>
        <div class="py-5 md:py-10 flex flex-col gap-5">
          <div class="flex flex-col gap-4">
            <div class="text-primary-300">#Academics </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-5 ">
              <TransitionView effect="slide-left" duration="1000" :threshold="0.2">
                <div class=" p-5 min-h-[100px] md:h-full rounded-xl shadow-white-custom flex flex-col gap-1" >
                  <div class="text-lg text-white">  Cavite State University - Imus Campus </div>
                  <div class="text-primary italic text-sm"> Bachelor of Science in Information Technology </div>
                  <div class="text-gray-300 italic text-xs"> 2020 - 2024 </div>
                </div>
              </TransitionView>
            </div>
          </div>
          <div class="flex flex-col gap-4">
            <div class="text-primary-300">#Experiences </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-5 ">
                <TransitionView effect="slide-left" duration="1000" :threshold="0.2" v-for="item in experiences">
                  <div class=" p-5 min-h-[100px] md:h-full rounded-xl shadow-white-custom flex flex-col gap-1" >
                    <div class="text-lg text-white">  {{ item.company }} </div>
                    <div class="text-primary italic text-sm"> {{ item.position }} </div>
                    <div class="text-gray-300 italic text-xs"> {{ item.dates }} </div>
                  </div>
                </TransitionView>
            </div>
          </div>
          <div class="flex flex-col gap-4">
            <div class="text-primary-300">#Tech Stacks </div>
            <div class="grid grid-cols-2 md:grid-cols-7 gap-5">
              <TransitionView effect="slide-left" duration="1000" :threshold="0.2" v-for="item in techStacks">
                <div class=" p-5 h-[100px] md:h-full rounded-xl shadow-white-custom flex justify-center items-center" >
                  <UIcon :name="item" class="text-primary w-[50px] h-[50px] md:w-[50px] md:h-[50px]"/>
                </div>
              </TransitionView>
            </div>
          </div>
        </div>




       

        
      </section >
      <section id="projects" class=" p-2 min-h-screen">
        <MainHeader  title="Projects"  class="mt-20">
          <div class="text-lg px-0 md:px-3">
            <UButton label="View More" variant="link" color="primary" class="text-sm md:text-lg text-primary" @click="router.push('/projects')"/>
          </div>
        </MainHeader>
        <Project class="py-5 md:py-10"/>
      </section>
    </div>

  </div>
</template>

<script lang="ts" setup>
import { footerListHome, techStacks, experiences } from '~/commons/main';
import { redirect } from '~/utils/main';

const router = useRouter()


interface FooterItem {
  count: number
  name: string
  displayCount?: number
}

interface AnimatedItem extends FooterItem {
  displayCount: number
}

const animatedItems = ref<AnimatedItem[]>(footerListHome.map(item => ({
  ...item,
  displayCount: 0
})))



</script>
<style scope>
    .shadow-white-custom {
      box-shadow: 0 4px 6px rgba(199, 120, 221, 0.3);/* white shadow with some opacity */
    }
    
</style>