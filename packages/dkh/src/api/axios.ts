import axios, { AxiosInstance } from 'axios';

const API_URL = 'http://localhost:8080';
const MODE = 'development';

export const isAuth = (): boolean => {
  const token = localStorage.getItem('token');
  return !!token;
};

const axiosErrorHandler = (error: any, instance: AxiosInstance) => {
  if (!!error.config && !!error.config.retryConfig) {
    if (error.response) {
      if (error.response.status === 400) {
        return Promise.reject(error);
      }
      if (error.response.status === 401 || error.response.status === 403) {
        return Promise.reject(error);
      }
    }
    if (
      error.config.retryConfig.currentRetryAttempt <
      error.config.retryConfig.retry
    ) {
      if (!isAuth()) {
        return Promise.reject(error);
      }
      Object.defineProperty(error.config.retryConfig, 'currentRetryAttempt', {
        value: error.config.retryConfig.currentRetryAttempt + 1,
      });
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(instance(error.config));
          error.config.retryConfig.onRetryAttempt(error);
        }, error.config.retryConfig.retryDelay);
      });
    }
    return Promise.reject(error);
  }
  return Promise.reject(error);
};

const fetchClient = (options?: any): AxiosInstance => {
  const defaultOptions = {
    withCredentials: true,
    baseURL: API_URL,
    headers: {
      'Content-Type': 'application/json',
    },
    retryConfig: {
      retry: 3,
      currentRetryAttempt: 0,
      retryDelay: 1000,
      onRetryAttempt: (err: any) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        if (MODE !== 'production') {
          console.log(
            `${err.config.url}: Retry attempt #${err.config.retryConfig.currentRetryAttempt}`,
          );
        }
      },
    },
    ...options,
  };

  const instance = axios.create(defaultOptions);

  instance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token');
      const returnedTarget = Object.assign(config, {
        ...config,
        headers: {
          ...config.headers,
          Authorization: token ? `JWT ${token}` : '',
        },
      });
      return Promise.resolve(returnedTarget);
    },
    (error) => {
      return Promise.reject(error);
    },
  );

  instance.interceptors.response.use(
    (result) => {
      return Promise.resolve(result);
    },
    (error) => {
      return axiosErrorHandler(error, instance);
    },
  );

  return instance;
};

export const axiosWithoutAuthorization = (options?: any): AxiosInstance => {
  const defaultOptions = {
    baseURL: API_URL,
    headers: {
      'Content-Type': 'application/json',
    },
    retryConfig: {
      retry: 3,
      currentRetryAttempt: 0,
      retryDelay: 1000,
      onRetryAttempt: (err: any) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        if (MODE !== 'production') {
          console.log(
            `${err.config.url}: Retry attempt #${err.config.retryConfig.currentRetryAttempt}`,
          );
        }
      },
    },
    ...options,
  };

  const instance = axios.create(defaultOptions);

  instance.interceptors.request.use(
    (config) => Promise.resolve(config),
    (error) => Promise.reject(error),
  );

  instance.interceptors.response.use(
    (result) => Promise.resolve(result),
    (error) => axiosErrorHandler(error, instance),
  );

  return instance;
};

export default fetchClient;
