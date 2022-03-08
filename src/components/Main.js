import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Article from "../pages/Article";
import { Container, Button } from "react-bootstrap";

const Main = (props) => {
  const [article, setArticle] = useState(null);

  const URL = "https://capstone-mern-backend.herokuapp.com/articles";

  const getArticle = async () => {
    const res = await fetch(URL);
    const data = await res.json();
    setArticle(data);
  };

  useEffect(() => getArticle(), []);

  const onClick = () => {
    getArticle();
  };

  return (
    <main>
      <Container className="mt-5">
        <h1 style={{ color: "white" }} className="text-center mb-3">
          Conscious Culture Reads
        </h1>
        <Routes>
          <Route path="/" element={<Article article={article} />} />
        </Routes>
        <div className="d-flex justify-content-center mt-3 pb-5">
          <Button onClick={onClick} variant="dark">
            Get New Reads
          </Button>
        </div>
      </Container>
    </main>
  );
};

export default Main;
