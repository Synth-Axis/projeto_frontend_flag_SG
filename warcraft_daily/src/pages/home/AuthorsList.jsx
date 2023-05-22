import "./AuthorsList.scss";
import synthaxisicon from "../../assets/media/synthaxisicon.jpg";
import alexaicon from "../../assets/media/alexaicon.jpg";
import xristiasicon from "../../assets/media/xristiasicon.jpg";
import perkypugicon from "../../assets/media/perkypugicon.jpg";
import AuthorCard from "./AuthorCard";

const AuthorsList = () => {
  let authors = [
    {
      id: 1,
      photo: synthaxisicon,
      name: "Synthaxis",
      position: "Co-CEO",
    },
    {
      id: 2,
      photo: alexaicon,
      name: "Jahel",
      position: "Community Manager",
    },
    {
      id: 3,
      photo: xristiasicon,
      name: "Elethriel",
      position: "Creative Director",
    },
    {
      id: 4,
      photo: perkypugicon,
      name: "Perky, Pug",
      position: "Dog",
    },
  ];

  return (
    <div className="authors-list-container">
      {authors &&
        authors.map((element) => (
          <AuthorCard key={element.id} data={element} />
        ))}
    </div>
  );
};

export default AuthorsList;
