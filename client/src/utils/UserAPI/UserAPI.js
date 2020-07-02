import axios from "axios";

const UserAPI = {
  createUser: (user) => axios.post("/api/users/register", user),
  loginUser: (user) => axios.post('api/users/login', user),
  isLoggedIn: false,
  authorizeUser: (header) => axios.get('/api/users/authorize', header),
  // getUser: () => axios.get("/api/user/:id"),
  // deleteUser: (id) => axios.delete(`/api/users/${id}`),
  // updateUser: (id, updates) => axios.put(`/api/users/${id}`, updates)
}

export default UserAPI