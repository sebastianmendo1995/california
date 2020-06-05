import React from "react";

import "./main.css";

class MainPage extends React.Component {
  render() {
    return (
      <div id="wrap">
        <div className="main-page-content">
          <div className="container-large signed-out-main">
            <div className="text-content">
              <h1>Hospedarse en lima nunca fue tan barato</h1>
              <p>Para que gastes tu dinero donde realmente lo necesites</p>
            </div>
            <div className="shot-content">
              <div className="shot-image"></div>
              <a
                target="_blank"
                href="https://www.freepik.com/free-photos-vectors/business"
              >
                Business vector created by pch.vector - www.freepik.com
              </a>
            </div>
          </div>
        </div>

        <div className="top-rooms">
          
        </div>
      </div>
    );
  }
}

export default MainPage;
