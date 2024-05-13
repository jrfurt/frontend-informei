import axiosInstance from './axiosInstance';

const servicosMei = {
  getAll: () => {
    return axiosInstance.get('/servicos?id_mei=');
  },
  getAllCategorias: () => {
    return axiosInstance.get('/servico/categoria');
  },
  createServico: (form) => {
    return axiosInstance.post('/servico/create', form);
  },
};

export default servicosMei;
