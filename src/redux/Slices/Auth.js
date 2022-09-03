import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {showSimpleMessage} from '../../utils/flashMessage';
import services from '../services/services';
import {CONSTANTS} from '../../constants';
import utils from '../../utils';
import {store} from '../store';

const initialState = {
  accessToken: null,
};

export const login = createAsyncThunk(
  CONSTANTS.API_URLS.LOGIN,
  async (formData, thunk) => {
    try {
      const response = await services.postServies(
        formData,
        CONSTANTS.API_URLS.LOGIN,
      );

      thunk.dispatch(authSlice.actions.saveAccessToken(response.data.token));
      return response;
    } catch (error) {
      let err = utils.showResponseError(error);
      utils.errorAlert(err);
      throw err;
    }
  },
);

export const signup = createAsyncThunk(
  CONSTANTS.API_URLS.SIGN_UP,
  async (data, thunk) => {
    try {
      const response = await services.postServies(
        data,
        CONSTANTS.API_URLS.SIGN_UP,
      );

      return response;
    } catch (error) {
      let err = utils.showResponseError(error);

      if (err?.email[0]) {
        utils.errorAlert(err?.email[0]);
      } else if (err?.phone[0]) {
        utils.errorAlert(err?.phone[0]);
      }

      throw err;
    }
  },
);

export const verifyOtp = createAsyncThunk(
  CONSTANTS.API_URLS.VERIFY_OTP,
  async (data, thunk) => {
    console.log('data geeettttt========>', data);
    try {
      const response = await services.postServies(
        data,
        CONSTANTS.API_URLS.VERIFY_OTP,
      );
      return response;
    } catch (error) {
      let err = utils.showResponseError(error);
      throw err;
    }
  },
);

export const forgotPassword = createAsyncThunk(
  CONSTANTS.API_URLS.FORGOT_PASSWORD,
  async (data, thunk) => {
    try {
      const response = await services.postServies(
        data,
        CONSTANTS.API_URLS.FORGOT_PASSWORD,
      );
      return response;
    } catch (error) {
      let err = utils.showResponseError(error);
      throw err;
    }
  },
);

export const resetPassword = createAsyncThunk(
  CONSTANTS.API_URLS.RESET_PASSWORD,
  async (data, thunk) => {
    try {
      const response = await services.postServies(
        data,
        CONSTANTS.API_URLS.RESET_PASSWORD,
      );
      return response;
    } catch (error) {
      let err = utils.showResponseError(error);
      throw err;
    }
  },
);

export const logout = createAsyncThunk(
  CONSTANTS.API_URLS.LOGOUT,
  async ({}, thunk) => {
    try {
      const response = await services.getTokenServices(
        '',
        CONSTANTS.API_URLS.LOGOUT,
      );

      thunk.dispatch(authSlice.actions.removeAccessToken());
      return response;
    } catch (error) {
      let err = utils.showResponseError(error);
      throw err;
    }
  },
);

export const deleteAccount = createAsyncThunk(
  CONSTANTS.API_URLS.DEACTIVATE,
  async ({}, thunk) => {
    try {
      //   removeFcmTokenFromFirebase();
      const response = await authService.deactivate();
      showSimpleMessage('success', {
        message: 'Your account has been deactivated successfully.',
      });
      thunk.dispatch(authSlice.actions.removeAccessToken());
    } catch (error) {
      let err = utils.showResponseError(error);
      throw err;
    }
  },
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    saveAccessToken: (state, action) => {
      state.accessToken = action?.payload;
    },
    removeAccessToken: (state, action) => {
      state.accessToken = null;
    },
  },
});

export const {saveAccessToken, removeAccessToken} = authSlice.actions;
export default authSlice.reducer;
