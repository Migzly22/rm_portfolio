<template>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <TransitionView effect="slide-left" duration="1000" :threshold="0.2" class="w-full h-full" v-for="item in (hasLimit ? projects.slice(0,3) : projects)">
            <div class="border border-secondary flex flex-col h-full cursor-pointer" @click="redirect(item.link)">
                <div class="w-full h-[200px] border-b border-secondary" v-if="item.img.trim() !== ''">
                {{ item.img }}
                </div>
                <div class="text-md  border-b border-secondary text-primary p-2 font-semibold">
                {{ item.name }}
                </div>
                <div class="text-md  border-b border-secondary text-primary p-2 flex flex-wrap gap-2">
                <UBadge :label="techStack" v-for="techStack in item.techStack"/>
                </div>
                <div class="text-sm text-gray-300 p-2"> {{ item.description }}</div>
                <div class="text-xs  p-2 text-center text-gray-400 flex-1 flex flex-col items-center justify-end"> 
                <UButton label="View Codebase" class="text-xs" variant="link"/>
                </div>
            </div>
        </TransitionView>
    </div>
</template>

<script setup lang="ts">
import { redirect } from '~/utils/main';

const props = defineProps({
  hasLimit : {type : Boolean ,default :true}
})
const projects = [
  {
    img: '',
    link: 'https://github.com/Migzly22/Payroll_System',
    name: 'OCHADO PAYROLL SYSTEM',
    techStack: ['PHP', 'Javascript', 'CSS', 'MySQL'],
    description: 'Aims to streamline payroll process through the automation of the salary computation and attendance monitoring.'
  },
  {
    img: '',
    link: 'https://github.com/Migzly22/PROJECTC',
    name: 'RESERVATION SYSTEM',
    techStack: ['PHP', 'Javascript', 'CSS', 'MySQL'],
    description: 'Aims to streamline the booking process by automating the reservation. It will feature a virtual panoramic view of the establishment, enabling customers to explore the venues before committing to a reservation.'
  },
  {
    img: '',
    link: 'https://github.com/Migzly22/BarangayManagementSystem',
    name: 'BARANGAY MANAGEMENT SYSTEM',
    techStack: ['React Js', 'Javascript', 'CSS', 'MySQL', 'Springboot Java', 'Java'],
    description: 'Aims to simplify the management of essential tasks such as issuance of different barangay documents, while also maintaining the records of residents and transactions.'
  },
  {
    img: '',
    link: 'https://github.com/Migzly22/PH-RPMB',
    name: 'PH-RPMB',
    techStack: ['Javascript', 'Node Js'],
    description: 'An API used to provide data for the Philippine geographic divisions, including regions, provinces, municipalities, and barangays.'
  },
  {
    img: '',
    link: 'https://github.com/Migzly22/Simpluity',
    name: 'Simpluity',
    techStack: ['PHP'],
    description: 'Simple PHP utility to streamline the codes for printing, email notifications, and SQL queries.'
  },
  {
    img: "",
    link: "https://github.com/Migzly22/Loan-Management_Project",
    name: "Loan Management Project",
    techStack: ["Java", "JDBC"],
    description: "A simple CRUD application for managing loan records and payments. This project allows users to create, read, update, and delete loan details, while also tracking payments and calculating remaining loan balances."
  },
  {
    img: "",
    link: "https://github.com/Migzly22/JB-S-KOREAN-BLINDS.git",
    name: "JB-S-KOREAN-BLINDS",
    techStack: ["HTML", "CSS", "JavaScript"],
    description: "A simple web application UI that showcases various products from JB Korean Blinds. The app displays product details in an interactive, user-friendly layout, allowing users to browse through different blind options."
  },
  {
    img: "",
    link: "https://github.com/Migzly22/PythonLab3",
    name: "PythonLab3",
    techStack: ["Python", "Flask"],
    description: "A simple sample of a chatbot AI built using Python. This project utilizes Flask for the backend, along with libraries like numpy, torch, and nltk to process natural language and provide chatbot functionality."
  },
  {
    img: "",
    link: "https://github.com/Migzly22/Simple-Facerecognition-pthon",
    name: "Simple Face Recognition",
    techStack: ["Python"],
    description: "A simple face recognition application built using Python. This project leverages CustomTkinter for the GUI and the face_recognition library to perform facial recognition and identification."
  }

];


</script>

<style scoped>

</style>