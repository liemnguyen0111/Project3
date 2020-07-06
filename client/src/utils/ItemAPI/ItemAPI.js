import React from "react";
import axios from "axios";

const ItemAPI = {
  createItem: (body) =>
    axios.post("/api/items", body, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("user")}`
      }
    }),
   getAllItems: (category) => axios.post("/api/items/category",{category : category}), 
   getItem: (id) => axios.get(`/api/items/${id}`), 
   userBid : (data) => axios.post('/api/item/bid', data, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem("user")}`
    }
  }),
  userWatch : (data) => axios.post('/api/item/watch', data, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem("user")}`
    }
  }),
};

export default ItemAPI;
