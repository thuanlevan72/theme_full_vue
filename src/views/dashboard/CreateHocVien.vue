<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { DatePickerWrapper } from '../styled';
import dayjs from 'dayjs';
import AvatarUpload from '../uiElements/upload/Avatar.vue';
import { TimeLinePointerIconWrap, TimelineNormalWrap } from '../uiElements/ui-elements-styled';
import { themeColor } from '../../config/theme/themeVariables';
const dateFormat = 'YYYY/MM/DD';
import { ref } from 'vue';
const openCreateCourses = ref<boolean>(false);
const openCreateStatus = ref<boolean>(false);
const visible = ref<boolean>(false);
const handleCreateCourses = (e: MouseEvent) => {
  openCreateCourses.value = false;
};
const showCreateCourses = () => {
  openCreateCourses.value = true;
};
const handleCreateStatus = (e: MouseEvent) => {
  openCreateStatus.value = false;
};
const showCreateStatus = () => {
  openCreateStatus.value = true;
};
const hide = () => {
  visible.value = false;
};

// const monthFormat = 'YYYY/MM';
// const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
const onChange = (date: any, dateString: any) => {
  console.log(date, dateString);
};
const formatDate = (dateString: string) => {
  var date = new Date(dateString);

  var day = date.getDate();
  var month = date.getMonth() + 1; // JavaScript months are 0-11
  var year = date.getFullYear();

  // pad with a zero if single digit
  if (day < 10) {
    day = '0' + day;
  }
  if (month < 10) {
    month = '0' + month;
  }

  return day + '/' + month + '/' + year;
};
const dataCourse = [
  {
    id: 4125,
    hocVienId: 4147,
    trungTamId: 1,
    khoaHocId: 32,
    ngayDangKy: '2023-10-26T13:51:25.3772998',
    monHienTaiId: 40,
    hocXong: false,
    tenKhoa: 'VueJS',
    anhDaiDien: 'c7pkdvpm4ibuat1wehta',
    kyHieu: 'VUE',
    dongHocPhi: false,
    isActive: true,
    tenKhoaHoc: 'VueJS',
    giaGoiChuongTrinh: 0,
    laChinhThuc: false,
    tyLeHoanThanh: 0,
    soMonHoc: 4,
    trungTam: {
      id: 1,
      tenTrungTam: 'Lotus Academy',
      diaChi: 'Tầng 17 tòa MHDI 68 Nguyễn Cơ Thạch',
      soDienThoai: '0987296350',
      moTaNganhNghe: 'Education',
      linkAnhDaiDien: 'zclacqlwunt8w7quflxr',
      gioiThieu:
        'Tiền thân là một nhóm lập trình của HVKTQS được thành lập năm 2004 bởi một số sinh viên tham dự đội tuyển Olympic Tin Học, được dẫn đầu bởi Mr.Khánh – CEO hiện nay của HVIT CLAN.\n\nBan đầu, nhóm hoạt động dưới hình thức diễn đàn lập trình, đặt tên là HVIT(Học Viện IT) với mục đích quy tụ những tài năng trẻ lập trình viên, tạo ra sân chơi lập trình cho sinh viên các trường kỹ thuật, cùng giúp nhau tiến bộ.Sau vài tháng thì những thành viên sáng lập ban đầu rời đi theo những con đường riêng, chỉ còn lại người chủ trì cố gắng duy trì hoạt động.\n\nMr.Khánh do không có người hỗ trợ và lượng thành viên có nhu cầu học hỏi khá nhiều, nên đã thử mở các lớp lập trình cho chính những người bạn đồng trang lứa theo học.Và cũng khá bất ngờ, nghiệp dạy lập trình của Khánh bắt đầu từ đây với đông đảo lượng sinh viên  theo học sau đó.\n\nGần một năm liên tục trau dồi trực tiếp với những lớp lập trình nhỏ từ 6-8 người, kỹ năng dậy của Khánh đã trở nên tốt hơn, khả năng trình bày và truyền tải vấn đề một cách dễ hiểu nhất cho các bạn sinh viên ngày một hoàn thiện, đồng thời cũng nhận được rất nhiều ủng hộ từ gia đình và bạn bè, thậm chí còn được mời đứng lớp hỗ trợ cho nhiều giảng viên đại học.\n\nTừ tiền đề đó, giữa năm 2006, Mr.Khánh quyết định mở một nhánh riêng trong sự nghiệp CNTT của mình, thành lập nên “HVIT CLAN – IT Cho Sinh Viên” nhóm chuyên đào tạo lập trình viên để tạo nguồn lực cung cấp trực tiếp cho nhu cầu gia công phần mềm đang lên cao.\n\nHoạt động liên tục sau hơn 12 năm, đến nay HVIT CLAN đã đạt được thành tựu rực rỡ:\n\nĐào tạo gần 3000 SV các trường ĐH\nTạo ra hơn 50 nhóm lập trình\nCó 5 học viên trở thành tiến sĩ, nghiên cứu sinh đang sống ở Tây Âu và Nhật\nHàng chục học viên là Thạc Sĩ và nghiên cứu sinh trong nước\nCó 10 học viên đang đảm nhiệm giám đốc, phó giám đốc các doanh nghiệp\nHơn 500 mức project manager, project lead\nHơn  800  developer lead, test lead với mức lương rất cao\nHơn 1500 developer, test, qa, designer, ba với mức lương cao\n \nCho đến cuối năm 2019, sau một thời gian dài hoạt động đào tạo người để triển khai gia công phần mềm, HVIT CLAN chính thức đi vào con đường đào tạo lập trình viên chuyện nghiệp bằng việc hệ thống và số hóa lại chương trình học được tích lũy suốt từ năm 2006 đến nay.',
      linkFaceBook: 'https://www.facebook.com/LotusDeveloperAcademy',
      linkWebsite: 'http://lotusacademy.edu.vn/',
      tongSoHocVien: 0,
    },
  },
  {
    id: 4126,
    hocVienId: 4147,
    trungTamId: 1,
    khoaHocId: 19,
    ngayDangKy: '2023-10-26T13:56:10.588653',
    monHienTaiId: 38,
    hocXong: false,
    tenKhoa: 'Frontend Developer VueJS',
    anhDaiDien: 'dsr4a3crzh8om41wbvuz',
    kyHieu: 'FD',
    dongHocPhi: false,
    isActive: true,
    tenKhoaHoc: 'Frontend Developer VueJS',
    linkAnhMinhHoaKhoaHoc: '3elb4jusywv53arzn32j',
    giaGoiChuongTrinh: 0,
    laChinhThuc: false,
    tyLeHoanThanh: 0,
    soMonHoc: 7,
    trungTam: {
      id: 1,
      tenTrungTam: 'Lotus Academy',
      diaChi: 'Tầng 17 tòa MHDI 68 Nguyễn Cơ Thạch',
      soDienThoai: '0987296350',
      moTaNganhNghe: 'Education',
      linkAnhDaiDien: 'zclacqlwunt8w7quflxr',
      gioiThieu:
        'Tiền thân là một nhóm lập trình của HVKTQS được thành lập năm 2004 bởi một số sinh viên tham dự đội tuyển Olympic Tin Học, được dẫn đầu bởi Mr.Khánh – CEO hiện nay của HVIT CLAN.\n\nBan đầu, nhóm hoạt động dưới hình thức diễn đàn lập trình, đặt tên là HVIT(Học Viện IT) với mục đích quy tụ những tài năng trẻ lập trình viên, tạo ra sân chơi lập trình cho sinh viên các trường kỹ thuật, cùng giúp nhau tiến bộ.Sau vài tháng thì những thành viên sáng lập ban đầu rời đi theo những con đường riêng, chỉ còn lại người chủ trì cố gắng duy trì hoạt động.\n\nMr.Khánh do không có người hỗ trợ và lượng thành viên có nhu cầu học hỏi khá nhiều, nên đã thử mở các lớp lập trình cho chính những người bạn đồng trang lứa theo học.Và cũng khá bất ngờ, nghiệp dạy lập trình của Khánh bắt đầu từ đây với đông đảo lượng sinh viên  theo học sau đó.\n\nGần một năm liên tục trau dồi trực tiếp với những lớp lập trình nhỏ từ 6-8 người, kỹ năng dậy của Khánh đã trở nên tốt hơn, khả năng trình bày và truyền tải vấn đề một cách dễ hiểu nhất cho các bạn sinh viên ngày một hoàn thiện, đồng thời cũng nhận được rất nhiều ủng hộ từ gia đình và bạn bè, thậm chí còn được mời đứng lớp hỗ trợ cho nhiều giảng viên đại học.\n\nTừ tiền đề đó, giữa năm 2006, Mr.Khánh quyết định mở một nhánh riêng trong sự nghiệp CNTT của mình, thành lập nên “HVIT CLAN – IT Cho Sinh Viên” nhóm chuyên đào tạo lập trình viên để tạo nguồn lực cung cấp trực tiếp cho nhu cầu gia công phần mềm đang lên cao.\n\nHoạt động liên tục sau hơn 12 năm, đến nay HVIT CLAN đã đạt được thành tựu rực rỡ:\n\nĐào tạo gần 3000 SV các trường ĐH\nTạo ra hơn 50 nhóm lập trình\nCó 5 học viên trở thành tiến sĩ, nghiên cứu sinh đang sống ở Tây Âu và Nhật\nHàng chục học viên là Thạc Sĩ và nghiên cứu sinh trong nước\nCó 10 học viên đang đảm nhiệm giám đốc, phó giám đốc các doanh nghiệp\nHơn 500 mức project manager, project lead\nHơn  800  developer lead, test lead với mức lương rất cao\nHơn 1500 developer, test, qa, designer, ba với mức lương cao\n \nCho đến cuối năm 2019, sau một thời gian dài hoạt động đào tạo người để triển khai gia công phần mềm, HVIT CLAN chính thức đi vào con đường đào tạo lập trình viên chuyện nghiệp bằng việc hệ thống và số hóa lại chương trình học được tích lũy suốt từ năm 2006 đến nay.',
      linkFaceBook: 'https://www.facebook.com/LotusDeveloperAcademy',
      linkWebsite: 'http://lotusacademy.edu.vn/',
      tongSoHocVien: 0,
    },
  },
];
import FormSelectCreateCourses from '../table/FormSelectCreateCourses.vue';
import FormSelectStatus from '../table/FormSelectStatus.vue';

