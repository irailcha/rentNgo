import axios from 'axios';

axios.defaults.baseURL = 'https://65a6c60674cf4207b4f0c864.mockapi.io';

export const fetchAdverts = async (page = 1, limit = 12) => {
  console.log('з апі');
  const { data } = await axios.get(`/adverts?page=${page}&limit=${limit}`);
  console.log(data);
  return data;
};

// export const fetchAdvertById = async ({ id }) => {
//   const response = await axios.get(`/adverts/${id}`);

//   const { data: advertId } = response;

//   return advertId;
// };
