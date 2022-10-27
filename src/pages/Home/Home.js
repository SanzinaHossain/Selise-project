import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SingleCatagory from "./SingleCatagory";
const Home = () => {
  const navigate = useNavigate();
  const goto = () => {
    navigate("/addbookmark");
  };
  const [catagory, setCatagory] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        setCatagory(data);
      });
  }, []);
  return (
    <div class="p-5">
      {/* Bookmark header */}
      <div class="flex justify-evenly">
        <div>
          <h1 className="text-primary text-center text-4xl">
            Bookmark Manager
          </h1>
        </div>
        <div>
          <button
            onClick={() => goto()}
            class="btn btn-outline btn-primary text-xl"
          >
            Add Bookmark
          </button>
        </div>
      </div>

      {/* Bookmark Catagory */}
      <>
        <h1 Class="text-xl text-black mt-10">Catagory-A</h1>
      </>
      <div class=" text-white border-2 w-96 bg-black border-primary mt-4 p-5">
        {catagory.map((k) => (
          <SingleCatagory k={k}></SingleCatagory>
        ))}
      </div>
      <>
        <h1 Class="text-xl text-black mt-10">Catagory-B</h1>
      </>
      <div class=" text-white border-2 w-96 bg-black border-primary mt-4 p-5">
        {catagory.map((k) => (
          <SingleCatagory k={k}></SingleCatagory>
        ))}
      </div>
    </div>
  );
};

export default Home;
