<script setup lang="tsx">
import { computed, onMounted, ref, nextTick } from 'vue';
import { Main } from '../styled';
import DataCourse from './Data';
import FormSelectEvaluate from './FormSelectEvaluate.vue';
import DataTables from '@/components/table/QuanLyHocVienTables.vue';
import MentorData from './MentorData';
import { BorderLessHeading } from '../styled';
import { useStore } from 'vuex';
import {
  faEdit,
  faInfoCircle,
  faMessage,
  faPhoneVolume,
  faTrash,
  faUserGroup,
  faUserLock,
} from '@fortawesome/free-solid-svg-icons';
import CreateHocVien from '../dashboard/CreateHocVien.vue';

const dataTableColumn = [
  {
    title: 'Actions',
    dataIndex: 'action',
    key: 'action',
  },
  {
    title: 'Học Viên',
    dataIndex: 'hoTen',
    key: 'hoTen',
  },
  {
    title: 'Trạng thái học tập',
    dataIndex: 'trangThaiHocVien',
    key: 'trangThaiHocVien',
  },
  {
    title: 'STD',
    dataIndex: 'sdt',
    key: 'sdt',
  },
  {
    title: 'Các khóa học',
    dataIndex: 'course',
    key: 'course',
  },
  {
    title: 'TG Đã Học',
    dataIndex: 'thoiGianDaHoc',
    key: 'thoiGianDaHoc',
  },
  {
    title: 'Tiến độ',
    dataIndex: 'tenMonHocHienTai',
    key: 'tenMonHocHienTai',
  },
];

const { state, dispatch } = useStore();
const open = ref<boolean>(false);
const openEvaluate = ref<boolean>(false);
const openAssignment = ref<boolean>(false);
const isActive = ref(-1);
const showModal = () => {
  open.value = true;
};
const showEvaluate = () => {
  openEvaluate.value = true;
};
const showAssignment = () => {
  openAssignment.value = true;
};
const handleAssignment = (e: MouseEvent) => {
  openAssignment.value = false;
};
const handleOk = (e: MouseEvent) => {
  open.value = false;
};
const handleEvaluate = (e: MouseEvent) => {
  openEvaluate.value = false;
};
const activeModule = (id: number) => {
  if (id === isActive.value) {
    return true;
  }
  return false;
};
onMounted(() => dispatch('tableReadData'));
const dataModual: string[] = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];
const ShowModule = (id: number) => {
  const idActive = isActive.value === id ? 0 : id;
  nextTick(() => {
    console.log(idActive);
    isActive.value = idActive;
  });
  return;
};
const tableDataScource = computed(() =>
  state.dataTable.tableData.map((item: any) => {
    const { id, name, country, company, position, status, date } = item;
    return {
      hocVien: <span class="ninjadash-username">{name}</span>,
      trangThaiHocTap: <span>{country}</span>,
      STD: <span>{company}</span>,
      course: position,
      date,
      progress: <span class={`ninjadash-status ninjadash-status-${status}`}>{status}</span>,
      action: (
        <div class="table-actions">
          <router-link class="view" to={`#`}>
            <unicon name="eye"></unicon>
          </router-link>
          <router-link class="edit">
            <unicon name="edit"></unicon>
          </router-link>
          <router-link class="delete">
            <unicon name="trash"></unicon>
          </router-link>
        </div>
      ),
    };
  }),
);
const tableDataUser = computed(() => {
  const data = DataCourse;
  return data.map((item: any) => {
    const {
      id,
      hoTen,
      sdt,
      account,
      bietQuaFaceBook,
      bietQuaWeb,
      bietQuaGioiThieu,
      email,
      daDienDu,
      locked,
      thongTinHocTap,
      dangKyHoc,
      lyDoHocVienThamGia,
      trangThaiHocVien,
    } = item;
    return {
      hoTen: hoTen,
      trangThaiHocVien: (
        <span class={`ninjadash-status ninjadash-status-google`}>{trangThaiHocVien[0].trangThai.tenTrangThai}</span>
      ),
      sdt: sdt,
      course: (
        <div class="row-course">
          {dangKyHoc.map((itemCourse: any) => {
            return <span class={`ninjadash-status ninjadash-status-active`}>{itemCourse.tenKhoa}</span>;
          })}
        </div>
      ),
      thoiGianDaHoc: `${thongTinHocTap.thoiGianDaHoc ? Math.round(thongTinHocTap.thoiGianDaHoc.totalDays / 7) : 0}T / ${
        thongTinHocTap.soBuoiDaHoc
      }B`,
      tenMonHocHienTai: thongTinHocTap.tenMonHocHienTai || 'Chưa học khóa nào',
      action: (
        <div class="center">
          {!locked ? (
            <div>
              <sdPopover
                placement="rightTop"
                action="click"
                v-slots={{
                  content: () => (
                    <>
                      <a onClick={showModal}>
                        <font-awesome-icon
                          icon={faEdit}
                          size="lg"
                          style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                        />
                        <span>Cập nhật</span>
                      </a>
                      <a>
                        <font-awesome-icon
                          icon={faTrash}
                          size="lg"
                          style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                        />
                        <a-popconfirm
                          title="Cho Mày cơ hội cuối cùng xóa hay không?"
                          ok-text="Xóa."
                          cancel-text="Thôi"
                          confirm="confirm"
                          cancel="cancel"
                        >
                          <span>Xóa</span>
                        </a-popconfirm>
                      </a>
                      <a>
                        <font-awesome-icon
                          icon={faUserGroup}
                          size="lg"
                          style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                        />
                        <span>Giám sát học tập</span>
                      </a>
                      <a onClick={showAssignment}>
                        <font-awesome-icon
                          icon={faUserGroup}
                          size="lg"
                          style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                        />
                        <span>Phân công trợ giảng</span>
                      </a>
                      <a>
                        <font-awesome-icon
                          icon={faUserLock}
                          size="lg"
                          style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                        />
                        <a-popconfirm
                          title="Bạn có muốn tạo chatbot cho người dùng này không?"
                          ok-text="Tạo"
                          cancel-text="Thôi"
                          confirm="confirm"
                          cancel="cancel"
                        >
                          <span>Tạo chatbot</span>
                        </a-popconfirm>
                      </a>
                      <a onClick={showEvaluate}>
                        <font-awesome-icon
                          icon={faMessage}
                          size="lg"
                          style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                        />
                        <span>Đánh giá học viên</span>
                      </a>
                      <a>
                        <font-awesome-icon
                          icon={faInfoCircle}
                          size="lg"
                          style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                        />
                        <a-popconfirm
                          title="Bạn có chắc chắn muốn đánh giá bài tập cho tài khoản của học viên này không?"
                          ok-text="Tạo."
                          cancel-text="Thôi"
                          confirm="confirm"
                          cancel="cancel"
                        >
                          <span>Đánh giá bài tập</span>
                        </a-popconfirm>
                      </a>
                      <a>
                        <font-awesome-icon
                          icon={faPhoneVolume}
                          size="lg"
                          style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                        />
                        <sdPopover
                          placement="rightTop"
                          action="click"
                          v-slots={{
                            content: () => (
                              <>
                                <a href="#">
                                  <span>ABC</span>
                                </a>
                                <a href="#">
                                  <span>Nhóm làm việc chưa có trạng thái</span>
                                </a>
                                <a href="#">
                                  <span>Sele team 2022 </span>
                                </a>
                                <a href="#">
                                  <span>Bắt lẻ 2021</span>
                                </a>
                                <a href="#">
                                  <span>Học liệu 2021</span>
                                </a>
                                <a href="#">
                                  <span>Seal team 2021</span>
                                </a>
                              </>
                            ),
                          }}
                        >
                          <sdButton class="sdButtonCustums" size="2sm" type="white">
                            <span>Marketing</span>
                          </sdButton>
                        </sdPopover>
                      </a>
                    </>
                  ),
                }}
              >
                <sdButton size="2sm" type="white">
                  <unicon name="setting" size="2em" color="red"></unicon>
                </sdButton>
              </sdPopover>
            </div>
          ) : (
            <unicon size="2em" color="red"></unicon>
          )}
          <a-list bordered size="large" class={{ active: activeModule(id) }}>
            <a-list-item>
              {' '}
              <unicon name="create-dashboard"></unicon> <p>Dashboard</p>
            </a-list-item>
          </a-list>
        </div>
      ),
    };
  });
});
</script>

