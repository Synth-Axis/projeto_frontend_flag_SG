import "./AboutUs.scss";
import Partners from "../../components/Partners";
import StaffCard from "./StaffCard";
import JoinUs from "../../components/JoinUs";
import About_Us from "../../assets/objects/AboutUs";

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="intro">
        <h1>
          <span className="word-box">WHO</span>
          <span className="drop-shadow">WE ARE</span>
        </h1>

        <section className="main-wrp-about">
          <div className="about-us-text">
            <p>
              <strong>Wow Daily</strong> is a news website developed by Wildcard
              Esports, a competitive gaming Guild founded in 2007 by some of the
              most successful World of Warcraft players in{" "}
              <strong> EU-Ravenholdt</strong> server, and carried on in 2019
              ahead in <strong>EU-Sylvanas</strong>.
            </p>

            <p>
              Daring ourselves to compete at the highest level is at the core of
              what Wildcard does. We do not cut corners, we do not take
              shortcuts. With an Agile mindset we respect each other and reject
              toxicity within our team and in our community, always focusing on
              the better while helping with any issues.
            </p>

            <p>
              Continuing the standard of excellence set by our former founding
              members, we integrate our personal values into our business
              practices, making the Wow Daily brand stand out as an
              organisation.
            </p>

            <p>
              But there is much more than just being an Esports enterprise. We
              take pride on our ability to use our platform, skills and social
              media to help generate meaningful changes. We work close with
              charities such as
              <strong> IRA</strong>,<strong> Above the Disorder </strong>
              and
              <strong> INHOPE </strong>
              allowing us to support causes close to our hearts.
            </p>

            <p>
              Our success is shared with both our community and our partners,
              and we feel fortunate enough to share a vision towards pushing
              industry boundaries and improving experiences. Wildcard is whole
              only through the family of our community, partners and the most
              important thing, a truthful Friendship. For this reason, it is so
              important for us to be honest, genuine and transparent, reflecting
              these values in every decision we make, in and outside the game.
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
      </div>

      <h2>
        <span className="word-box">OUR</span>
        <span className="drop-shadow">STAFF</span>
      </h2>

      <div className="staff-list">
        {About_Us &&
          About_Us.map((element) => (
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
      <JoinUs />
    </div>
  );
};

export default AboutUs;
