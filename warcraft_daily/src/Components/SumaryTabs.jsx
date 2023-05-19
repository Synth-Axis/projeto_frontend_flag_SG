import "./SumaryTabs.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

const ResumeTabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const unhide = (eventArgs) => {
    let clickedTab = eventArgs.target.id;
    if (clickedTab === activeTab) {
      setActiveTab("");
    } else {
      setActiveTab(clickedTab);
    }
  };

  //   const getTabColor = (clickedQuestion) => {
  //     if (clickedQuestion === question) {
  //       return "selected-tab";
  //     }
  //   };

  return (
    <div className="container">
      <div className="tabs">
        {/* <h3 id="tab1" onClick={unhide} className={"title" + getTabColor(id)}> */}
        <span id="tab1" onClick={unhide} className="title"></span>
        <span id="tab2" onClick={unhide} className="title"></span>
        <span id="tab3" onClick={unhide} className="title"></span>
      </div>

      {activeTab === "tab1" && (
        <div className="info-wrapper">
          <div className="info">
            <p className="info-subject">BLOG</p>
            <h4 className="info-title">
              Hot topics, guides and official Blizzard news
            </h4>
            <p className="info-description">
              Head to our articles and blog posts section and see what's
              trending at the moment.
            </p>
            <div className="link-to">
              <Link to="/blog">Read More &gt; </Link>
            </div>
          </div>
          <div className="info">
            <p className="info-subject">WHAT'S NEW</p>
            <h4 className="info-title-right">Stay tuned on the daily news</h4>
            <p className="info-description">
              Always be up to date on content and patches, as well as updated
              guides.
            </p>
          </div>
        </div>
      )}

      {activeTab === "tab2" && (
        <div className="info-wrapper">
          <div className="info">
            <p className="info-subject">ABOUT US</p>
            <h4 className="info-title">Real Gamers delivering what's new</h4>
            <p className="info-description">
              We are a community of players and content writers who share
              knowledge and work to deliver relevant content spread throught the
              main World of Warcraft communities.
            </p>
            <div className="link-to">
              <Link to="/about">Read More &gt; </Link>
            </div>
          </div>
          <div className="info">
            <p className="info-subject">WHAT WE DO</p>
            <h4 className="info-title-right">Big News in little time</h4>
            <p className="info-description">
              We gather the information across multiple sites to deliver you all
              the information in one place.
            </p>
          </div>
        </div>
      )}

      {activeTab === "tab3" && (
        <div className="info-wrapper">
          <div className="info">
            <p className="info-subject">CONTACT US</p>
            <h4 className="info-title">
              Are you looking to join our content writers or partnerships?
            </h4>
            <p className="info-description">
              Drop us you message and tell us about your background or business
              enquiries. We are also looking for contribuitors for Addon
              development in LUA.
            </p>
            <div className="link-to">
              <Link to="/contact">Contact Us &gt; </Link>
            </div>
          </div>
          <div className="info">
            <p className="info-subject">JOIN US</p>
            <h4 className="info-title-right">
              Let's talk, stay a while and listen
            </h4>
            <p className="info-description">
              If have something to say, then say it! This may be a great
              opportunity
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResumeTabs;
