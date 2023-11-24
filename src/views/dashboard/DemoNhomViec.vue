<script setup lang="tsx">
import { ref, onMounted, computed } from 'vue';
import { Main } from '../styled';

import DataTables from '@/components/table/DataTable.vue';
import { BorderLessHeading } from '../styled';
const dataTableColumn = [
  {
    title: '#',
    dataIndex: 'id',
    key: 'id',
    width: '5%',
  },
  {
    title: 'Tên nhóm việc',
    dataIndex: 'tenNhom',
    key: 'tenNhom',
    width: '25%',
  },
  {
    title: 'Tình trạng việc',
    dataIndex: 'tinhTrangViec',
    key: 'tinhTrangViec',
    width: '30%',
  },
  {
    title: 'Thời gian',
    dataIndex: 'thoiGian',
    key: 'thoiGian',
    width: '15%',
  },
  {
    title: 'Số NS',
    dataIndex: 'so',
    key: 'so',
    width: '15%',
  },
  {
    title: 'Thao tác',
    dataIndex: 'action',
    key: 'action',
    width: '10%',
  },
];
const DATA = [
  {
    id: 1,
    tenNhom: 'Heo lo',
    thoiGian: 'thoi gian',
    so: 123,
    tinhTrangViec: 'Meo meo',
  },
  {
    id: 1,
    tenNhom: 'Heo lo',
    thoiGian: 'thoi gian',
    so: 123,
    tinhTrangViec: 'Meo meo',
  },
  {
    id: 1,
    tenNhom: 'Heo lo',
    thoiGian: 'thoi gian',
    so: 123,
    tinhTrangViec: 'Meo meo',
  },
  {
    id: 1,
    tenNhom: 'Heo lo',
    thoiGian: 'thoi gian',
    so: 123,
    tinhTrangViec: 'Meo meo',
  },
  {
    id: 1,
    tenNhom: 'Heo lo',
    thoiGian: 'thoi gian',
    so: 123,
    tinhTrangViec: 'Meo meo',
  },
  {
    id: 1,
    tenNhom: 'Heo lo',
    thoiGian: 'thoi gian',
    so: 123,
    tinhTrangViec: 'Meo meo',
  },
  {
    id: 1,
    tenNhom: 'Heo lo',
    thoiGian: 'thoi gian',
    so: 123,
    tinhTrangViec: 'Meo meo',
  },
  {
    id: 1,
    tenNhom: 'Heo lo',
    thoiGian: 'thoi gian',
    so: 123,
    tinhTrangViec: 'Meo meo',
  },
];

const tableDataScource = computed(() =>
  DATA.map((item: any) => {
    return {
      id: item.id,
      tenNhom: item.tenNhom,
      thoiGian: item.thoiGian,
      so: item.so,
      tinhTrangViec: item.tinhTrangViec,
      action: (
        <div class="table-actions">
          <router-link class="view" to={`#`}>
            <unicon name="eye"></unicon>
          </router-link>
          <router-link class="edit" to="#">
            <unicon name="edit"></unicon>
          </router-link>
          <router-link class="delete" to="#">
            <unicon name="trash"></unicon>
          </router-link>
        </div>
      ),
    };
  }),
);
</script>

<template>
  <div class="nhom-viec">
    <Main>
      <div class="fix-nhom-viec">
        <a-row>
          <a-col :xs="24" class="fix-nhom-viec">
            <BorderLessHeading>
              <sdCards title="Nhóm việc của tôi">
                <DataTables
                  :filterOption="true"
                  :filterOnchange="true"
                  :tableData="tableDataScource"
                  :columns="dataTableColumn"
                />
              </sdCards>
            </BorderLessHeading>
          </a-col>
        </a-row>
      </div>
    </Main>
  </div>
</template>

<style scoped>
.nhom-viec {
  font-family: Arial, Helvetica, sans-serif;
}
.nhom-viec .ant-card-head {
  border-bottom: 0px;
}
.nhom-viec .lmeiNC {
  padding-top: 20px;
}
.fix-nhom-viec {
  height: 85vh;
  background-color: rgb(255, 255, 255);
}
</style>
