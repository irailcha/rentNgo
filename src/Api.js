import axios from 'axios';

axios.defaults.baseURL = 'https://65a6c60674cf4207b4f0c864.mockapi.io';

export const fetchAdverts = async (page = 1, limit = 12) => {
  const { data } = await axios.get(`/adverts?page=${page}&limit=${limit}`);

  return data;
};

export const fetchCarImages = async () => {
  const { data } = await axios.get(`/adverts`);
  const Images = data.map(advert => advert.img);
  const unique = Array.from(new Set(Images));

  return unique;
};
