import React, { useState } from "react";
import "./App.css";
import MainBody from "./component/MainBody.js";

function App() {
  const [viewHidden, setViewHidden] = useState({
    home: false,
    projects: true
  });

  return (
    <div className="App">
      <Header setViewHidden={setViewHidden} />
      <MainBody
        homeHidden={viewHidden.home}
        projectsHidden={viewHidden.projects}
      />
    </div>
  );
}

function Header({ setViewHidden }) {
  const [headerOpened, setHeaderOpened] = useState(false);

  const menuList = [
    {
      id: 1,
      title: "Home",
      viewHidden: {
        home: false,
        projects: true
      }
    },
    {
      id: 2,
      title: "Projects",
      viewHidden: {
        home: true,
        projects: false
      }
    },
    {
      id: 3,
      title: "About Me",
      viewHidden: {
        home: true,
        projects: true
      }
    }
  ];

  function toggleHeaderOpen() {
    setHeaderOpened(!headerOpened);
  }

  return (
    <div className={"header" + (headerOpened ? " opened" : "")}>
      <div className="header-upper-container">
        <div className="header-title">ruka.dev</div>
        <div
          className={"header-button" + (headerOpened ? " active" : "")}
          onClick={toggleHeaderOpen}
        >
          +
        </div>
      </div>
      <div
        className={"header-menu-container" + (headerOpened ? "" : " hidden")}
      >
        {menuList.map((menu) => {
          return (
            <div
              key={menu.id}
              onClick={() => {
                setViewHidden({ ...menu.viewHidden });
                toggleHeaderOpen();
              }}
            >
              {menu.title}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
