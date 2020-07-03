import React from "react";
import axios from 'axios'

const ItemAPI = {
  createItem: (body) =>
    axios.post("/api/items", body, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("user")}`,
      },
    }),
};

export default ItemAPI
