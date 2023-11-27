<script setup lang="tsx">
import { computed, onMounted, ref, nextTick } from 'vue';
import { Main } from '../styled';
import GridForm from '../forms/overview/GridForm.vue';
import SizedForm from '../forms/overview/SizedForm.vue';
</script>

<template>
  <a-form name="multi-form" layout="vertical">
    <a-row>
      <a-col :sm="24" :xs="24">
        <a-form-item label="Trạng thái">
          <a-select size="large" name="basic-select" class="ninjadash_fullwidth-select">
            <a-select-option default-value="Tiêu chuẩn" value="chuẩn">Tập trung</a-select-option>
          </a-select>
        </a-form-item>
      </a-col>
      <a-col :sm="24" :xs="24">
        <a-form-item label="Date">
          <a-date-picker class="full-width" name="input-date" />
        </a-form-item>
      </a-col>
      <a-col :sm="24" :xs="24">
        <a-form-item label="Ghi chú">
          <a-textarea
            placeholder="Nhập vào nhận xét"
            name="unresizable-textarea"
            class="ninjadash_unresizable"
            :rows="5"
        /></a-form-item>
      </a-col>
    </a-row>
    <a-row>
      <a-col :sm="12" :xs="24">
        <div class="ninjadash_form-action">
          <sdButton class="btn-signin" html-type="submit" type="light" style="margin-right: 15px"> Cancel </sdButton>
          <sdButton class="btn-signin" type="primary"> Save </sdButton>
        </div>
      </a-col>
    </a-row>
  </a-form>
</template>
<style scoped>
.full-width {
  width: 100%;
}
</style>
