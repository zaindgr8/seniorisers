import React from "react";

const HouseList = ({ houses, onEdit, onDelete }) => (
  <div>
    {houses.map((house) => (
      <div key={house._id}>
        <h3>{house.title}</h3>
        <p>{house.description}</p>
        <button onClick={() => onEdit(house._id)}>Edit</button>
        <button onClick={() => onDelete(house._id)}>Delete</button>
      </div>
    ))}
  </div>
);

export default HouseList;
