<script setup lang="ts">
import { Main } from '../styled';
import { defineAsyncComponent, ref } from 'vue';

let value1 = ref('lucy');
const current1 = ref<number>(1);
const focus = () => {
    //   console.log('focus');
};

const handleChange = (value: any) => {
    //   console.log(`selected ${value}`);
};

const onChange = (date: any, dateString: any) => {
    // console.log(date, dateString);
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
    <div>
        <Main>
            <a-row>
                <a-col :xs="24">
                    <sdCards title="Lịch sử điểm danh">
                        <a-row>
                            <a-col :span="6" :md="8" :xs="24">
                                <div class="custom-card">
                                    <p class="card-title">Tình trạng</p>
                                    <SelectWrapperStyle>
                                        <a-select v-model:value="value1" @focus="focus" ref="select" @change="handleChange">
                                            <a-select-option value="jack">Đúng giờ</a-select-option>
                                            <a-select-option value="lucy">Muộn giờ</a-select-option>
                                        </a-select>
                                    </SelectWrapperStyle>
                                </div>
                            </a-col>
                            <a-col :span="6" :md="8" :xs="24">
                                <div class="custom-card">
                                    <p class="card-title">Từ ngày</p>
                                    <DatePickerWrapper>
                                        <a-date-picker @change="onChange" class="padding-input-date" />
                                    </DatePickerWrapper>
                                </div>
                            </a-col>
                            <a-col :span="6" :md="8" :xs="24">
                                <div class="custom-card">
                                    <p class="card-title">Đến ngày</p>
                                    <DatePickerWrapper>
                                        <a-date-picker @change="onChange" class="padding-input-date" />
                                    </DatePickerWrapper>
                                </div>
                            </a-col>
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
.ant-row {
    padding: 10px 0;
}

.card-title {
    margin-bottom: 5px;
}

.padding-input-date {
    padding: 7px;
}

.lmeiNC .ant-picker {
    border-color: #E3E6EF !important;
}

.ant-picker {
    border-radius: 4px;
}

.ant-select {
    width: 250px;
}
/* .custom-card .ant-picker{
    width: 200px;
} */
.table-attendance .dXRjFB .ant-card-body {
    padding: 0px !important;
}
.table-attendance .dXRjFB .ant-card-head{
    display: none;
}
.ant-table-container table > thead > tr:first-child th:first-child , .ant-table-container table > thead > tr:first-child th:last-child {
    border-top-left-radius: 4px;
}
.table-attendance{
    height: 300px;
    overflow: auto;
    margin-top: 20px;
}
@media screen and (max-width: 600px) {
    .jWOmVG h1 {
        font-size: 12px;
    }

    .ant-table {
        font-size: 12px;
    }

    .cYeWcq .ant-table {
        padding: 0px;
    }

    .custom-card {
        margin-bottom: 10px;
    }

    .card-title {
        margin-bottom: 0px;
    }
}

@media screen and (max-width: 400px) {
    .ant-picker {
        width: 100%;
    }
}
.pagination-style{
  margin-top: 40px;
  text-align: right;
}

</style>