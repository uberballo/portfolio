import axios from 'axios';
const baseUrl = '/api';

let token = null;

const setToken = newToken => {
  token = `bearer ${newToken}`;
};

const createProject = async newProject => {
  const config = {
    headers: { Authorization: token }
  };

  try {
    const res = await axios.post(`${baseUrl}/project`, newProject, config);
    console.log(res.data);
    return res.data.project;
  } catch (error) {
    console.log(error);
  }
};

export default { setToken, createProject };
