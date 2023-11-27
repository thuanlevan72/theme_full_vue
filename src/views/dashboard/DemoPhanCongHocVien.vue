<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="tsx">
import { computed, onMounted, reactive, watchEffect } from 'vue';
import { Main } from '../styled';
import { useStore } from 'vuex';
import { ref } from 'vue';
import { DataTableStyleWrap } from '@/components/table/Style';
import ModalDelete from './ModalTroGiangPhanCongHocVien/ModalDelete.vue'
import ModalEditPhanCongHocVien from './ModalTroGiangPhanCongHocVien/ModalEditPhanCongHocVien.vue'
import ModalCreatePhanCongHocVien from './ModalTroGiangPhanCongHocVien/ModalCreatePhanCongHocVien.vue'
import { ToTopOutlined } from '@ant-design/icons-vue';
import { faJ } from '@fortawesome/free-solid-svg-icons';

interface KhoaHoc {
    id: number;
    name: string;
}
const khoaHocs = ref<KhoaHoc[]>([
    { id: 1, name: 'Tất cả' },
    { id: 2, name: 'Fullstack .NET' },
    { id: 3, name: 'Fullstack Java' },
]);
const selectedKhoaHoc = ref<number | null>(null);
interface LopHoc {
    id: number;
    name: string;
}
const lopHocs = ref<LopHoc[]>([
    { id: 1, name: 'Tất cả' },
    { id: 2, name: '.NET 01' },
    { id: 3, name: '.NET 02' },
    { id: 4, name: 'Java 01' },
    { id: 5, name: 'Java 02' },
]);
const selectedLopHoc = ref<number | null>(null);
interface TrangThaiHocVien {
    id: number;
    name: string;
}
const trangThaiHocViens = ref<TrangThaiHocVien[]>([
    { id: 1, name: 'Tất cả' },
    { id: 2, name: 'Mới đăng kí' },
    { id: 3, name: 'Đang học chính' },
    { id: 4, name: 'Học thử xong' },
    { id: 5, name: 'Đang học thử' },
]);
const selectedTrangThaiHocVien = ref<number | null>(null);
interface CaHoc {
    id: number;
    name: string;
}
const caHocs = ref<CaHoc[]>([
    { id: 1, name: 'Tất cả' },
    { id: 2, name: 'Sáng' },
    { id: 3, name: 'Chiều' },
    { id: 4, name: 'Tối' },
]);
const selectedCaHoc = ref<number | null>(null);
interface TinhTrangBaiTap {
    id: number;
    name: string;
}
const { state, dispatch } = useStore();
onMounted(() => dispatch('tableReadData'));

const tableHeader = [
    {
        title: "Thao tác",
        key: "thaoTac",
    },
    {
        title: "Học Viên",
        dataIndex: "hocVien",
        key: "hocVien",
    },
    {
        title: "Khóa học",
        dataIndex: "khoaHoc",
        key: "khoaHoc",
    },
    {
        title: "Trung Tâm",
        dataIndex: "trungTam",
        key: "trungTam",
    },
    {
        title: "Ngày đăng ký",
        dataIndex: "ngayDangKy",
        key: "ngayDangKy",
    },
    {
        title: "Sale",
        dataIndex: "sale",
        key: "sale",
    },
    {
        title: "Ca học",
        dataIndex: "caHoc",
        key: "caHoc",
    },
]

