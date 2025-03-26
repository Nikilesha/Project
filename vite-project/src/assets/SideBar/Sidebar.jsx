import { useState } from "react";
import "./app.css";

function Sidebar() {
  // State to track active item
  const [activeItem, setActiveItem] = useState("Dashboard");

  // Menu items data
  const menuItems = [
    { name: "Dashboard", icon: "home", link: "#" },
    { name: "Stocks", icon: "chart", link: "#" },
    { name: "F&O", icon: "clock", link: "#" },
    { name: "Mutual Funds", icon: "star", link: "#" },
    { name: "Portfolio", icon: "grid", link: "#" },
    { name: "News", icon: "file-text", link: "#" },
    { name: "Watchlist", icon: "eye", link: "#" },
    { name: "Notifications", icon: "bell", link: "#" },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="logo">
          <div className="logo-icon">T</div>
          <span className="logo-text">Trade Plus</span>
        </div>
      </div>

      <nav className="sidebar-nav">
        <ul>
          {menuItems.map((item) => (
            <li
              key={item.name}
              className={activeItem === item.name ? "active" : ""}
              onClick={() => setActiveItem(item.name)}
            >
              <a href={item.link}>
                <span>{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="sidebar-footer">
        <div className="user-profile">
          <div className="user-avatar">JP</div>
          <div className="user-info">
            <p className="user-name">John Patel</p>
            <p className="user-status">Premium Member</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