interface Province {
  id: number;
  name: string;
}

interface University {
  id: number;
  name: string;
}

interface District {
  id: number;
  name: string;
  provinceId: number;
}

interface Ward {
  id: number;
  name: string;
  districtId: number;
}

const provinces = ref<Province[]>([
  { id: 1, name: 'TP Hà Nội' },
  { id: 2, name: 'TP Hồ Chí Minh' },
]);

const universities = ref<University[]>([
  { id: 1, name: 'Đại Học QG Hà Nội' },
  { id: 2, name: 'Đại Học Thương Mại' },
]);

const districts = ref<District[]>([]);
const wards = ref<Ward[]>([]);
const selectedProvince = ref<number | null>(null);
const selectedDistrict = ref<number | null>(null);
const selectedWard = ref<number | null>(null);
const selectedUniversity = ref<number | null>(null);

const onProvinceChange = () => {
  districts.value = [
    { id: 11, name: 'Quận Ba Đình', provinceId: 1 },
    { id: 12, name: 'Quận Hoàn Kiếm', provinceId: 1 },
    { id: 13, name: 'Quận Tây Hồ', provinceId: 1 },
    { id: 14, name: 'Quận Cầu Giấy', provinceId: 1 },
    { id: 21, name: 'Quận Củ Chi', provinceId: 2 },
  ];
  selectedDistrict.value = null;
  selectedWard.value = null;
};

