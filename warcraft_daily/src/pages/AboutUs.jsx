import Partners from "../Components/Partners";
import "./AboutUs.scss";
import StaffCard from "../Components/StaffCard";
import synthaxis from "../assets/media/synthaxis.jpg";
import alexa from "../assets/media/alexa.jpg";
import xristias from "../assets/media/xristias.jpg";
import perky from "../assets/media/perkypug.jpg";

const AboutUs = () => {
  let staff = [
    {
      id: 1,
      image: synthaxis,
      name: "Synthaxis",
      position: "CO-CEO",
      description:
        "Synthaxis founded Wildcard guild back in April 2007, and after a 7 year pause Re-founded the guild as a competitive guild along with Jahel and Elethriel. Currently taking a Full-Stack Developer course he stands as a professional gamer and lastly to founding Wildcard Esports. He has led the team to multiple World Firsts over the years and also took on the job of leading the organization as the Co-CEO along with Jahel and Elethriel.",
    },
    {
      id: 2,
      image: alexa,
      name: "Alexa",
      position: "COMMUNITY MANAGER",
      description:
        "You know her as Jahel. She is the life-long teen sweetheart to Synthaxis. With diverse background including a degree in UX/UI, CRM and Graphic Design, she is a true creative mind that is deeply-rooted in the Wildcard Community, alongside being a dog mum to Perky, The Pug. Alexa is an idea machine with a work ethic that can't be rivaled.",
    },
    {
      id: 3,
      image: xristias,
      name: "Mr. Xristias",
      position: "CREATIVE DIRECTOR",
      description:
        "Elethriel, Ioannis Xristias, was brought on board for his incredible showcase of abilities to create stunning assets, and also Epic cursing during group play. With many years of experience and having worked with many community figures in the World of Warcraft scene and Final Fantasy, his talent is undoubtedly an asset to the Wildcard organization.",
    },
    {
      id: 4,
      image: perky,
      name: "Perky, The Pug",
      position: "DOG",
      description:
        "We have heard that he used to take over for a certain Ice-Dog Mage during Dungeons and Mythic+ farming sessions, but we can tell the difference because he is always barking orders. Normally a very strong player when it comes to mechanics, but was always distracted during Mythic BoneLord for some reason, so we had to swap him to a part of the Organization. Now he is fetching coffee and snacks for us like a good boy - He is our Paladin of Love and Retribution.",
    },
  ];

  return (
    <div className="container">
      <h1 className=" slide_down page-title">
        <span className="word-box">WHO</span>
        <span class="drop-shadow">WE ARE</span>
      </h1>

      <section className="main-wrp-about slide_right">
        <div>
          <p>
            <strong>Wildcard Esports</strong> is a semi-professional competitive
            gaming Guild founded in 2007 by some of the most successful World of
            Warcraft players in <strong> EU-Ravenholdt</strong> server, and
            carried on in 2019 ahead in <strong>EU-Sylvanas</strong>.
          </p>

          <p>
            Daring ourselves to compete at the highest level is at the core of
            what Wildcard does. We do not cut corners, we do not take shortcuts.
            With an Agile mindset we respect each other and reject toxicity
            within our team and in our community, always focusing on the better
            while helping with any issues.
          </p>

          <p>
            Continuing the standard of excellence set by our former founding
            members, we integrate our personal values into our business
            practices, making the Wildcard brand stand out as an organisation.
          </p>

          <p>
            But there is much more than just being an Esports team. We take
            pride on our ability to use our platform, skills and social media to
            help generate meaningful changes. We work close with charities such
            as
            <strong> IRA</strong>,<strong> Above the Disorder </strong>
            and
            <strong> INHOPE </strong>
            allowing us to support causes close to our hearts.
          </p>

          <p>
            Our success is shared with both our community and our partners, and
            we feel fortunate enough to share a vision towards pushing industry
            boundaries and improving experiences. Wildcard is whole only through
            the family of our community, partners and the most important thing,
            a truthful Friendship. For this reason, it is so important for us to
            be honest, genuine and transparent, reflecting these values in every
            decision we make, in and outside the game.
          </p>

          <p>
            Strength comes from within - We are committed to engaging and
            entertaining our community with our competitive drive, mutual
            respect, and a lot of memes xD .
          </p>
        </div>

        <div>
          <p>Wildcard</p>
        </div>
      </section>

      <h2 className=" slide_down page-title">
        <span className="word-box">OUR</span>
        <span>STAFF</span>
      </h2>

      <div className="staff-list">
        {staff &&
          staff.map((element) => (
            <StaffCard
              key={element.id}
              name={element.name}
              position={element.position}
              description={element.description}
              image={element.image}
            ></StaffCard>
          ))}
      </div>

      <Partners />
    </div>
  );
};

export default AboutUs;
