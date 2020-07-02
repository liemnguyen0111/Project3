import axios from "axios";

const UserAPI = {
  getUsers: () => axios.get("/api/users"),
  createUser: (user) => axios.post("/api/users/register", user),
  updateUser: (id, updates) => axios.put(`/api/users/${id}`, updates),
  deleteUser: (id) => axios.delete(`/api/users/${id}`),
}

export default UserAPI