const onDistrictChange = () => {
  wards.value = [
    { id: 111, name: 'Phường Cống Vị', districtId: 11 },
    { id: 112, name: 'Phường Điện Biên', districtId: 11 },
    { id: 113, name: 'Phường Đội Cấn', districtId: 11 },
    { id: 114, name: 'Phường Giảng Võ', districtId: 11 },
    { id: 115, name: 'Phường Kim Mã', districtId: 11 },
    { id: 116, name: 'Phường Liễu Giai', districtId: 11 },
  ];
  selectedWard.value = null;
};
</script>

<style>
.textcenter {
  text-align: center;
}

.lablestyle-tt {
  color: #292929;
  font-size: 18px;
  font-weight: 500;
  margin-left: 10px;
}
.lablestyle {
  color: #292929;
  font-size: 18px;
}

.col-align-center {
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 10px;
}

.col-align-center-tt {
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-style {
  border-radius: 10px;
  margin: 20px;
}
.row-style {
  margin-top: 20px;
  margin-right: 40px;
}

.mxh-style {
  color: #292929;
  font-size: 18px;
  margin-left: 10px;
  margin-right: 20px;
}

.input-border {
  padding: 6px;
  border-radius: 2px;
}

.row-style-them {
  align-items: center;
  margin-bottom: 10px;
}
.datetime-select {
  margin-top: 1px;
  padding: 7px;
  border: 1px solid #d9d9d9 !important;
  border-radius: 2px !important;
}
</style>

<template>
  <a-card class="card-style">
    <a-row :gutter="25" style="margin-bottom: 10px">
      <a-col :md="12" :xs="24" class="col-align-center">
        <unicon name="user-square"></unicon>
        <label for="" class="lablestyle-tt">Thông tin tài khoản</label>
      </a-col>
    </a-row>
    <a-row :gutter="25" style="margin-bottom: 10px">
      <a-col :md="12" :sm="24" :xs="24">
        <avatar-upload />
      </a-col>
    </a-row>
    <a-row :gutter="25" style="margin-bottom: 10px">
      <a-col :md="12" :xs="24">
        <label for="" class="lablestyle">Tên đăng nhập</label>
        <a-input placeholder="" class="input-border">
          <template v-slot:prefix>
            <unicon name="" width="0"></unicon>
          </template>
        </a-input>
      </a-col>
      <a-col :md="12" :xs="24">
        <label for="" class="lablestyle">Họ tên</label>
        <a-input placeholder="" class="input-border">
          <template v-slot:prefix>
            <unicon name="" width="0"></unicon>
          </template>
        </a-input>
      </a-col>
    </a-row>
    <a-row :gutter="25" style="margin-bottom: 10px">
      <a-col :md="12" :xs="24">
        <label for="" class="lablestyle">Email</label>
        <a-input placeholder="" class="input-border">
          <template v-slot:prefix>
            <unicon name="" width="0"></unicon>
          </template>
        </a-input>
      </a-col>
      <a-col :md="12" :xs="24">
        <label for="" class="lablestyle">Số điện thoại</label>
        <a-input placeholder="" class="input-border">
          <template v-slot:prefix>
            <unicon name="" width="0"></unicon>
          </template>
        </a-input>
      </a-col>
    </a-row>
    <a-row :gutter="25" style="margin-bottom: 10px">
      <a-col :md="12" :xs="24">
        <div :md="24" :xs="24" class="col-align-center">
          <unicon name="user-circle"></unicon>
          <label for="" class="lablestyle-tt">Thông tin cá nhân</label>
        </div>
        <div :md="24" :xs="24" style="margin-top: 20px">
          <label for="" class="lablestyle">Ngày sinh</label>
          <DatePickerWrapper>
            <a-date-picker
              :default-value="dayjs('2023/01/01', dateFormat)"
              :format="dateFormat"
              style="margin-top: 1px; padding: 7px; border: 1px solid #d9d9d9 !important; border-radius: 2px"
            />
          </DatePickerWrapper>
        </div>
        <div :md="24" :xs="24" style="margin-top: 20px">
          <label for="universities" class="lablestyle">Trường đại học</label>
          <a-select v-model="selectedUniversity" style="width: 100%">
            <a-select-option v-for="university in universities" :key="university.id" :value="university.id">
              {{ university.name }}
            </a-select-option>
          </a-select>
        </div>
        <div :md="24" :xs="24" style="margin-top: 20px">
          <label for="" class="lablestyle">Chuyên ngành</label>
          <a-input placeholder="" class="input-border">
            <template v-slot:prefix>
              <unicon name="" width="0"></unicon>
            </template>
          </a-input>
        </div>
        <div :md="24" :xs="24" style="margin-top: 20px">
          <label for="" class="lablestyle">Ngày sinh</label>
          <a-input placeholder="" class="input-border">
            <template v-slot:prefix>
              <unicon name="" width="0"></unicon>
            </template>
          </a-input>
        </div>
      </a-col>
      <a-col :md="12" :xs="24">
        <div :md="24" :xs="24" class="col-align-center">
          <unicon name="user-location"></unicon>
          <label for="" class="lablestyle-tt">Địa chỉ</label>
        </div>
        <div :md="24" :xs="24" style="margin-top: 22px">
          <label for="province" class="lablestyle">Tỉnh thành</label>
          <a-select v-model="selectedProvince" @change="onProvinceChange" style="width: 100%">
            <a-select-option v-for="province in provinces" :key="province.id" :value="province.id">
              {{ province.name }}
            </a-select-option>
          </a-select>
        </div>
        <div :md="24" :xs="24" style="margin-top: 20px">
          <label for="district" class="lablestyle">Quận/Huyện</label>
          <a-select :xs="24" v-model="selectedDistrict" @change="onDistrictChange" style="width: 100%">
            <a-select-option v-for="district in districts" :key="district.id" :value="district.id">
              {{ district.name }}
            </a-select-option>
          </a-select>
        </div>
        <div :md="24" :xs="24" style="margin-top: 20px">
          <label for="ward" class="lablestyle">Xã</label>
          <a-select v-model="selectedWard" style="width: 100%">
            <a-select-option v-for="ward in wards" :key="ward.id" :value="ward.id">
              {{ ward.name }}
            </a-select-option>
          </a-select>
        </div>
        <div :md="24" :xs="24" style="margin-top: 20px">
          <label for="" class="lablestyle">Số nhà</label>
          <a-input placeholder="" class="input-border">
            <template v-slot:prefix>
              <unicon name="" width="0"></unicon>
            </template>
          </a-input>
        </div>
      </a-col>
    </a-row>
    <a-row :gutter="25" style="margin-bottom: 10px">
      <a-col :md="12" :xs="24">
        <label for="" class="lablestyle">Biết Lotus qua</label>
      </a-col>
    </a-row>
    <a-row :gutter="25" class="row-style-them">
      <a-col :md="12" :xs="24">
        <a-checkbox @change="onChange" />
        <span class="mxh-style">Facebook</span>
        <a-checkbox @change="onChange" />
        <span class="mxh-style">Website</span>
        <a-checkbox @change="onChange" />
        <span class="mxh-style">Người giới thiệu</span>
      </a-col>
    </a-row>
    <a-row :gutter="25" style="margin-bottom: 10px">
      <a-col :md="12" :xs="24" class="col-align-center">
        <unicon name="share-alt"></unicon>
        <label for="" class="lablestyle-tt">Mạng xã hội</label>
      </a-col>
    </a-row>
    <a-row :gutter="25" style="margin-bottom: 10px">
      <a-col :md="8" :xs="24">
        <label for="" class="lablestyle">Facebook</label>
        <a-input placeholder="" class="input-border">
          <template v-slot:prefix>
            <unicon name="facebook" width="30"></unicon>
          </template>
        </a-input>
      </a-col>
      <a-col :md="8" :xs="24">
        <label for="" class="lablestyle">Skype</label>
        <a-input placeholder="" class="input-border">
          <template v-slot:prefix>
            <unicon name="skype" width="30"></unicon>
          </template>
        </a-input>
      </a-col>
      <a-col :md="8" :xs="24">
        <label for="" class="lablestyle">Zalo</label>
        <a-input placeholder="" class="input-border">
          <template v-slot:prefix>
            <unicon name="share-alt" width="30"></unicon>
          </template>
        </a-input>
      </a-col>
    </a-row>
  </a-card>
  <a-card class="card-style">
    <a-row :gutter="25" style="margin-bottom: 10px">
      <a-col :md="12" :xs="24">
        <label for="" class="lablestyle-tt">Thời gian học (Tối thiểu 4 ca/tuần)</label>
      </a-col>
    </a-row>
    <a-row :gutter="25" class="row-style">
      <a-col :md="3" :xs="3" class="col-align-center-tt textcenter">
        <label for="" class="lablestyle-tt">Buổi</label>
      </a-col>
      <a-col :md="3" :xs="3" class="col-align-center-tt textcenter">
        <label for="" class="lablestyle-tt">Thứ 2</label>
      </a-col>
      <a-col :md="3" :xs="3" class="col-align-center-tt textcenter">
        <label for="" class="lablestyle-tt">Thứ 3</label>
      </a-col>
      <a-col :md="3" :xs="3" class="col-align-center-tt textcenter">
        <label for="" class="lablestyle-tt">Thứ 4</label>
      </a-col>
      <a-col :md="3" :xs="3" class="col-align-center-tt textcenter">
        <label for="" class="lablestyle-tt">Thứ 5</label>
      </a-col>
      <a-col :md="3" :xs="3" class="col-align-center-tt textcenter">
        <label for="" class="lablestyle-tt">Thứ 6</label>
      </a-col>
      <a-col :md="3" :xs="3" class="col-align-center-tt textcenter">
        <label for="" class="lablestyle-tt">Thứ 7</label>
      </a-col>
      <a-col :md="3" :xs="3" class="col-align-center-tt textcenter">
        <label for="" class="lablestyle-tt">Chủ Nhật</label>
      </a-col>
    </a-row>
    <a-row :gutter="25" class="row-style">
      <a-col :md="3" :xs="3" class="col-align-center-tt textcenter">
        <label for="" class="lablestyle">Sáng</label>
      </a-col>
      <a-col :md="3" :xs="3" class="col-align-center-tt textcenter">
        <a-checkbox @change="onChange" style="padding: 5px" />
      </a-col>
      <a-col :md="3" :xs="3" class="col-align-center-tt textcenter">
        <a-checkbox @change="onChange" />
      </a-col>
      <a-col :md="3" :xs="3" class="col-align-center-tt textcenter">
        <a-checkbox @change="onChange" />
      </a-col>
      <a-col :md="3" :xs="3" class="col-align-center-tt textcenter">
        <a-checkbox @change="onChange" />
      </a-col>
      <a-col :md="3" :xs="3" class="col-align-center-tt textcenter">
        <a-checkbox @change="onChange" />
      </a-col>
      <a-col :md="3" :xs="3" class="col-align-center-tt textcenter">
        <a-checkbox @change="onChange" />
      </a-col>
      <a-col :md="3" :xs="3" class="col-align-center-tt textcenter">
        <a-checkbox @change="onChange" />
      </a-col>
    </a-row>
    <a-row :gutter="25" class="row-style">
      <a-col :md="3" :xs="3" class="col-align-center-tt textcenter">
        <label for="" class="lablestyle">Chiều</label>
      </a-col>
      <a-col :md="3" :xs="3" class="col-align-center-tt textcenter">
        <a-checkbox @change="onChange" style="padding: 5px" />
      </a-col>
      <a-col :md="3" :xs="3" class="col-align-center-tt textcenter">
        <a-checkbox @change="onChange" />
      </a-col>
      <a-col :md="3" :xs="3" class="col-align-center-tt textcenter">
        <a-checkbox @change="onChange" />
      </a-col>
      <a-col :md="3" :xs="3" class="col-align-center-tt textcenter">
        <a-checkbox @change="onChange" />
      </a-col>
      <a-col :md="3" :xs="3" class="col-align-center-tt textcenter">
        <a-checkbox @change="onChange" />
      </a-col>
      <a-col :md="3" :xs="3" class="col-align-center-tt textcenter">
        <a-checkbox @change="onChange" />
      </a-col>
      <a-col :md="3" :xs="3" class="col-align-center-tt textcenter">
        <a-checkbox @change="onChange" />
      </a-col>
    </a-row>
    <a-row :gutter="25" class="row-style">
      <a-col :md="3" :xs="3" class="col-align-center-tt textcenter">
        <label for="" class="lablestyle">Tối</label>
      </a-col>
      <a-col :md="3" :xs="3" class="col-align-center-tt textcenter">
        <a-checkbox @change="onChange" style="padding: 5px" />
      </a-col>
      <a-col :md="3" :xs="3" class="col-align-center-tt textcenter">
        <a-checkbox @change="onChange" />
      </a-col>
      <a-col :md="3" :xs="3" class="col-align-center-tt textcenter">
        <a-checkbox @change="onChange" />
      </a-col>
      <a-col :md="3" :xs="3" class="col-align-center-tt textcenter">
        <a-checkbox @change="onChange" />
      </a-col>
      <a-col :md="3" :xs="3" class="col-align-center-tt textcenter">
        <a-checkbox @change="onChange" />
      </a-col>
      <a-col :md="3" :xs="3" class="col-align-center-tt textcenter">
        <a-checkbox @change="onChange" />
      </a-col>
      <a-col :md="3" :xs="3" class="col-align-center-tt textcenter">
        <a-checkbox @change="onChange" />
      </a-col>
    </a-row>
  </a-card>
  <a-modal
    v-model:visible="openCreateCourses"
    title="Đăng ký khóa học"
    @ok="handleCreateCourses"
    :cancel-button-props="{ style: { display: 'none' } }"
    :ok-button-props="{ style: { display: 'none' } }"
    width="55rem"
  >
    <FormSelectCreateCourses />
  </a-modal>
  <a-modal
    v-model:visible="openCreateStatus"
    title="Thêm tài khoảng"
    @ok="handleCreateStatus"
    :cancel-button-props="{ style: { display: 'none' } }"
    :ok-button-props="{ style: { display: 'none' } }"
    width="55rem"
  >
    <FormSelectStatus />
  </a-modal>
  <a-card class="card-style" style="border: none">
    <a-row :gutter="25" class="gap-flex-row">
      <a-col :md="11" :xs="24" class="col-aligns bordered-col">
        <v-row>
          <a-col :span="24" class="flex-space-between">
            <label for="" class="lablestyle-tt">Danh sách khóa học</label>
            <button class="button-18" role="button" @click="showCreateCourses">
              Thêm Mới &nbsp;
              <font-awesome-icon
                class="super-crazy-colors"
                icon="fa-plus"
                :style="{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }"
              /></button
          ></a-col>
          <a-col :span="24">
            <TimelineNormalWrap>
              <a-timeline>
                <a-timeline-item v-for="item in dataCourse">
                  <h3 style="display: flex; justify-content: space-between">
                    {{ item.tenKhoaHoc }}
                    <sdPopover placement="bottomRight" action="click">
                      <template v-slot:content>
                        <ul>
                          <li>
                            <a to="#"> chỉnh sửa </a>
                          </li>
                          <li>
                            <a to="#"
                              ><a-popconfirm
                                class="pop-confirm"
                                title="bạn có chắc chắn xóa khóa học này không?"
                                ok-text="Xóa."
                                cancel-text="Thôi"
                                confirm="confirm"
                                cancel="cancel"
                              >
                                Xóa
                              </a-popconfirm></a
                            >
                          </li>
                        </ul>
                      </template>
                      <a to="#" class="ninjadash-nav-action-link"
                        ><font-awesome-icon
                          class="super-crazy-colors"
                          icon="fa-ellipsis"
                          :style="{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }"
                      /></a>
                    </sdPopover>
                  </h3>
                  <h4>Ngày đăng ký: {{ formatDate(item.ngayDangKy) }}</h4>
                  <p>Gói học phí: KXĐ.</p>
                  <p>Chưa chính thức - Offline.</p>
                  <span class="tags" style="color: blue; font-weight: 700"> Đã active</span>
                </a-timeline-item>
              </a-timeline>
            </TimelineNormalWrap>
          </a-col>
        </v-row>
      </a-col>
      <a-col :md="11" :xs="24" class="col-aligns bordered-col">
        <v-row>
          <a-col :span="24" class="flex-space-between">
            <label for="" class="lablestyle-tt">Danh sách trạng thái</label>
            <button class="button-18" role="button" @click="showCreateStatus">
              Thêm mới &nbsp;
              <font-awesome-icon
                class="super-crazy-colors"
                icon="fa-plus"
                :style="{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }"
              /></button
          ></a-col>
          <a-col :span="24">
            <TimelineNormalWrap>
              <a-timeline>
                <a-timeline-item>
                  <h3 style="display: flex; justify-content: space-between">
                    Sign up Facebook / Google
                    <sdPopover placement="bottomRight" action="click">
                      <template v-slot:content>
                        <ul>
                          <li>
                            <a to="#">Sửa</a>
                          </li>
                          <li>
                            <a to="#">
                              <a-popconfirm
                                class="pop-confirm"
                                title="bạn có chắc chắn xóa trạng thái này không?"
                                ok-text="Xóa."
                                cancel-text="Thôi"
                                confirm="confirm"
                                cancel="cancel"
                              >
                                Xóa
                              </a-popconfirm></a
                            >
                          </li>
                        </ul>
                      </template>
                      <a to="#" class="ninjadash-nav-action-link"
                        ><font-awesome-icon
                          class="super-crazy-colors"
                          icon="fa-ellipsis"
                          :style="{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }"
                      /></a>
                    </sdPopover>
                  </h3>
                  <h4>26/10/2023</h4>
                </a-timeline-item>
              </a-timeline>
            </TimelineNormalWrap>
          </a-col>
        </v-row>
      </a-col>
    </a-row>
  </a-card>
  <sdButton
    size="default"
    shape="circle"
    type="secondary"
    style="margin-left: 45%; margin-bottom: 20px; height: 40px; width: 150px"
  >
    Lưu Thay Đổi
  </sdButton>
</template>
<style scoped>
.pop-confirm {
  padding: 0;
}
.lnSaax .ant-timeline-item .ant-timeline-item-head {
  height: 10px !important;
  width: 1rem;
}
.flex-space-between {
}
.gap-flex-row {
  justify-content: space-around;
}
.col-aligns {
  display: flex;
  padding: 3rem;
  border-radius: 1rem;
  justify-content: space-between !important;
}
.bordered-col {
  border: 1px solid #f0f0f0;
}
.button-18 {
  align-items: center;
  background-color: #5352ed;
  border: 0;
  border-radius: 100px;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-flex;
  font-family: -apple-system, system-ui, system-ui, 'Segoe UI', Roboto, 'Helvetica Neue', 'Fira Sans', Ubuntu, Oxygen,
    'Oxygen Sans', Cantarell, 'Droid Sans', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Lucida Grande',
    Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  line-height: 20px;
  max-width: 480px;
  min-height: 40px;
  min-width: 0px;
  overflow: hidden;
  padding: 0px;
  padding-left: 20px;
  padding-right: 20px;
  text-align: center;
  touch-action: manipulation;
  margin: 0 10px;
  transition: background-color 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s, box-shadow 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s,
    color 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s;
  user-select: none;
  -webkit-user-select: none;
  vertical-align: middle;
}

.button-18:hover,
.button-18:focus {
  background-color: #70a1ff;
  color: #ffffff;
}

.button-18:active {
  background: #70a1ff;
  color: rgb(255, 255, 255, 0.7);
}

.button-18:disabled {
  cursor: not-allowed;
  background: rgba(0, 0, 0, 0.08);
  color: rgba(0, 0, 0, 0.3);
}
</style>
