<template>
  <div>
    <unicon name="trash" @click="showModal"></unicon>
    <sdModal
      title="Xác nhận xóa"
      style="width: 290px"
      :type="modalType"
      :onOk="handleOk"
      :confirm-loading="confirmLoading"
      :visible="visible"
      :onCancel="handleCancel"
    >
      <p>Bạn có chắc muốn xóa</p>
      <a-space class="ninjadash-action-btn-list" style="display: flex; justify-content: end">
        <a-button key="cancel" @click="handleCancel"> Hủy </a-button>
        <a-button key="ok" type="primary" @click="handleOk" :loading="confirmLoading"> Xác nhận </a-button>
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
