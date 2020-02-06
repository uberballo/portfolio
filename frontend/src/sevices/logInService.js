import axios from 'axios';
const baseUrl = '/api/login';

const logIn = async (username, password) => {
  try {
    const res = await axios.post(baseUrl, {
      username: username,
      password: password
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export default { logIn };
