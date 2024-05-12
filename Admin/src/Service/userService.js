import axios from "axios";

const API = "http://localhost:8050"; 

const userService = {
  getAllUsers: () => {
    return axios.get(`${API}/user`);
  },

  saveUser: (user) => {
    return axios.post(`${API}/user/saveUser`, user);
  },

  getUserById: (id) => {
    return axios.get(`${API}/user/${id}`);
  },

  deleteUser: (id) => {
    return axios.get(`${API}/user/delete/${id}`);
  },

  editUser: (user, id) => {
    return axios.post(`${API}/user/editUser/${id}`, user);
  }
};

export default userService;
