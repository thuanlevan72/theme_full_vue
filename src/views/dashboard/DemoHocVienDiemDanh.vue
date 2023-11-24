<script setup lang="ts">
import { Main } from '../styled';
import { defineAsyncComponent, ref } from 'vue';

let value1 = ref('lucy');
const current1 = ref<number>(1);
const focus = () => {
    
};

const handleChange = (value: any) => {
   
};

const onChange = (date: any, dateString: any) => {
    
};
const SalesByLocation = defineAsyncComponent(() => import('./demoOne/SalesByLocationTable.vue'));
const pageRoutes = [
    {
        path: '/',
        breadcrumbName: 'Dashboard',
    },
    {
        path: '/hocvien/diemdanh',
        breadcrumbName: 'Demo Six',
    },
];
</script>

<template>
    <div class="Attendance-history">
        <Main>
            <a-row>
                <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <sdCards title="Lịch sử điểm danh">
                        <a-row>
                            <div class="custom-card">
                                <p class="card-title">Tình trạng</p>
                                <SelectWrapperStyle>
                                    <a-select v-model:value="value1" @focus="focus" ref="select" @change="handleChange">
                                        <a-select-option value="jack">Đúng giờ</a-select-option>
                                        <a-select-option value="lucy">Muộn giờ</a-select-option>
                                        <a-select-option value="no">Không đến</a-select-option>
                                    </a-select>
                                </SelectWrapperStyle>
                            </div>
                            <div class="custom-card">
                                <p class="card-title">Từ ngày</p>
                                <DatePickerWrapper>
                                    <a-date-picker @change="onChange" class="padding-input-date" />
                                </DatePickerWrapper>
                            </div>
                            <div class="custom-card">
                                <p class="card-title">Đến ngày</p>
                                <DatePickerWrapper>
                                    <a-date-picker @change="onChange" class="padding-input-date" />
                                </DatePickerWrapper>
                            </div>
                        </a-row>
                        <div class="table-attendance">
                            <SalesByLocation />
                        </div>
                        <div class="pagination-style">
                            <a-pagination v-model:current="current1" show-quick-jumper :total="100" @change="onChange" />
                        </div>
                    </sdCards>

                </a-col>
            </a-row>
        </Main>
    </div>
</template>

<style>
.Attendance-history{
  font-family: Arial, Helvetica, sans-serif;
}
.Attendance-history .ant-card-head {
    border-bottom: 0px;
}
.lmeiNC{
    max-width: 71.25rem;
    margin: auto;
}
.Attendance-history .lmeiNC{
    padding-top: 1.25rem;
}
.Attendance-history .ant-row {
    padding: 0.625rem 0;
}

.Attendance-history .custom-card {
    margin-right: 1.25rem;
}

.Attendance-history .card-title {
    margin-bottom: 0.3125rem;
}

.Attendance-history .padding-input-date {
    padding: 0.4375rem;
}

.Attendance-history .lmeiNC .ant-picker {
    border-color: #E3E6EF !important;
}

.Attendance-history .ant-picker {
    border-radius: 4px;
}

.Attendance-history .custom-card .ant-select {
    width: 11.25rem;
}
.Attendance-history .custom-card .ant-picker {
    min-width: 11.25rem;
}

.Attendance-history .table-attendance .dXRjFB .ant-card-body {
    padding: 0px !important;
}

.Attendance-history .table-attendance .dXRjFB .ant-card-head {
    display: none;
}

.Attendance-history .ant-table-container table>thead>tr:first-child th:first-child,
.Attendance-history .ant-table-container table>thead>tr:first-child th:last-child {
    border-top-left-radius: 4px;
}

.Attendance-history .table-attendance {
    margin-top: 1.25rem;
}
.Attendance-history .ant-table-content{
    height: 18.75rem;
    overflow: auto;
    scrollbar-width: thin;
}

.Attendance-history .ant-table-content .ant-table-thead {
    position: sticky;
    z-index: 1;
}
.Attendance-history .table-attendance thead th {
    position: sticky;
    top: 0;
    z-index: 1;
}

@media screen and (max-width: 37.5rem) {
    .Attendance-history .jWOmVG h1 {
        font-size: 0.75rem;
    }

    .Attendance-history .ant-table {
        font-size: 0.75rem;
    }

    .Attendance-history .cYeWcq .ant-table {
        padding: 0px;
    }

    .Attendance-history .custom-card {
        margin-bottom: 0.625rem;
    }

    .Attendance-history .card-title {
        margin-bottom: 0px;
    }
}

@media screen and (max-width: 25rem) {
    .Attendance-history .custom-card .ant-select-selector {
        width: 11.25rem;
    }
}

.Attendance-history .pagination-style {
    margin-top: 2.5rem;
    text-align: right;
}
</style>