import axiosInstance from './axiosInstance';

const login = {
  logar: (form) => {
    return axiosInstance.post('/login', form);
  },
  getNomeMeiById: (id_mei) => {
    return axiosInstance.get('/login/getMeiId', { params: { id_mei } });
  },
};

export default login;
