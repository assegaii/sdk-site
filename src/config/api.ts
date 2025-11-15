const config = {
  api: {
    baseURL: import.meta.env.VITE_API_BASE_URL,
    timeout: parseInt(import.meta.env.VITE_API_TIMEOUT),
    endpoints: {
      products: '/api/products',
    }
  }
};

export default config;