import React from "react";
import axios from "axios";

const ItemAPI = {
  createItem: (body) =>
    axios.post("/api/items", body, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("user")}`
      }
    }),
   getAllItems: () => axios.get("/api/items"), 
   getItem: (id) => axios.get(`/api/items/${id}`), 
};

export default ItemAPI;
