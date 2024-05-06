import axiosInstance from './axiosInstance';

const cadastrarMei = {
  cadastrar: (form) => {
    return axiosInstance.post('/login/create', form);
  },
};

export default cadastrarMei;
