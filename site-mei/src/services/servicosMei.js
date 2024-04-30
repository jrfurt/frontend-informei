import axiosInstance from './axiosInstance';

const servicosMei = {
  getAll: () => {
    return axiosInstance.get('/servicos');
  },
  createServico: () => {
    axiosInstance.post('/servico/create');
  },
};

export default servicosMei;
