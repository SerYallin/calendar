import { requestsFormResponce } from '@constants/requests';

const originalFetch = window.fetch;

window.fetch = async (...args) => {
  const [resource, config] = args;

  const newConfig = {
    ...config,
    headers: {
      ...config?.headers,
      csrf: '1234567890', // токен получаем от сервера и храним в localStorage либо куках.
    },
  };

  if (typeof resource === 'string' && resource.includes('/form/request')) {
    return new Response(JSON.stringify(requestsFormResponce), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  return originalFetch(resource, newConfig);
};
