<script setup lang="ts">
import { VerticalFormStyleWrap } from './Style';
import { BasicFormWrapper } from '../../styled';
</script>

<template>
  <BasicFormWrapper>
    <VerticalFormStyleWrap>
      <a-form name="ninjadash_vertical-form-with-icon" layout="vertical">
        <a-form-item label="Tên đăng nhập">
          <a-input type="text" value="Thuanlevan72@gmail.com" placeholder="input placeholder">
            <template #prefix>
              <unicon name="user" width="14"></unicon>
            </template>
          </a-input>
        </a-form-item>
        <a-form-item label="Tên đăng nhập">
          <a-input type="password" value="@Anh123anh" placeholder="input placeholder">
            <template #prefix>
              <unicon name="user" width="14"></unicon>
            </template>
          </a-input>
        </a-form-item>
        <a-form-item label="Email">
          <a-input type="email" name="email" value="username@email.com" placeholder="input placeholder">
            <template #prefix>
              <unicon name="envelope" width="14"></unicon>
            </template>
          </a-input>
        </a-form-item>

        <a-form-item label="Password">
          <a-input-password name="password" value="12345678" placeholder="with input password">
            <template #prefix>
              <unicon name="lock" width="14"></unicon>
            </template>
          </a-input-password>
        </a-form-item>
        <a-form-item label="Multiple Select">
          <a-select mode="multiple" :default-value="['HocVien', 'Admin']" placeholder="Please select">
            <a-select-option value="HocVien">Học Viên</a-select-option>
            <a-select-option value="Admin">Admin</a-select-option>
            <a-select-option value="Marketing">Marketing</a-select-option>
            <a-select-option value="TroGiang">Trợ Giảng</a-select-option>
          </a-select>
        </a-form-item>
        <a-row>
          <a-col :lg="24" :md="24" :xs="24">
            <sdButton style="width: 100%" class="btn-signin" type="primary"> Lưu </sdButton>
          </a-col>
        </a-row>
      </a-form>
    </VerticalFormStyleWrap>
  </BasicFormWrapper>
</template>
