import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./index.css";

function AccountNavigation() {
  const links = ["Notification", "Profile", "Files", "Settings", "E-Portfolio", "Shared Content", "The Hub", "Qwickly Course Tools"];
  const { pathname } = useLocation();

  return (
    <div className="wd-account-navigation list-group">
      {links.map((link) => (
        <Link
          key={link} // Use a unique key
          to={`/Kanbas/Account/${link}`} // Define the correct 'to' path
          className={`list-group-item ${pathname.includes(link) ? "active" : ""}`}
        >
          {link}
        </Link>
      ))}
    </div>
  );
}

export default AccountNavigation;
