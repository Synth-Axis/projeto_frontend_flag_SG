import "./SumaryTabs.scss";
import Button from "../Components/Button";
import { useState } from "react";

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
            <p className="info-subject">ABOUT US</p>
            <h4 className="info-title">
              We are a community of players and content writers who share
              knowledge and work to deliver relevant content spread throught the
              main World of Warcraft communities.
            </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              praesentium veritatis nihil ipsam tempora harum corrupti deserunt
              obcaecati vero impedit, hic repellat cupiditate dolorem
              repellendus velit excepturi sapiente maiores perspiciatis!
            </p>
            <Button text="Read More >" />
          </div>
        </div>
      )}

      {activeTab === "tab2" && (
        <div className="info-wrapper">
          <div className="info">
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </p>
            <Button text="Read More >" />
          </div>
        </div>
      )}

      {activeTab === "tab3" && (
        <div className="info-wrapper">
          <div className="info">
            <p className="info-subject">ABOUT US</p>
            <h4 className="info-title">
              We are a community of players and content writers who share
              knowledge and work to deliver relevant content spread throught the
              main World of Warcraft communities.
            </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              praesentium veritatis nihil ipsam tempora harum corrupti deserunt
              obcaecati vero impedit, hic repellat cupiditate dolorem
              repellendus velit excepturi sapiente maiores perspiciatis!
            </p>
            <Button text="Read More >" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ResumeTabs;
