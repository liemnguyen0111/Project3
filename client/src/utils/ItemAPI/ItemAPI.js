import React from "react";

const ItemAPI = {
  createItem: (body) =>
    axios.post("/api/items", body, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("user")}`,
      },
    }),
};

export default ItemAPI
