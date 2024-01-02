import axios from 'axios';

export const fetchProductDetails = async (productUrl: string) => {
  const baseUrl = process.env.API_URL || 'http://localhost:4000';
  const response = await axios.get(`${baseUrl}/api/product`, { params: { url: productUrl } });
  return response.data;
};
