import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const SingleCatagory = ({ k }) => {
  const navigate = useNavigate();
  const { title, id, catagory, url } = k;
  const goto = (id) => {
    navigate(`/details/${id}`);
  };
  return (
    <div class="flex justify-between mt-4">
      <h1>{title}</h1>
      <button onClick={() => goto(id)} class="btn-sm btn-success">
        Details
      </button>
    </div>
  );
};

export default SingleCatagory;
