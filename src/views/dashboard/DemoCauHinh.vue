<script setup lang="tsx">
import { ref, onMounted, computed } from 'vue';
import { Main } from '../styled';

import DataTables from '@/components/table/DataTable.vue';
import { BorderLessHeading } from '../styled';
import ModalXoaNhomViecVue from './ModalXoaNhomViec.vue';
import ModalThemMoiNhomViecVue from './ModalThemMoiNhomViec.vue';
import ModalCapNhatNhomViecVue from './ModalCapNhatNhomViec.vue';

const trangThai = [
  {
    title: 'Tên trạng thái',
    dataIndex: 'tenTrangThai',
    key: 'tenTrangThai',
    width: '50%',
  },
  {
    title: 'Thao tác',
    dataIndex: 'action',
    key: 'action',
    width: '50%',
  },
];
const vaiTro = [
  {
    title: 'Tên vai trò',
    dataIndex: 'tenVaiTro',
    key: 'tenVaiTro',
    width: '50%',
  },
  {
    title: 'Thao tác',
    dataIndex: 'action',
    key: 'action',
    width: '50%',
  },
];
const loaiCongViec = [
  {
    title: 'Tên loại công việc',
    dataIndex: 'tenLoaiCongViec',
    key: 'tenLoaiCongViec',
    width: '50%',
  },
  {
    title: 'Thao tác',
    dataIndex: 'action',
    key: 'action',
    width: '50%',
  },
];
const DATA_TRANGTHAI = [
  {
    tenTrangThai: 'Chuẩn bị',
  },
  {
    tenTrangThai: 'Chuẩn bị',
  },
];
const DATA_VAITRO = [
  {
    tenVaiTro: 'Chuẩn bị',
  },
];
const DATA_LOAICONGVIEC = [
  {
    tenLoaiCongViec: 'Chuẩn bị',
  },
];

const tableDataScourceTrangThai = computed(() =>
  DATA_TRANGTHAI.map((item: any) => {
    return {
      tenTrangThai: item.tenTrangThai,
      action: (
        <div class="table-actions">
          <router-link class="view" to={`#`}>
            <unicon name="eye"></unicon>
          </router-link>
          <router-link class="edit" to="#">
            <ModalCapNhatNhomViecVue />
          </router-link>
          <router-link class="delete" to="#">
            <ModalXoaNhomViecVue />
          </router-link>
        </div>
      ),
    };
  }),
);
const tableDataScourceVaiTro = computed(() =>
  DATA_VAITRO.map((item: any) => {
    return {
      tenVaiTro: item.tenVaiTro,
      action: (
        <div class="table-actions">
          <router-link class="view" to={`#`}>
            <unicon name="eye"></unicon>
          </router-link>
          <router-link class="edit" to="#">
            <ModalCapNhatNhomViecVue />
          </router-link>
          <router-link class="delete" to="#">
            <ModalXoaNhomViecVue />
          </router-link>
        </div>
      ),
    };
  }),
);
const tableDataScourceLoaiCongViec = computed(() =>
  DATA_LOAICONGVIEC.map((item: any) => {
    return {
      tenLoaiCongViec: item.tenLoaiCongViec,
      action: (
        <div class="table-actions">
          <router-link class="view" to={`#`}>
            <unicon name="eye"></unicon>
          </router-link>
          <router-link class="edit" to="#">
            <ModalCapNhatNhomViecVue />
          </router-link>
          <router-link class="delete" to="#">
            <ModalXoaNhomViecVue />
          </router-link>
        </div>
      ),
    };
  }),
);
</script>

<template>
  <div class="cau-hinh">
    <Main>
      <div class="fix-cau-hinh">
        <a-row>
          <a-col :xs="24" class="fix-cau-hinh">
            <BorderLessHeading>
              <sdCards title="Quản lý trạng thái">
                <ModalThemMoiNhomViecVue />
                <DataTables
                  :filterOption="true"
                  :filterOnchange="true"
                  :tableData="tableDataScourceTrangThai"
                  :columns="trangThai"
                />
              </sdCards>
            </BorderLessHeading>
          </a-col>
        </a-row>
      </div>
    </Main>
    <Main>
      <div class="fix-cau-hinh">
        <a-row>
          <a-col :xs="24" class="fix-cau-hinh">
            <BorderLessHeading>
              <sdCards title="Quản lý vai trò">
                <ModalThemMoiNhomViecVue />
                <DataTables
                  :filterOption="true"
                  :filterOnchange="true"
                  :tableData="tableDataScourceVaiTro"
                  :columns="vaiTro"
                />
              </sdCards>
            </BorderLessHeading>
          </a-col>
        </a-row>
      </div>
    </Main>
    <Main>
      <div class="fix-cau-hinh">
        <a-row>
          <a-col :xs="24" class="fix-cau-hinh">
            <BorderLessHeading>
              <sdCards title="Quản lý loại công việc">
                <ModalThemMoiNhomViecVue />
                <DataTables
                  :filterOption="true"
                  :filterOnchange="true"
                  :tableData="tableDataScourceLoaiCongViec"
                  :columns="loaiCongViec"
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
.cau-hinh {
  font-family: Arial, Helvetica, sans-serif;
}
.cau-hinh .ant-card-head {
  border-bottom: 0px;
}
.cau-hinh .lmeiNC {
  padding-top: 20px;
}
.fix-cau-hinh {
  height: 85vh;
  background-color: rgb(255, 255, 255);
}
</style>
