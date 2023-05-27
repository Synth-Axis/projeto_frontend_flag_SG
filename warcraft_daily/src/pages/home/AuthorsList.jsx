import "./AuthorsList.scss";

import AuthorCard from "./AuthorCard";
import Authors from "../../assets/objects/Authors";

const AuthorsList = () => {
  return (
    <div className="authors-list-container">
      {Authors &&
        Authors.map((element) => (
          <AuthorCard key={element.id} data={element} />
        ))}
    </div>
  );
};

export default AuthorsList;
