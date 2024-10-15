import axios from "axios";

const port = import.meta.env.VITE_APP_PORT;

const checkValidToken = async (token) => {
  try {
    const { data } = await axios.post(
      `${port}/auth/auth`,
      {},
      { headers: { authorization: token } }
    );
    return data;
  } catch (err) {
    console.log(err);
  }
};

const login = async (user) => {
  try {
    const { data } = await axios.post(`${port}/auth/login`, {...user}) ;
    return data;
  } catch (err) {
    console.log(err);
  }
};

const register = async (user) => {
  try {
    const { data } = await axios.post(`${port}/auth/register`, {...user});
    return data;
  } catch (err) {
    console.log(err);
  }
};

export { checkValidToken, login, register };
