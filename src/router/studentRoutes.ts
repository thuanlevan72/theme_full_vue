export default [
  {
    path: '/hocvien',
    name: 'chat',
    component: () => import('../views/dashboard/Dashboard.vue'),
    children: [
      {
        name: 'chatBot',
        path: 'chatbot',
        component: () => import('../views/apps/chat/ChatApp.vue'),
      },
      {
        name: 'chatBotBaiTap',
        path: 'chatbot/:id',
        component: () => import('../views/apps/chat/ChatApp.vue'),
      },
    ],
  },
];
