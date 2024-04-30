import axiosInstance from './axiosInstance';

const clientes = {
  getAll: () => {
    return axiosInstance.get('/clientes');
  },
};

export default clientes;
