export default [
  {
    path: '/hocsinh',
    name: 'chat',
    component: () => import('../views/apps/chat/ChatApp.vue'),
    children: [
      {
        name: 'chatBot',
        path: 'chatbot/:id',
        component: () => import('../views/apps/chat/SingleChat.vue'),
      },
    ],
  },
];
