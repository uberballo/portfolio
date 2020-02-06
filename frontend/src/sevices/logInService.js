import axios from 'axios';
const baseUrl = '/api/login';

const getCode = async ({ username, password }) => {
  try {
    const res = await axios.post(baseUrl, {
      params: {
        username: username,
        password: password
      }
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export default { getCode };
