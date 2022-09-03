import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {CONSTANTS} from '../../constants';
import services from '../services/services';

const initialState = {
  Data: null,
};

export const getContent = createAsyncThunk(
  CONSTANTS.API_URLS.GET_CONTENT,
  async (formData, thunk) => {
    try {
      const response = await services.getTokenServices(
        '',
        CONSTANTS.API_URLS.GET_CONTENT,
      );
      thunk.dispatch(ContentSlice.actions.getData(response?.data));
      return response;
    } catch (error) {
      let err = utils.showResponseError(error);
      utils.errorAlert(err);
      throw err;
    }
  },
);
export const ContentSlice = createSlice({
  name: 'Content',
  initialState,
  reducers: {
    getData: (state, action) => {
      state.Data = action?.payload;
    },
  },
});

export const {getData} = ContentSlice.actions;
export default ContentSlice.reducer;
