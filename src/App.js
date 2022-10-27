import "./App.css";
import { Route, Routes } from "react-router-dom";
import AddBookMark from "./pages/AddBookMark/AddBookMark";
import Home from "./pages/Home/Home";
import SingleCatagory from "./pages/Home/SingleCatagory";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/addbookmark"
          element={<AddBookMark></AddBookMark>}
        ></Route>
        <Route
          path="/singlecatagory"
          element={<SingleCatagory></SingleCatagory>}
        />
      </Routes>
    </div>
  );
}

export default App;