const courseData = [
    {
        id: 1,
        trungTamId: 1,
        tenKhoa: "Fullstack .NET Web Developer",
        sale: 111,
        ngayDangKy: "Admin",
        caHoc: [2, 3, 4, 5],
        khoaHoc: "FN",
        trungTam: "Lotus Academy",
        hocVien: "Trướng nội vô phong phàm tự lập.",
        email: "nguyenvanthanh@gmail.com",
        avataImg: "../../src/assets/img/support-img.png",
        hienThi: false
    },
    {
        id: 2,
        trungTamId: 3,
        tenKhoa: "Fullstack Java Web Developer",
        ngayDangKy: "Admin",
        sale: 111,
        caHoc: [12, 3, 4, 5],
        khoaHoc: "FJ",
        trungTam: "Lotus Academy",
        hocVien: "Hưng trung bất vũ thủy trường lưu.",
        email: "nguyenvanthanh@gmail.com",
        avataImg: "../../src/assets/img/support-img.png",
        hienThi: false
    },
    {
        id: 3,
        trungTamId: 2,
        tenKhoa: "Fresher Tester",
        ngayDangKy: "Admin",
        sale: 111,
        caHoc: [2, 3, 14, 5],
        khoaHoc: "STF",
        trungTam: "Mỹ Đình",
        hocVien: "Nguyễn Việt Anh",
        email: "nguyenvanthanh@gmail.com",
        avataImg: "../../src/assets/img/support-img.png",
        hienThi: false
    },
    {
        id: 4,
        trungTamId: 2,
        tenKhoa: "ISTQB Foundation",
        ngayDangKy: "Admin",
        sale: 111,
        caHoc: [2, 13, 4, 5],
        khoaHoc: "Found",
        trungTam: "Đặng Tiến Đông",
        hocVien: "Đặng Duy Hùng",
        email: "nguyenvanthanh@gmail.com",
        avataImg: "../../src/assets/img/support-img.png",
        hienThi: false
    },
    {
        id: 5,
        trungTamId: 1,
        tenKhoa: "ISTQB Advanced Module Test Manager",
        ngayDangKy: "Admin",
        sale: 111,
        caHoc: [2, 3, 4, 15],
        khoaHoc: "TM",
        trungTam: "Lotus Academy",
        hocVien: "Nguyễn Văn Thành",
        email: "nguyenvanthanh@gmail.com",
        avataImg: "../../src/assets/img/support-img.png",
        hienThi: false
    },
    {
        id: 6,
        trungTamId: 1,
        tenKhoa: "Test Automation Developer",
        ngayDangKy: "Admin",
        sale: 111,
        caHoc: [21, 3, 4, 5],
        khoaHoc: "TAD",
        trungTam: "Lotus Academy",
        hocVien: "Nguyễn Văn Bá",
        email: "nguyenvanthanh@gmail.com",
        avataImg: "../../src/assets/img/support-img.png",
        hienThi: false
    },
    {
        id: 7,
        trungTamId: 1,
        tenKhoa: "Lập trình C++",
        ngayDangKy: "Admin",
        sale: 111,
        caHoc: [2, 31, 4, 5],
        khoaHoc: "D_CPP",
        trungTam: "Lotus Academy",
        hocVien: "Lê Đức Thọ",
        email: "nguyenvanthanh@gmail.com",
        avataImg: "../../src/assets/img/support-img.png",
        hienThi: false
    },
    {
        id: 8,
        trungTamId: 1,
        tenKhoa: "Frontend Developer",
        ngayDangKy: "Admin",
        sale: 111,
        caHoc: [2, 3, 41, 5],
        khoaHoc: "FD",
        trungTam: "Lotus Academy",
        hocVien: "Cao Văn Nam",
        email: "nguyenvanthanh@gmail.com",
        avataImg: "../../src/assets/img/support-img.png",
        hienThi: false
    },
    {
        id: 9,
        trungTamId: 1,
        tenKhoa: "Lập trình C# Winform",
        ngayDangKy: "Admin",
        sale: 111,
        caHoc: [2, 3, 4, 51],
        khoaHoc: "CWF",
        trungTam: "Đặng Tiến Đông",
        hocVien: "Nguyễn Văn Thái",
        email: "nguyenvanthanh@gmail.com",
        avataImg: "../../src/assets/img/support-img.png",
        hienThi: false
    },
]
const courseImageData = [
    {
        id: 1,
        avatarUrl: "https://fsoft-academy.edu.vn/wp-content/uploads/2021/08/FS.NET_-1024x540.png",
        illustrationUrl: "https://www.edureka.co/blog/wp-content/uploads/2018/11/Full-Stack-Developer-RoadMap-How-To-Become-A-Full-Stack-Developer-Edureka.png",
    },
    {
        id: 2,
        avatarUrl: "https://fsoft-academy.edu.vn/wp-content/uploads/2021/08/FS.Java_-1024x540.png",
        illustrationUrl: "https://www.edureka.co/blog/wp-content/uploads/2018/11/Full-Stack-Developer-RoadMap-How-To-Become-A-Full-Stack-Developer-Edureka.png",
    },
    {
        id: 3,
        avatarUrl: "https://d3hi6wehcrq5by.cloudfront.net/itnavi-blog/2020/04/Tester-l%C3%A0-g%C3%AC-4.jpg",
        illustrationUrl: "https://www.edureka.co/blog/wp-content/uploads/2018/11/Full-Stack-Developer-RoadMap-How-To-Become-A-Full-Stack-Developer-Edureka.png",
    },
    {
        id: 4,
        avatarUrl: "https://softwaretester.careers/wp-content/uploads/2018/08/istqb-foundation-exam.png",
        illustrationUrl: "https://www.edureka.co/blog/wp-content/uploads/2018/11/Full-Stack-Developer-RoadMap-How-To-Become-A-Full-Stack-Developer-Edureka.png",
    },
    {
        id: 5,
        avatarUrl: "https://www.softwaretestinghelp.com/wp-content/qa/uploads/2020/04/ISTQB-Test-Manager-Certification-Series.png",
        illustrationUrl: "https://www.edureka.co/blog/wp-content/uploads/2018/11/Full-Stack-Developer-RoadMap-How-To-Become-A-Full-Stack-Developer-Edureka.png",
    },
    {
        id: 6,
        avatarUrl: "https://th.bing.com/th/id/OIP.RyCn3j60F_txTiYhRgLxjQHaDO?w=1024&h=447&rs=1&pid=ImgDetMain",
        illustrationUrl: "https://www.edureka.co/blog/wp-content/uploads/2018/11/Full-Stack-Developer-RoadMap-How-To-Become-A-Full-Stack-Developer-Edureka.png",
    },
    {
        id: 7,
        avatarUrl: "https://28tech.com.vn/assets/img/khoa-hoc/c-plus-plus.png",
        illustrationUrl: "https://www.edureka.co/blog/wp-content/uploads/2018/11/Full-Stack-Developer-RoadMap-How-To-Become-A-Full-Stack-Developer-Edureka.png",
    },
    {
        id: 8,
        avatarUrl: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220416200936/Top-10-Front-End-Developer-Skills-That-You-Need-in-2022.png",
        illustrationUrl: "https://www.edureka.co/blog/wp-content/uploads/2018/11/Full-Stack-Developer-RoadMap-How-To-Become-A-Full-Stack-Developer-Edureka.png",
    },
    {
        id: 9,
        avatarUrl: "https://i.ytimg.com/vi/Q2YhTNS-VkA/maxresdefault.jpg",
        illustrationUrl: "https://www.edureka.co/blog/wp-content/uploads/2018/11/Full-Stack-Developer-RoadMap-How-To-Become-A-Full-Stack-Developer-Edureka.png",
    },
];
const centerData = [
    {
        id: 1,
        tenTrungTam: 'Lotus Academy',
        value: 'center1',
    },
    {
        id: 2,
        tenTrungTam: 'Đặng Tiến Đông',
        value: 'center2',
    },
    {
        id: 3,
        tenTrungTam: 'Mỹ Đình',
        value: 'center3'
    }
]


