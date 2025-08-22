import { createSlice } from '@reduxjs/toolkit';

import { sendRequest } from '@services/slices/thunks';
import { IResponseRequestData } from '@services/types';

export type TRequestsState = {
  isLoading: boolean;
  data: IResponseRequestData;
  error: string | null;
};

const initialState: TRequestsState = {
  isLoading: false,
  data: {} as IResponseRequestData,
  error: null,
};

export const requestsSlice = createSlice({
  name: 'requests',
  initialState,
  reducers: {},
  selectors: {
    hasError: (state) => !!state.error,
    getError: (state) => state.error,
    getResponse: (state) => state.data,
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendRequest.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(sendRequest.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload as IResponseRequestData;
      })
      .addCase(sendRequest.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { hasError, getError, getResponse } = requestsSlice.selectors;
export default requestsSlice.reducer;
