import axios from 'axios';

const api = axios.create({
  baseURL: process.env.API_URL || 'http://localhost:4000',
});

export const fetchProductDetails = async (productUrl: string) => {
  const response = await api.get(`/api/product`, { params: { url: productUrl } });
  return response.data;
};