const totalItem = computed(() => {
    return courseData.length;
})
const displayedData = computed(() => {
    const start = (currentPageCourse.value - 1) * pageSizeCourse.value;
    const end = currentPageCourse.value * pageSizeCourse.value;
    return courseData.slice(start, end);
})

const pageSizeCourse = ref(5);
const currentPageCourse = ref(1);
const pageSizeOptions = ref<string[]>(['5', '10', '20', '40', '50']);
const modalCreateState = reactive({
    visible: false,
    type: 'primary',
})
const modalCreateFormState = reactive({
    center: 'center1',
    courseName: '',
    courseSymbol: '',
    active: false,
    shortDesc: '',
    avatar: [],
    illustration: [],
    apiUpload: '/api/upload'
})
const modalDeleteState = reactive({
    visible: false,
    type: 'primary',
    currentId: -1,
})
const modalEditState = reactive({
    visible: false,
    type: 'primary',
    currentId: -1,
})
const modalEditFormState = reactive({
    center: ref(''),
    avatarPreview: ref(''),
    illustrationPreview: ref(''),
    courseName: ref(''),
    courseSymbol: ref(''),
    active: ref(false),
    shortDesc: ref(''),
    avatar: ref([]),
    illustration: ref([]),
    apiUpload: ref('/api/upload'),
    createSubjectName: ref(''),
    createSubjectOrder: ref(''),
});
watchEffect(() => {
    const centerId = courseData.find(item => item.id === modalEditState.currentId)?.trungTamId;
    const center = centerData.find(item => item.id === centerId)?.tenTrungTam;
    modalEditFormState.center = center !== undefined ? center : '';

    const avatarPreview = courseImageData.find(item => item.id === modalEditState.currentId)?.avatarUrl;
    modalEditFormState.avatarPreview = avatarPreview !== undefined ? avatarPreview : '';

    const illustrationPreview = courseImageData.find(item => item.id === modalEditState.currentId)?.illustrationUrl;
    modalEditFormState.illustrationPreview = illustrationPreview !== undefined ? illustrationPreview : '';

    const courseName = courseData.find(item => item.id === modalEditState.currentId)?.tenKhoa;
    modalEditFormState.courseName = courseName !== undefined ? courseName : '';

})

