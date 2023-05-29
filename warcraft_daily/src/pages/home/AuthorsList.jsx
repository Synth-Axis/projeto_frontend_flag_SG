import "./AuthorsList.scss";

import AuthorCard from "./AuthorCard";
import Authors from "../../assets/objects/Authors";

const AuthorsList = () => {
  return (
    <div>
      <h2 className="authors-title">Our Authors</h2>
      <div className="authors-list-container">
        {Authors &&
          Authors.map((element) => (
            <AuthorCard key={element.id} data={element} />
          ))}
      </div>
    </div>
  );
};

export default AuthorsList;
