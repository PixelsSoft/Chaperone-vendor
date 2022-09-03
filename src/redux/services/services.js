import axios from 'axios';
import {useSelector} from 'react-redux';
import {CONSTANTS} from '../../constants';
import {store} from '../store';

const postServies = (formData, url) => {
  const onSuccess = ({data}) => {
    return data;
  };

  const onFailure = error => {
    throw error;
  };

  return axios
    .post(CONSTANTS.API_URLS.BASE_VENDOR + url, formData)
    .then(onSuccess)
    .catch(onFailure);
};

const getTokenServices = (param, url) => {
  const onSuccess = ({data}) => {
    return data;
  };

  const onFailure = error => {
    throw error;
  };

  return axios
    .get(
      CONSTANTS.API_URLS.BASE_VENDOR + url,

      {
        headers: {
          Authorization: store?.getState()?.auth?.accessToken,
        },
        params: param,
      },
    )

    .then(onSuccess)
    .catch(onFailure);
};
const getServices = (data, url) => {
  const onSuccess = ({data}) => {
    return data;
  };

  const onFailure = error => {
    throw error;
  };

  return axios
    .get(CONSTANTS.API_URLS.BASE_VENDOR + url, {params: data})
    .then(onSuccess)
    .catch(onFailure);
};

const authService = {
  postServies,
  getServices,
  getTokenServices,
};

export default authService;
