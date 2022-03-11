import ShowItem from "./ShowItem";
import { Spinner } from "react-bootstrap";

const ShowContainer = ({ bookmarks, favorites }) => {
  // console.log(bookmarks.bookmarks);
  // const book = bookmarks.bookmarks;

  const loaded = () => {
    return (
      <div>
        <ShowItem favorites={favorites} />
      </div>
    );
  };

  const loading = () => {
    return (
      <div className="d-flex justify-content-center mt-5 mb-5">
        <Spinner animation="border" variant="light" />
      </div>
    );
  };

  // console.log(book);
  return loading();
};

export default ShowContainer;