onMounted(() => {

})

const handlePageChange = (page: any) => {
    currentPageCourse.value = page;
}
const handleDataUser = () => {

}
const showModalCreate = () => {
    modalCreateState.visible = true;
}
const showModalDelete = (id: number) => {
    modalDeleteState.currentId = id;
    modalDeleteState.visible = true;
}
const showModalEdit = (id: number) => {
    modalEditState.currentId = id;
    modalEditState.visible = true;
}

const handleSizeChange = (current: number, pageSize: number) => {
    pageSizeCourse.value = pageSize;
}

const createKhoaHoc = () => {
    const createData = {
        courseName: modalCreateFormState.courseName,
        courseSymbol: modalCreateFormState.courseSymbol,
        center: modalCreateFormState.center,
        active: modalCreateFormState.active,
        shortDesc: modalCreateFormState.shortDesc,
        avatar: modalCreateFormState.avatar,
        illustration: modalCreateFormState.illustration,
    }
    console.log(createData);
    // setTimeout(() => {
    //     modalCreateState.visible = false;
    // }, 1000);
}
const updateKhoaHoc = (id: number) => {
    const updateData = {
        courseName: modalEditFormState.courseName,
        courseSymbol: modalEditFormState.courseSymbol,
        center: modalEditFormState.center,
        active: modalEditFormState.active,
        shortDesc: modalEditFormState.shortDesc,
        avatar: modalEditFormState.avatar,
        illustration: modalEditFormState.illustration,
        createSubjectName: modalEditFormState.createSubjectName,
        createSubjectOrder: modalEditFormState.createSubjectOrder
    };
    console.log(updateData);
    // setTimeout(() => {
    //     modalEditState.visible = false;
    // }, 1000);
}
const deleteKhoaHoc = (id: number) => {
    console.log("Xoá thành công khoá học" + id);
    // setTimeout(() => {
    //     modalDeleteState.visible = false;
    // }, 1000);
}

const handleModalCreateCancel = () => {
    modalCreateState.visible = false;
}
const handleModalDeleteCancel = () => {
    modalDeleteState.visible = false;
    modalDeleteState.currentId = -1;
}
const handleModalEditCancel = () => {
    modalEditState.visible = false;
    modalEditState.currentId = -1;
}
let selectState = ref('sapxep');
const handleChangeSelectStatus = () => {
}
</script>

