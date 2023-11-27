<script setup lang="tsx">
import { computed, onMounted, ref, nextTick } from 'vue';
import { Main } from '../styled';
import GridForm from '../forms/overview/GridForm.vue';
import SizedForm from '../forms/overview/SizedForm.vue';
</script>

<template>
  <a-form name="multi-form" layout="vertical">
    <a-row :gutter="30">
      <a-col :sm="24" :xs="24" class="mb-25">
        <a-form-item label="">
          <a-select size="large" name="basic-select" class="ninjadash_fullwidth-select">
            <a-select-option value="1">25/10/2023 - 31/10/2023</a-select-option>
            <a-select-option default-value="25/10/2023 - 31/10/2023" value="25/10/2023 - 31/10/2023"
              >25/10/2023 - 31/10/2023</a-select-option
            >
          </a-select>
        </a-form-item>
      </a-col>
      <a-col :sm="12" :xs="24" class="mb-25">
        <a-form-item label="Tập trung">
          <a-select size="large" name="basic-select" class="ninjadash_fullwidth-select">
            <a-select-option default-value="Tiêu chuẩn" value="chuẩn">Tập trung</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="Chịu khó">
          <a-select size="large" name="basic-select" class="ninjadash_fullwidth-select">
            <a-select-option default-value="Tiêu chuẩn" value="chuẩn">Tập trung</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="Đam mê">
          <a-select size="large" name="basic-select" class="ninjadash_fullwidth-select">
            <a-select-option value="1">1</a-select-option>
            <a-select-option default-value="2" value="2">2</a-select-option>
            <a-select-option value="3">3</a-select-option>
            <a-select-option value="4">4</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="Tự học">
          <a-select size="large" name="basic-select" class="ninjadash_fullwidth-select">
            <a-select-option default-value="Tiêu chuẩn" value="chuẩn">Tập trung</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="Giờ giấc">
          <a-select size="large" name="basic-select" class="ninjadash_fullwidth-select">
            <a-select-option default-value="Tiêu chuẩn" value="chuẩn">Tập trung</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="Tốc độ">
          <a-select size="large" name="basic-select" class="ninjadash_fullwidth-select">
            <a-select-option default-value="Tiêu chuẩn" value="chuẩn">Tập trung</a-select-option>
          </a-select>
        </a-form-item>
      </a-col>
      <a-col :sm="12" :xs="24" class="mb-25">
        <a-form-item label="Mã nguồn">
          <a-select size="large" name="basic-select" class="ninjadash_fullwidth-select">
            <a-select-option value="1">1</a-select-option>
            <a-select-option default-value="2" value="2">2</a-select-option>
            <a-select-option value="3">3</a-select-option>
            <a-select-option value="4">4</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="Tư duy">
          <a-select size="large" name="basic-select" class="ninjadash_fullwidth-select">
            <a-select-option value="1">1</a-select-option>
            <a-select-option default-value="2" value="2">2</a-select-option>
            <a-select-option value="3">3</a-select-option>
            <a-select-option value="4">4</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="Hợp tác">
          <a-select size="large" name="basic-select" class="ninjadash_fullwidth-select">
            <a-select-option value="1">1</a-select-option>
            <a-select-option default-value="2" value="2">2</a-select-option>
            <a-select-option value="3">3</a-select-option>
            <a-select-option value="4">4</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="Hợp tác">
          <a-select size="large" name="basic-select" class="ninjadash_fullwidth-select">
            <a-select-option value="1">1</a-select-option>
            <a-select-option default-value="2" value="2">2</a-select-option>
            <a-select-option value="3">3</a-select-option>
            <a-select-option value="4">4</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="Sư phạm">
          <a-select size="large" name="basic-select" class="ninjadash_fullwidth-select">
            <a-select-option value="1">1</a-select-option>
            <a-select-option default-value="2" value="2">2</a-select-option>
            <a-select-option value="3">3</a-select-option>
            <a-select-option value="4">4</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="Nhận xét của Edu">
          <a-textarea
            placeholder="Nhập vào nhận xét"
            name="unresizable-textarea"
            class="ninjadash_unresizable"
            :rows="5"
          />
        </a-form-item>
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
