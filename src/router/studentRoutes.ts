export default [
  {
    path: '/hocvien',
    name: 'chat',
    component: () => import('../views/apps/chat/ChatApp.vue'),
    children: [
      {
        name: 'chatBot',
        path: 'chatbot',
        component: () => import('../views/apps/chat/SingleChat.vue'),
      },
      {
        name: 'chatBotBaiTap',
        path: 'chatbot/:id',
        component: () => import('../views/apps/chat/SingleChat.vue'),
      },
    ],
  },
];
