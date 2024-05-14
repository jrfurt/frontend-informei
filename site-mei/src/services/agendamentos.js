import axiosInstance from './axiosInstance';

const agendamentos = {
  getAll: () => {
    return axiosInstance.get('/agendamentos');
  },
};

export default agendamentos;
