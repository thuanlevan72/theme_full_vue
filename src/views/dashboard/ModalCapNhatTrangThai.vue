<template>
  <div>
    <unicon name="edit" @click="showModal"></unicon>
    <sdModal
      title="Cập nhật trạng thái"
      style="width: 800px"
      :type="modalType"
      :onOk="handleOk"
      :confirm-loading="confirmLoading"
      :visible="visible"
      :onCancel="handleCancel"
    >
      <a-row class="row">
        <a-col :span="24"><span style="font-size: 16px">Tên trạng thái</span></a-col>
        <a-col :span="24"> <a-input size="large" placeholder="Tên trạng thái"> </a-input></a-col>
      </a-row>
      <a-space class="ninjadash-action-btn-list" style="display: flex; justify-content: end; margin-top: 12px">
        <a-button key="ok" type="primary" @click="handleOk" :loading="confirmLoading"> Cập nhật </a-button>
      </a-space>
    </sdModal>
  </div>
</template>

<script setup lang="tsx">
import { ref } from 'vue';

let visible = ref(false);
let confirmLoading = ref(false);
let modalType = ref('warning');

function showModal() {
  visible.value = true;
}
const onChange = (date: any, dateString: any) => {
  console.log(date, dateString);
};
function handleOk() {
  confirmLoading.value = true;
  setTimeout(() => {
    visible.value = false;
    confirmLoading.value = false;
  }, 2000);
}

function handleCancel() {
  visible.value = false;
}
</script>
<style scoped>
.row {
  margin-bottom: 10px;
}
</style>
