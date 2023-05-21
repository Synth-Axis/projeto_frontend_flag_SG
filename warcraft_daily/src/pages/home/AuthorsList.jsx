import "./AuthorsList.scss";
import synthaxisicon from "../../assets/media/synthaxisicon.jpg";
import alexaicon from "../../assets/media/alexaicon.jpg";
import xristiasicon from "../../assets/media/xristiasicon.jpg";
import perkypugicon from "../../assets/media/perkypugicon.jpg";

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
      name: "Perky, the Pug",
      position: "Dog",
    },
  ];

  return <div>AuthorsList</div>;
};

export default AuthorsList;