<template>
    <div class="assign-work">
        <div class="link-assign">
            <BreadcrumbWrapperStyle>
                <a-breadcrumb>
                    <a-breadcrumb-item>
                        <router-link to="/">Home</router-link>
                    </a-breadcrumb-item>
                    <a-breadcrumb-item>
                        <router-link to="/giamsat/phanconghocvien">Khoá học</router-link>
                    </a-breadcrumb-item>
                </a-breadcrumb>
            </BreadcrumbWrapperStyle>
            <div class="contain-title">Phân công học viên</div>
        </div>
        <a-card :bordered="false" class="card-head">
            <a-row :gutter="25" class="title">
                <a-col :span="24"><label for="">Tìm kiếm nâng cao</label></a-col>
            </a-row>
            <a-row :gutter="25" class="input-course">
                <a-col :xl="5" :lg="6" :md="8" :sm="12" :xs="24">
                    <p for="" class="">Khóa học</p>
                    <a-select v-model="selectedKhoaHoc" class="select-advanced-search">
                        <a-select-option v-for="khoaHoc in khoaHocs" :key="khoaHoc.id" :value="khoaHoc.id">
                            {{ khoaHoc.name }}
                        </a-select-option>
                    </a-select>
                </a-col>
                <a-col :xl="5" :lg="6" :md="8" :sm="12" :xs="24">
                    <p for="" class="">Lớp học</p>
                    <a-select v-model="selectedLopHoc" class="select-advanced-search">
                        <a-select-option v-for="lopHoc in lopHocs" :key="lopHoc.id" :value="lopHoc.id">
                            {{ lopHoc.name }}
                        </a-select-option>
                    </a-select>
                </a-col>
                <a-col :xl="5" :lg="6" :md="8" :sm="12" :xs="24">
                    <p for="" class="">Trạng thái học viên</p>
                    <a-select v-model="selectedTrangThaiHocVien" class="select-advanced-search">
                        <a-select-option v-for="trangThaiHocVien in trangThaiHocViens" :key="trangThaiHocVien.id"
                            :value="trangThaiHocVien.id">
                            {{ trangThaiHocVien.name }}
                        </a-select-option>
                    </a-select>
                </a-col>
                <a-col :xl="5" :lg="6" :md="8" :sm="12" :xs="24">
                    <p for="" class="">Ca học</p>
                    <a-select v-model="selectedCaHoc" class="select-advanced-search">
                        <a-select-option v-for="caHoc in caHocs" :key="caHoc.id" :value="caHoc.id">
                            {{ caHoc.name }}
                        </a-select-option>
                    </a-select>
                </a-col>
            </a-row>
        </a-card>
        <a-card :bordered="false" class="card-body">
            <a-col :xs="24">
                <DataTableStyleWrap>
                    <div class="ninjadash-datatable-filter">
                        <div class="ninjadash-datatable-filter__left left-panel"></div>
                        <div class="ninjadash-datatable-filter__right right-panel">
                            <a-input @change="handleDataUser" size="default" placeholder="Tìm kiếm" class="search-input">
                                <template #prefix>
                                    <unicon name="search"></unicon>
                                </template>
                            </a-input>
                            <div class="ninjadash-datatable-filter__action">

                                <!-- <sdButton type="primary" size="lg" @click="showModalCreate">Thêm mới</sdButton> -->
                                <a-select class="arrange" v-model:value="selectState" style="width: 100%"
                                    @change="handleChangeSelectStatus">
                                    <a-select-option value="sapxep">Sắp xếp</a-select-option>
                                    <a-select-option value="sapxepgiam">Số bài: giảm dần</a-select-option>
                                    <a-select-option value="sapxeptang">Số bài: tăng dần</a-select-option>
                                    <a-select-option value="ended">Số bài: chưa làm</a-select-option>
                                </a-select>
                            </div>
                        </div>
                        <ModalCreatePhanCongHocVien :type="modalCreateState.type" :visible="modalCreateState.visible"
                            :onOk="createKhoaHoc" :onCancel="handleModalCreateCancel" :formState="modalCreateFormState" />
                    </div>
                    <TableWrapper>
                        <a-table :columns="tableHeader" :data-source="displayedData" :pagination="false"
                            :scroll="{ x: 500 }" :responsive="true">
                            <template #headerCell="{ title }"><span :class="`table-head-title`">{{ title
                            }}</span></template>
                            <template #bodyCell="{ column, record }">
                                <template v-if="column.key === 'hocVien'">
                                    <div class="table-item-info courses-name">
                                        <img :src="record.avataImg" class="table-avata-img">
                                        <div class="d-block">
                                            <div> {{ record.hocVien }}</div>
                                            <div>{{ record.email }}</div>
                                        </div>
                                    </div>

                                </template>
                                <template v-if="column.key === 'khoaHoc'">
                                    <div class="table-body-item courses-name">
                                        {{ record.khoaHoc }}
                                    </div>
                                </template>
                                <template v-else-if="column.key === 'trungTam'">
                                    <div class="table-body-item subjects-name">
                                        {{ record.trungTam }}
                                    </div>
                                </template>
                                <template v-else-if="column.key === 'thaoTac'">
                                    <div class="table-body-item course-operation">
                                        <div class="course-operation-icon course-operation-edit"
                                            :id="`edit-course-${record.id}`" @click="() => showModalEdit(record.id)">
                                            <unicon name="user"></unicon>
                                        </div>
                                        <div class="course-operation-icon course-operation-delete"
                                            :id="`delete-course-${record.id}`" @click="() => showModalDelete(record.id)">
                                            <unicon name="file-alt"></unicon>
                                        </div>

                                    </div>
                                </template>
                                <template v-else-if="column.key === 'ngayDangKy'">
                                    <div class="table-body-item courses-name">
                                        {{ record.ngayDangKy }}
                                    </div>
                                </template>
                                <template v-else-if="column.key === 'sale'">
                                    <div class="table-body-item courses-name">
                                        {{ record.sale }}
                                    </div>
                                </template>
                                <template v-else-if="column.key === 'caHoc'" class="relative">
                                    <div class="table-body-item courses-name">
                                        <sdButton class="button-customs-study mr-4 main-button" size="sm" shape="circle"
                                            type="warning">
                                            <unicon name="star" width="14"></unicon>
                                            <span>{{ record.caHoc[0] }}</span>
                                        </sdButton>
                                        <sdButton class="button-customs-study hidden-button absolute-button" size="sm"
                                            shape="circle" type="light">
                                            <span>Bài đợi</span>
                                        </sdButton>
                                        <sdButton class="button-customs-study mr-4" size="sm" shape="circle" type="danger">
                                            <unicon name="x" width="14"></unicon>
                                            <span>{{ record.caHoc[1] }}</span>
                                        </sdButton>
                                        <sdButton class="button-customs-study mr-4" size="sm" shape="circle" type="success">
                                            <unicon name="check" width="14"></unicon>
                                            <span>{{ record.caHoc[2] }}</span>
                                        </sdButton>
                                        <sdButton class="button-customs-study" size="sm" shape="circle" type="light">
                                            <unicon name="layer-group" width="14"></unicon>
                                            <span>{{ record.caHoc[3] }}</span>
                                        </sdButton>
                                    </div>
                                </template>
                            </template>
                        </a-table>
                        <div class="pagination-wrapper pagination-wrapper-course">
                            <a-pagination v-model="currentPageCourse" :total="totalItem" :pageSize="pageSizeCourse"
                                show-size-changer show-less-items @show-size-change="handleSizeChange"
                                :page-size-options="pageSizeOptions" @change="handlePageChange" />
                        </div>
                    </TableWrapper>
                </DataTableStyleWrap>
                <ModalDelete :visible="modalDeleteState.visible" :type="modalDeleteState.type"
                    :confirmDelete="() => deleteKhoaHoc(modalDeleteState.currentId)"
                    :handleCancel="handleModalDeleteCancel" />
                <ModalEditPhanCongHocVien :visible="modalEditState.visible" :type="modalEditState.type"
                    :onOk="() => updateKhoaHoc(modalEditState.currentId)" :onCancel="handleModalEditCancel"
                    :formState="modalEditFormState" :courseId="modalEditState.currentId" />
            </a-col>
        </a-card>
    </div>
