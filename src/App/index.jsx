import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Footer from "../Components/Footer";
import Home from "../Components/Home";
import JobSearch from "../Components/JobSearch";
import Navbar from "../Components/Navbar";
import { Prices } from "../pages/Prices";
import { Login } from "../pages/Login";
import { Signup } from "../pages/Signup";
import { RealResults } from "../pages/RealResults";
import { Jobseeker } from "../pages/Jobseeker";

export const App = () => {
  const [searchText, setSearchText] = useState();
  const [posts, setPosts] = useState([]);
  const apiEndPoint = "https://jsonplaceholder.typicode.com/users";
  useEffect(() => {
    const getPost = async () => {
      const { data: res } = await axios.get(apiEndPoint);
      setPosts(res);
    };
    getPost();
  }, []);

  return (
    <>
      <Routes>
        <Route element={<Navbar />}>
          <Route
            path="/search"
            element={
              <JobSearch
                searchText={searchText}
                setSearchText={setSearchText}
                posts={posts}
                setPosts={setPosts}
              />
            }
          />
          ;
          <Route
            path="/home"
            element={
              <Home
                searchText={searchText}
                setSearchText={setSearchText}
                posts={posts}
                setPosts={setPosts}
              />
            }
          />
          <Route path="/search/jobseeker" element={<Jobseeker />} />
          <Route path={`/prices`} element={<Prices />} />
          <Route path={`/real`} element={<RealResults />} />
          <Route path={`/Signup`} element={<Signup />} />
          <Route path={`/Login`} element={<Login />} />
          <Route path="*" element={<h1>404 NOT FOUND</h1>} />
          <Route path="/" element={<Navigate to={"/home"} />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