<template>
  <div>
    <sdPageHeader title="Danh sách người dùng" class="ninjadash-page-header-main" />
    <Main>
      <a-modal
        v-model:visible="open"
        title="Thêm Mới Học Viên"
        @ok="handleOk"
        :cancel-button-props="{ style: { display: 'none' } }"
        :ok-button-props="{ style: { display: 'none' } }"
        width="63rem"
      >
        <CreateHocVien />
      </a-modal>
      <a-modal
        v-model:visible="openEvaluate"
        title="Đánh giá học viên"
        @ok="handleEvaluate"
        :cancel-button-props="{ style: { display: 'none' } }"
        :ok-button-props="{ style: { display: 'none' } }"
        width="63rem"
      >
        <FormSelectEvaluate />
      </a-modal>
      <a-modal
        v-model:visible="openAssignment"
        title="Phân công trợ giảng"
        @ok="handleAssignment"
        :cancel-button-props="{ style: { display: 'none' } }"
        :ok-button-props="{ style: { display: 'none' } }"
        width="63rem"
      >
        <a-form-item label="">
          <a-select size="large" name="basic-select" class="ninjadash_fullwidth-select">
            <a-select-option v-for="item in MentorData" :value="item.id">{{ item.hoTen }}</a-select-option>
            <a-select-option default-value="Lê văn thuận" value="Lê văn thuận">Lê văn thuận</a-select-option>
          </a-select>
        </a-form-item>
      </a-modal>
      <a-row :gutter="15">
        <a-col :xs="24">
          <BorderLessHeading>
            <sdCards title="quản lý tài khoảng">
              <DataTables
                :filterOption="true"
                :filterOnchange="true"
                :tableData="tableDataUser"
                :columns="dataTableColumn"
                :rowSelection="false"
              />
            </sdCards>
          </BorderLessHeading>
        </a-col>
      </a-row>
    </Main>
  </div>
</template>
<style scoped>
.sdButtonCustums {
  padding: 0;
  background: none;
}
</style>
