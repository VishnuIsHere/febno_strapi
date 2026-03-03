 export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'someVerySecretValue123!'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'randomApiSalt'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT', 'randomTransferSalt'),
    },
  },
  secrets: {
    encryptionKey: env('ENCRYPTION_KEY', 'randomEncryptionKey'),
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
