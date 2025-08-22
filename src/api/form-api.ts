const baseUrl = 'https://example.base.co';
const baseKey = 'some-secret-key';

function handleResponse<T>(response: Response): Promise<T> {
  return response.ok
    ? response.json()
    : response
        .json()
        .then((err) => Promise.reject({ ...err, statusCode: response.status }));
}

export const sendRequestData = async (data: object): Promise<object> => {
  try {
    const res = await fetch(`${baseUrl}/form/request`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${baseKey}`,
      },
      body: JSON.stringify(data),
    });
    return await handleResponse<object>(res);
  } catch (error) {
    return Promise.reject(error);
  }
};
