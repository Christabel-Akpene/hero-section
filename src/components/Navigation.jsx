import { useState } from "react";

const Navigation = () => {
    const [open, setOpen] = useState(false);
    const [showFeatures, setShowFeatures] = useState(false);
    const [showCompany, setShowCompany] = useState(false);

  function openNavBar(){
      setOpen(!open)
  }

  function closeNavBar(){
      setOpen(false);
  }

  function openFeatures(){
    setShowFeatures(!showFeatures)
  }
  function openCompany(){
    setShowCompany(!showCompany)
  }
  return (
    <header className="header">
      <div className="logo">
        <img src="/images/logo.svg" alt="Logo" />
      </div>
      <div className={open ? "navigation showNav" : "navigation"}>
        <div className="close" onClick={closeNavBar}>
            <img src="/images/icon-close-menu.svg" alt="close icon" />
        </div>
        <nav className="nav">
          <ul>
            <li className={showFeatures ? "expanded" : ""} onClick={openFeatures}>
              <a href="#">
                Features
                <img src="/images/icon-arrow-down.svg" alt="Down Arrow" />
              </a>
              <ul className="submenu">
                <li>
                  <a href="#">
                    <img src="/images/icon-todo.svg" alt="Todo Icon" /> Todo
                    List
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="/images/icon-calendar.svg" alt="Calendar Icon" />{" "}
                    Calendar
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src="/images/icon-reminders.svg"
                      alt="Reminders Icon"
                    />
                    Reminders
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="/images/icon-planning.svg" alt="Planning Icon" />
                    Planning
                  </a>
                </li>
              </ul>
            </li>

            <li className={showCompany ? "expanded" : ""}  onClick={openCompany}>
              <a href="#">
                Company
                <img src="/images/icon-arrow-down.svg" alt="Down Arrow" />
              </a>
              <ul className="submenu">
                <li>
                  <a href="#">History</a>
                </li>
                <li>
                  <a href="#">Our Team</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
              </ul>
            </li>

            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </nav>

        <div className="buttons">
          <button>Login</button>
          <button>Register</button>
        </div>

      </div>

      <div className="open" onClick={openNavBar}>
        <img src="/images/icon-menu.svg" alt="menu bar" />
      </div>

    </header>
  );
};

export default Navigation;
