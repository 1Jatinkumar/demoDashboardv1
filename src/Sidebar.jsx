import { useGlobalContext } from "./GlobalContext";
import { links, social } from "./data";
import logo from "./logo.svg";
import { FaTimes } from "react-icons/fa";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <aside className={isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}>
      <div className="sidebar-container">
        <div className="sidebar-header">
          <img className="logo" src={logo} alt={logo} />
          <button onClick={closeSidebar} className=" header-btn ">
            <FaTimes />
          </button>
        </div>
        <div className="sidebar-links">
          <ul className="nav-links">
            {links.map((link) => {
              const { id, url, text, icon } = link;
              return (
                <li className="nav-link-item" key={id}>
                  <i>{icon}</i>
                  <a href={url}>
                    {text}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="bottom-links">
          <ul className="social-links">
            {social.map((link) => {
              const { id, url, icon } = link;
              return (
                <li className="social-link-item" key={id}>
                  <a href={url}>{icon}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
