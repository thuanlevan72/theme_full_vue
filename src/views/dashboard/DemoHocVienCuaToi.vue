<template>
    <div class="container-my-student">
        <sdPageHeader title="Học viên của tôi" class="ninjadash-page-header-main" :routes="pageRoutes">
            <template #breadcrumb>
                <a :href="pageRoutes[0].path">{{ pageRoutes[0].breadcrumbName }}</a>
                <h1>Học viên của tôi</h1>
            </template>
        </sdPageHeader>
        <Main>
            <a-card>
                <h2>{{ currentDate }}</h2>
                <p>Sáng ({{ numberOfLessons }} học viên)</p>
                <p>Chiều ({{ numberOfStudents }} học viên) </p>
                <p>Tối ({{ numberOfMaterials }} học viên) </p>
                <p>Không có lịch học {{ userName }} lessons</p>
            </a-card>
        </Main>
    </div>
</template>
  
<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { Main } from '../styled';
import { useRouter } from 'vue-router';

const currentDate = ref('');
const router = useRouter();

const userName = ref('John Doe');
const numberOfStudents = ref(0);

const numberOfMaterials = ref(0);
const numberOfLessons = ref(0);

const updateData = () => {
    const now = new Date();
    currentDate.value = now.toLocaleDateString();
    numberOfStudents.value = getRandomNumber(100);
    numberOfMaterials.value = getRandomNumber(30);
    numberOfLessons.value = getRandomNumber(15);
};

const getRandomNumber = (max) => {
    return Math.floor(Math.random() * (max + 1));
};

onMounted(() => {
    updateData();
});

watch(currentDate, () => {

    updateData();
});

const pageRoutes = [
    {
        path: '/',
        breadcrumbName: 'Home',
    },
    {
        path: '/my-students',
        breadcrumbName: 'Học viên của tôi',
    },
];
</script>
  
<style scoped>
.container-my-student{
    font-family: Arial, Helvetica, sans-serif;
}
.ant-card {
    border-radius: 0.5rem;
}

a-card h3 {
    font: bold;
}

.fwqPvH.ninjadash-page-header-main .ant-page-header-heading .ant-page-header-heading-title {
    font-size: 1.5rem;
}
</style>
  