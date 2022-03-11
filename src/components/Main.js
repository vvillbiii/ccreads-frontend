import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Article from "../pages/Article";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Settings from "../pages/Settings";
import About from "../pages/About";
import Advertise from "../pages/Advertise";
import Status404 from "../pages/Status404";

const Main = (props) => {
  const [article, setArticle] = useState(null);
  const [token, setToken] = useState({ token: null });
  const [favorites, setFavorites] = useState(null);

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

  const getToken = () => {
    const user = localStorage.getItem("token");
    if (!user) {
      setToken({ token: null });
    } else {
      setToken(user);
    }
  };

  useEffect(() => getToken(), []);

  return (
    <main>
      <Routes>
        <Route
          path="/"
          element={<Article article={article} onClick={onClick} />}
        />
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/register" element={<Register />} />
        {token ? (
          <Route path="/dashboard" element={<Dashboard reads={article} />} />
        ) : null}
        <Route
          path="/dashboard/favorites"
          element={<Dashboard reads={article} />}
        />
        <Route
          path="/dashboard/notes"
          element={<Dashboard reads={article} />}
        />
        <Route path="/settings" element={<Settings token={token} />} />
        <Route path="/about" element={<About />} />
        <Route path="/advertise" element={<Advertise />} />
        <Route path="*" element={<Status404 />} />
      </Routes>
    </main>
  );
};

export default Main;
