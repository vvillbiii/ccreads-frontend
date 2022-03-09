import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Article from "../pages/Article";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";

const Main = (props) => {
  const [article, setArticle] = useState(null);

  const ARTICLEURL = "https://capstone-mern-backend.herokuapp.com/articles";

  const getArticle = async () => {
    const res = await fetch(ARTICLEURL);
    const data = await res.json();
    setArticle(data);
  };

  useEffect(() => getArticle(), []);

  const onClick = () => {
    getArticle();
  };

  return (
    <main>
      <Routes>
        <Route
          path="/"
          element={<Article article={article} onClick={onClick} />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard reads={article} />} />
      </Routes>
    </main>
  );
};

export default Main;