</template>
<style scoped>
.assign-work {
    max-width: 72.5rem;
    margin: auto;
    font-family: Arial, Helvetica, sans-serif;
}

.link-assign {
    padding: 30px 30px 0;
}

.ant-table-thead .ant-table-cell {
    text-align: center !important;
}

.ant-table-tbody .ant-table-cell {
    text-align: center !important;
}

.table-actions {
    text-align: center !important;
}

.title {
    font-size: 1.5rem;
    margin-bottom: 1rem;
}

.ninjadash-username {
    text-align: left !important;
}

.card-head {
    border-radius: 0.4rem;
    margin: 1.5rem;
}

.card-body {
    min-height: 50vh;
    border-radius: 0.4rem;
    margin: 1.5rem;
}

.select-advanced-search {
    min-width: 190px;
}

.input-course p {
    margin-bottom: 0.4rem;
}

.fwqPvH.ninjadash-page-header-main {
    padding: 0;
}

.contain-title {
    font-size: 1.5rem;
}

/* table */
:global(.ant-breadcrumb .ant-breadcrumb-link a) {
    color: black !important;
}

:global(.ant-breadcrumb .ant-breadcrumb-link .router-link-active) {
    color: #8231D3 !important;
}

:global(.ant-pagination-disabled button) {
    cursor: default !important;
}

