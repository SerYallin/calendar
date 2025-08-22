import { createAsyncThunk } from '@reduxjs/toolkit';
import { sendRequestData } from '@app/api/form-api';

export const sendRequest = createAsyncThunk(
  'request/send',
  async (data: object, { rejectWithValue }) => {
    try {
      return await sendRequestData(data);
    } catch (error) {
      return rejectWithValue((error as Error).message || 'Unknown error');
    }
  }
);
