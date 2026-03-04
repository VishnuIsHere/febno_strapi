// module.exports = ({ env }) => ({
//   host: env('HOST', '0.0.0.0'),
//   port: env.int('PORT', 1337),
//   app: {
//     keys: env.array('APP_KEYS', ['key1', 'key2', 'key3', 'key4']),
//   },
// });
// module.exports = ({ env }) => ({
//   host: env('HOST', '0.0.0.0'),
//   port: env.int('PORT', 1337),

//   url: env('PUBLIC_URL', 'https://febnosite.febnotech.com'),

//   proxy: true,

//   app: {
//     keys: env.array('APP_KEYS'),
//   },
// });

// module.exports = ({ env }) => ({
//   host: env('HOST', '0.0.0.0'),
//   port: env.int('PORT', 1337),

//   url: env('PUBLIC_URL', 'https://febnosite.febnotech.com'),

//   proxy: true,

//   app: {
//     keys: env.array('APP_KEYS', ['key1', 'key2']),
//   },
// });

module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),

  // Public URL of Strapi backend
  url: env('PUBLIC_URL', 'https://febnosite.febnotech.com'),

  // url: env('PUBLIC_URL', 'http://127.0.0.1:1337'),

  proxy: true,

  // Important: Tell Strapi the API prefix
  api: {
    rest: {
      prefix: '/api',
    },
  },

  // Important: Tell Strapi where admin panel is served
  admin: {
    url: 'https://febnosite.febnotech.com/febno-url-admin',
    serveAdminPanel: true,
  },

  app: {
    keys: env.array('APP_KEYS'),
  },
});