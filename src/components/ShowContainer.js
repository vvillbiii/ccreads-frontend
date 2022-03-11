import ShowItem from "./ShowItem";

const ShowContainer = ({ bookmarks, favorites }) => {
  return (
    <div>
      <ShowItem bookmarks={bookmarks} favorites={favorites} />
    </div>
  );
};

export default ShowContainer;
