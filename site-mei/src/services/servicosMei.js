import axiosInstance from './axiosInstance';

const servicosMei = {
  getAll: () => {
    return axiosInstance.get('/servicos');
  },
  createServico: (form) => {
    return axiosInstance.post('/servico/create', form);
  },
};

export default servicosMei;
