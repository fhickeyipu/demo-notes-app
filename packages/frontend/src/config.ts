const config = {
  // Frontend config
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: "pk_test_51Ovg31RqBzUHkUqkJdrFhor50QJBKA9nKH8L37UR8pPUIO0sJdGTpa7N2rNNKx8bBZ7tJAW15mExDG0krTi4m0PZ00g0Z0z02J",

  // Backend config
  s3: {
    REGION: import.meta.env.VITE_REGION,
    BUCKET: import.meta.env.VITE_BUCKET,
  },
  apiGateway: {
    REGION: import.meta.env.VITE_REGION,
    URL: import.meta.env.VITE_API_URL,
  },
  cognito: {
    REGION: import.meta.env.VITE_REGION,
    USER_POOL_ID: import.meta.env.VITE_USER_POOL_ID,
    APP_CLIENT_ID: import.meta.env.VITE_USER_POOL_CLIENT_ID,
    IDENTITY_POOL_ID: import.meta.env.VITE_IDENTITY_POOL_ID,
  },
};

export default config;
