import "./Layout.css";
import { LayoutProps } from "./types";
import XIcon from "@mui/icons-material/X";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import MarkunreadOutlinedIcon from "@mui/icons-material/MarkunreadOutlined";
import BrowserNotSupportedOutlinedIcon from "@mui/icons-material/BrowserNotSupportedOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { useNavigation } from "../context/NavigationContext";
import { useDarkMode } from "../context/useDarkMode";
import classNames from "classnames";

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { navigate } = useNavigation();
  const { isDarkMode, handleDarkMode } = useDarkMode();

  const menuItems = [
    {
      icon: <XIcon sx={{ fontSize: 30 }} />,
      text: "",
      route: "home",
    },
    {
      icon: <HomeOutlinedIcon sx={{ fontSize: 30 }} />,
      text: "Inicio",
      route: "home",
    },
    {
      icon: <SearchOutlinedIcon sx={{ fontSize: 30 }} />,
      text: "Explorar",
      route: "explore",
    },
    {
      icon: <NotificationsOutlinedIcon sx={{ fontSize: 30 }} />,
      text: "Notificaciones",
      route: "notify",
    },
    {
      icon: <MarkunreadOutlinedIcon sx={{ fontSize: 30 }} />,
      text: "Mensajes",
      route: "messages",
    },
    {
      icon: <BrowserNotSupportedOutlinedIcon sx={{ fontSize: 30 }} />,
      text: "Grok",
      route: "grok",
    },
    {
      icon: <ListAltOutlinedIcon sx={{ fontSize: 30 }} />,
      text: "Listas",
      route: "lists",
    },
    {
      icon: <BookmarkBorderOutlinedIcon sx={{ fontSize: 30 }} />,
      text: "Guardados",
      route: "saves",
    },
    {
      icon: <XIcon sx={{ fontSize: 30 }} />,
      text: "Premium",
      route: "premium",
    },
    {
      icon: <GroupOutlinedIcon sx={{ fontSize: 30 }} />,
      text: "Comunidades",
      route: "comunity",
    },
    {
      icon: <PersonOutlinedIcon sx={{ fontSize: 30 }} />,
      text: "Perfil",
      route: "profile",
    },
  ];

  return (
    <div className={`container-layout ${isDarkMode ? "darkMode" : ""}`}>
      <aside className='sidebar'>
        <nav className='sidebar-nav'>
          <ul className='menu'>
            {menuItems &&
              menuItems.map((item, index) => {
                return (
                  <li key={index} className='menu-item'>
                    <div
                      className={classNames("item", {
                        "item-dark": isDarkMode,
                        "item-light": !isDarkMode,
                      })}
                      onClick={() => navigate(item.route)}
                    >
                      {item.icon}
                      <p>{item.text}</p>
                    </div>
                  </li>
                );
              })}
            <li className='menu-item'>
              <div
                className={classNames("item", {
                  "item-dark": isDarkMode,
                  "item-light": !isDarkMode,
                })}
                onClick={handleDarkMode}
              >
                {isDarkMode ? (
                  <LightModeOutlinedIcon sx={{ fontSize: 30 }} />
                ) : (
                  <DarkModeOutlinedIcon sx={{ fontSize: 30 }} />
                )}
                <p>{isDarkMode ? "Light mode" : "Drak mode"}</p>
              </div>
            </li>
          </ul>
          <div className='post'>
            <span>Postear</span>
          </div>
        </nav>
      </aside>
      <div className='children-layout-container'>{children}</div>
    </div>
  );
};
