import axiosInstance from './axiosInstance';

const login = {
  logar: (form) => {
    return axiosInstance.post('/login', form);
  },
};

export default login;
