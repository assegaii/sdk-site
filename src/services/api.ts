import config from '../config/api';

class ApiService {
  private baseURL: string;
  private timeout: number;

  constructor() {
    this.baseURL = config.api.baseURL;
    this.timeout = config.api.timeout;
    
    if (!this.baseURL) {
      console.error('VITE_API_BASE_URL is not defined');
    }
  }

  private async request(endpoint: string, options: RequestInit = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), this.timeout);

    try {
      const response = await fetch(url, {
        ...options,
        signal: controller.signal,
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error(`API request failed: ${url}`, error);
      throw error;
    } finally {
      clearTimeout(timeoutId);
    }
  }

  async getProducts() {
    return this.request(config.api.endpoints.products);
  }
}

export const apiService = new ApiService();