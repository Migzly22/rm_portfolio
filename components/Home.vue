<template>
    <section id="home" class="min-h-screen flex flex-col justify-center py-20 md:py-0">
        <TransitionView effect="slide-left" duration="1000" :threshold="0.2" >
            <div class="flex flex-col md:flex-row gap-4">
                <div class="flex-1 order-2 md:order-1 flex flex-col gap-5 md:gap-8 text-center md:text-start">   
                    <div class="text-white text-4xl md:text-6xl">
                        <span class="text-lg">Full Stack Developer</span> <br/>
                        Hello I'm <br/>
                        <span class="text-primary">Rolly Migriño</span>
                    </div>
                    <div class="text-gray-400 text-xs md:text-sm"> {{ subheadingHome }} </div>
                    <div class="flex flex-col md:flex-row gap-3 items-center justify-center md:justify-start">
                        <UButton label="DOWNLOAD CV" variant="outline" class="rounded-full p-3" />
                        <div class="h-fit flex gap-3">
                            <UButton :icon="item.icons" color="primary" variant="outline" class="rounded-full " v-for="item in buttonListHome" :key="item.icons" @click="redirect(item.link)"/>
                        </div>
                    </div>
                </div>
                <div class="flex-1 order-1 md:order-2 flex justify-center items-center">
                    <div class="relative h-[300px]  w-[300px] ">
                        <img :src="me" alt="" class="w-full h-full">
                        <div class=" border-t-4 border-primary animate-flicker "> </div>
                    </div>
                </div>
            </div>
            <div class="hidden md:grid grid-cols-1 md:grid-cols-4 gap-10 mt-20  ">
                <div class="flex flex-row gap-4 items-center text-white" v-for="item in animatedItems">
                    <div class="text-3xl md:text-6xl md:flex-1 md:text-end text-primary">{{ item.displayCount.toFixed(0) }}</div>
                    <div class="text-sm md:text-lg flex-1">{{ item.name }}</div>
                </div>
            </div>
        </TransitionView> 
    </section>
</template>

<script lang="ts" setup>
    import { buttonListHome, footerListHome, subheadingHome } from '~/commons/main';
    import { redirect } from '~/utils/main';
    import me from '~/assets/img/me.png'

    // Create animated versions of each item
    const animatedItems = ref(footerListHome.map(item => ({
        ...item,
        displayCount: 0
    })));

    onMounted(() => {
        // Stagger the animations slightly
        animatedItems.value.forEach((item, index) => {
            setTimeout(() => {
            startCountingAnimation(item);
            }, index * 200);
        });
    });

    // Animation function
    const startCountingAnimation = (item : any) => {
        const duration = 4500; // animation duration in ms
        const startTime = Date.now();
        const startValue = 0;
        const endValue = item.count;
        
        const updateCount = () => {
            const currentTime = Date.now();
            const elapsedTime = currentTime - startTime;
            
            if (elapsedTime < duration) {
                // Use easeOutQuart for a nice deceleration
                const progress = 1 - Math.pow(1 - elapsedTime / duration, 4);
                item.displayCount = startValue + (endValue - startValue) * progress;
                requestAnimationFrame(updateCount);
            } else {
                item.displayCount = endValue;
            }
        };
        
        requestAnimationFrame(updateCount);
    };
</script>
<style scoped>
@keyframes flicker {
    0% { opacity: 1; }
    25% { opacity: 0.6; }
    50% { opacity: 0.3; }
    75% { opacity: 0.8; }
    100% { opacity: 1; }
}

.animate-flicker {
    animation: flicker 1.5s infinite;
}
</style>