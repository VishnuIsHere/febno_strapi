export default {
  routes: [
    {
      method: 'GET',
      path: '/managed-security',
      handler: 'managed-security.find',
      config: {
        auth: false,
      },
    },
    {
      method: 'PUT',
      path: '/managed-security',
      handler: 'managed-security.update',
    },
    {
      method: 'DELETE',
      path: '/managed-security',
      handler: 'managed-security.delete',
    },
  ],
};
