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
        <a-row gutter="10">
          <a-col :sm="12" :xs="24">
            <a-form-item label="Tập trung">
              <a-select size="large" name="basic-select" class="ninjadash_fullwidth-select">
                <a-select-option default-value="Tiêu chuẩn" value="chuẩn">Tập trung</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :sm="12" :xs="24">
            <a-form-item label="Tự học">
              <a-select size="large" name="basic-select" class="ninjadash_fullwidth-select">
                <a-select-option default-value="Tiêu chuẩn" value="chuẩn">Tập trung</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :sm="12" :xs="24"> </a-col>
          <a-col :sm="12" :xs="24">
            <a-form-item label="Tự học">
              <a-select size="large" name="basic-select" class="ninjadash_fullwidth-select">
                <a-select-option default-value="Tiêu chuẩn" value="chuẩn">Tập trung</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row gutter="10">
          <a-col :sm="12" :xs="24">
            <a-form-item label="Tập trung">
              <a-select size="large" name="basic-select" class="ninjadash_fullwidth-select">
                <a-select-option default-value="Tiêu chuẩn" value="chuẩn">Tập trung</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :sm="12" :xs="24">
            <a-form-item label="Tự học">
              <a-select size="large" name="basic-select" class="ninjadash_fullwidth-select">
                <a-select-option default-value="Tiêu chuẩn" value="chuẩn">Tập trung</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :sm="12" :xs="24">
            <a-form-item label="Tập trung">
              <a-checkbox name="checkbox"> Đã đóng học phí </a-checkbox>
            </a-form-item></a-col
          >
          <a-col :sm="12" :xs="24">
            <a-form-item label="Tự học">
              <a-select size="large" name="basic-select" class="ninjadash_fullwidth-select">
                <a-select-option default-value="Tiêu chuẩn" value="chuẩn">Tập trung</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row gutter="10">
          <a-col :sm="12" :xs="24">
            <a-form-item label="Tập trung">
              <a-select size="large" name="basic-select" class="ninjadash_fullwidth-select">
                <a-select-option default-value="Tiêu chuẩn" value="chuẩn">Tập trung</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :sm="12" :xs="24">
            <a-form-item label="Tự học">
              <a-select size="large" name="basic-select" class="ninjadash_fullwidth-select">
                <a-select-option default-value="Tiêu chuẩn" value="chuẩn">Tập trung</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :sm="12" :xs="24">
            <a-form-item label="Tự học">
              <a-select size="large" name="basic-select" class="ninjadash_fullwidth-select">
                <a-select-option default-value="Tiêu chuẩn" value="chuẩn">Tập trung</a-select-option>
              </a-select>
            </a-form-item></a-col
          >
          <a-col :sm="12" :xs="24" class="mb-25">
            <a-form-item label="Tự học">
              <a-checkbox name="checkbox">Active</a-checkbox>
              <a-checkbox name="checkbox">Học chính thức</a-checkbox>
              <a-checkbox name="checkbox">Học online</a-checkbox>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row gutter="10">
          <a-col :sm="24" :xs="24">
            <a-form-item>
              <a-textarea
                placeholder="Nhập vào nhận xét"
                name="unresizable-textarea"
                class="ninjadash_unresizable"
                :rows="5"
            /></a-form-item>
          </a-col>
        </a-row>
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
