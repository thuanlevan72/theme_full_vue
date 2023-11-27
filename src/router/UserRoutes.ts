export default [
  {
    path: '/nguoidung',
    name: 'users',
    component: () => import('../views/dashboard/Dashboard.vue'),
    children: [
      {
        path: 'quanlyhocvien',
        name: 'quanlyhocvien',
        component: () => import('../views/table/QuanLyNguoiDungTable.vue'),
      },
      {
        path: '/giamsat/phanconghocvien',
        name: 'PhanCongHocVien',
        component: () => import('@/views/dashboard/DemoPhanCongHocVien.vue'),
      },
      {
        path: 'quanlytaikhoang',
        name: 'quanlytaikhoang',
        component: () => import('../views/table/QuanLyTaiKhoangTable.vue'),
      },
    ],
  },
];
