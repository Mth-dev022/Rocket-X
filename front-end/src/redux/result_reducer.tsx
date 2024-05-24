import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ResultState {
  userId: string | null;
  result: any[];
}

const initialState: ResultState = {
  userId: null,
  result: [],
};

const resultSlice = createSlice({
  name: "result",
  initialState,
  reducers: {
    setUserId: (state, action: PayloadAction<string | null>) => {
      state.userId = action.payload;
    },
    pushResultAction: (state, action: PayloadAction<any>) => {
      state.result.push(action.payload);
    },
    updateResultAction: (state, action: PayloadAction<{ trace: number; checked: boolean }>) => {
      const { trace, checked } = action.payload;
      state.result.fill(checked, trace, trace + 1);
    },
    resetResultAction: () => initialState,
  },
});

export const { setUserId, pushResultAction, resetResultAction, updateResultAction } = resultSlice.actions;
export default resultSlice.reducer;
