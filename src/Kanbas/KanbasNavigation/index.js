import { Link, useLocation } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { RiDashboard3Fill } from "react-icons/ri";
import { FaBook, FaInbox , FaHistory, FaWindowRestore , FaQuestion, FaHSquare} from "react-icons/fa";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import "./index.css";
import Logo from "./nuuuu.png"

function KanbasNavigation() {
  const links = ["NU Logo","Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Help"];

  const linkToIconMap = {



    NULogo:  <img className="image" src={Logo} style={{width:'200%'}} alt='logo'/>,
    Account: <BiUserCircle className="wd-icon" />,
    Dashboard: <RiDashboard3Fill className="wd-icon" />,
    Courses: <FaBook className="wd-icon" />,
    Calendar: <BsFillCalendar2WeekFill className="wd-icon" />,

    Inbox: <FaInbox className="wd-icon" />,
    History:<FaHistory className="wd-icon" />, 
    Studio: <FaWindowRestore className="wd-icon" />, 
    Help:<FaQuestion className="wd-icon"/>, 

   
  };

  const { pathname } = useLocation();
  return (
    <div className="list-group wd-kanbas-navigation" >
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/${link}`}
          className={`list-group-item ${pathname.includes(link) && "active"}`}
        >
          {linkToIconMap[link]}
          <br/>
          {link}
        </Link>
      ))}
    </div>
  );
}
export default KanbasNavigation;