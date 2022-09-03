import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {CONSTANTS} from '../../constants';
import services from '../services/services';

const initialState = {
  Data: null,
};

export const getProfile = createAsyncThunk(
  CONSTANTS.API_URLS.GET_PROFILE,
  async (formData, thunk) => {
    try {
      const response = await services.getTokenServices(
        '',
        CONSTANTS.API_URLS.GET_PROFILE,
      );
      thunk.dispatch(profileSlice.actions.getData(response?.data));
      return response;
    } catch (error) {
      let err = utils.showResponseError(error);
      utils.errorAlert(err);
      throw err;
    }
  },
);
export const profileSlice = createSlice({
  name: 'Profile',
  initialState,
  reducers: {
    getData: (state, action) => {
      state.Data = action?.payload;
    },
  },
});

export const {getData} = profileSlice.actions;
export default profileSlice.reducer;
