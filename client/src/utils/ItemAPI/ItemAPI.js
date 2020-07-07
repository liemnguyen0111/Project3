import React from "react";
import axios from "axios";

const ItemAPI = {
  createItem: (body) =>
    axios.post("/api/items", body, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("user")}`
      }
    }),
  getAllItems: (data) => axios.post("/api/items/category", data),
  getItem: (id) => axios.get(`/api/items/${id}`, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem("user")}`
    }
  }),
  userBid: (data) => axios.post('/api/item/bid', data, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem("user")}`
    }
  }),
  makeTopBid: (data) => axios.post('/api/item/maketopbid', data, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem("user")}`
    }
  }),
  userWatch: (data) => axios.put('/api/item/watch', data, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem("user")}`
    }
  }),
  itemSold: (data) => axios.put('/api/item/sold', data, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem("user")}`
    }
  }),
  itemShipped: (data) => axios.put('/api/item/ship', data, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem("user")}`
    }
  }),
  itemSearch: (data) => axios.get(`/api/items/search/${data}`),
  createComment: (data) => axios.post('/api/item/comments', data, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem("user")}`
    }
  }),
};

export default ItemAPI;