:global(.ant-pagination-prev.ant-pagination-disabled button svg) {
    fill: #9299b8 !important;
}

:global(.ant-pagination-next.ant-pagination-disabled button svg) {
    fill: #9299b8 !important;
}

:global(.ant-pagination-prev button svg) {
    fill: black !important;
}

:global(.ant-pagination-next button svg) {
    fill: black !important;
}

:global(.ant-pagination-disabled button) {
    cursor: default !important;
}

:global(.ant-pagination-prev.ant-pagination-disabled button svg) {
    fill: #9299b8 !important;
}

:global(.ant-pagination-next.ant-pagination-disabled button svg) {
    fill: #9299b8 !important;
}

:global(.ant-pagination-prev button svg) {
    fill: black !important;
}

:global(.ant-pagination-next button svg) {
    fill: black !important;
}

.course-container {
    padding: 16px 30px 0;
}

.lmeiNC {
    display: flex;
    flex-direction: column;
}

.right-panel {
    display: flex;
}

.search-input {
    width: 30rem;
    margin-right: 10px;
}

div.course-content>div>div.fFruaH {
    min-height: 30rem;
    display: flex;
    flex-direction: column;
}

main>div>div>div.course-content>div {
    position: relative;
}

:global(div.pagination-wrapper-course > ul > li.ant-pagination-options) {
    position: absolute;
    top: 0;
    left: 0;
}

.ant-table-wrapper {
    flex-grow: 1;
    margin-bottom: 1rem;
}

.table-head-title {
    display: block;
    width: 100%;
    text-align: center;
}

.table-body-item {
    width: 100%;
    text-align: center;
}

.table-course-kyHieu,

:global(.ant-table-cell[colstart="3"]) {
    display: flex;
    justify-content: center;
}

.ant-table-cell[colstart="3"] .table-head-title {
    display: block;
}

.course-content {
    flex-grow: 1;
    padding: 12px 24px 24px;
    margin-top: 12px;
    background-color: white;
    border-radius: 12px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

.course-operation {
    display: flex;
    justify-content: space-evenly;
}

.course-operation-icon {
    padding: 4px;
    cursor: pointer;
}

:global(.course-operation-edit > div > svg) {
    fill: #8231d3 !important;
}

:global(.course-operation-delete > div > svg) {
    fill: rgb(247, 92, 92) !important;
}

.pagination-wrapper {
    display: flex;
    justify-content: center;
}

.button-customs-study {
    padding: 0.75rem;
}

.mr-4 {
    margin-right: 0.25rem;
}

.hidden-button {
    display: none;
}

.d-block {
    display: block;
}

.d-flex {
    display: flex;
}

.relative {
    position: relative;
}

.absolute-button {
    position: absolute;
    top: -30px;
    left: 25px;
    transform: translateY(20px);
    transition: opacity 0.5s ease, transform 0.5s ease
}

/* .main-button:hover + .hidden-button{
    display: block;
    transform: translateY(0);
} */
.table-item-info {
    width: 100%;
    display: flex;
}

.table-avata-img {
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
    margin-right: 0.4rem;
}
.arrange{
    color: #0866FF;
}
.arrange span.ant-select-arrow{
    color: #0866FF !important;
}
/* responsive */
@media (max-width: 576px) {
    .lmeiNC {
        padding: 0;
    }

    .course-container {
        padding-left: 0;
        padding-right: 0;
    }

    .select-advanced-search {
        width: 100%;
    }

    .card-head {
        margin: 0.625rem;
    }

    .card-body {
        margin: 0.625rem;
    }
}

/* Small screens (sm) */
@media (min-width: 576px) and (max-width: 767px) {
    .lmeiNC {
        padding: 0;
    }

    .course-container {
        padding-left: 0;
        padding-right: 0;
    }
}

/* Medium screens (md) */
@media (min-width: 768px) and (max-width: 991px) {}

/* Large screens (lg) */
@media (min-width: 992px) and (max-width: 1199px) {}

/* Extra-large screens (xl) */
@media (min-width: 1200px) and (max-width: 1599px) {}

/* Extra-extra-large screens (xxl) */
@media (min-width: 1600px) {}
</style>