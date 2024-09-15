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
  return (
    <div className={`container-layout ${isDarkMode ? "darkMode" : ""}`}>
      <aside className='sidebar'>
        <nav className='sidebar-nav'>
          <ul className='menu'>
            <li className='menu-item'>
              <div
                className={classNames("item", {
                  "item-dark": isDarkMode,
                  "item-light": !isDarkMode,
                })}
                onClick={() => navigate("home")}
              >
                <XIcon sx={{ fontSize: 30 }} />
              </div>
            </li>
            <li className='menu-item selected-menu-item'>
              <div
                className={classNames("item", {
                  "item-dark": isDarkMode,
                  "item-light": !isDarkMode,
                })}
                onClick={() => navigate("home")}
              >
                <HomeOutlinedIcon sx={{ fontSize: 30 }} />

                <p>Inicio</p>
              </div>
            </li>
            <li className='menu-item'>
              <div
                className={classNames("item", {
                  "item-dark": isDarkMode,
                  "item-light": !isDarkMode,
                })}
                onClick={() => navigate("explore")}
              >
                <SearchOutlinedIcon sx={{ fontSize: 30 }} />

                <p>Explorar</p>
              </div>
            </li>
            <li className='menu-item'>
              <div
                className={classNames("item", {
                  "item-dark": isDarkMode,
                  "item-light": !isDarkMode,
                })}
                onClick={() => navigate("notify")}
              >
                <NotificationsOutlinedIcon sx={{ fontSize: 30 }} />

                <p>Notificaciones</p>
              </div>
            </li>
            <li className='menu-item'>
              <div
                className={classNames("item", {
                  "item-dark": isDarkMode,
                  "item-light": !isDarkMode,
                })}
                onClick={() => navigate("messages")}
              >
                <MarkunreadOutlinedIcon sx={{ fontSize: 30 }} />
                <p>Mensajes</p>
              </div>
            </li>
            <li className='menu-item'>
              <div
                className={classNames("item", {
                  "item-dark": isDarkMode,
                  "item-light": !isDarkMode,
                })}
                onClick={() => navigate("grok")}
              >
                <BrowserNotSupportedOutlinedIcon sx={{ fontSize: 30 }} />
                <p>Grok</p>
              </div>
            </li>
            <li className='menu-item' onClick={() => navigate("lists")}>
              <div
                className={classNames("item", {
                  "item-dark": isDarkMode,
                  "item-light": !isDarkMode,
                })}
              >
                <ListAltOutlinedIcon sx={{ fontSize: 30 }} />
                <p>Listas</p>
              </div>
            </li>
            <li className='menu-item'>
              <div
                className={classNames("item", {
                  "item-dark": isDarkMode,
                  "item-light": !isDarkMode,
                })}
                onClick={() => navigate("saves")}
              >
                <BookmarkBorderOutlinedIcon sx={{ fontSize: 30 }} />
                <p>Guardados</p>
              </div>
            </li>
            <li className='menu-item'>
              <div
                className={classNames("item", {
                  "item-dark": isDarkMode,
                  "item-light": !isDarkMode,
                })}
                onClick={() => navigate("comunity")}
              >
                <GroupOutlinedIcon sx={{ fontSize: 30 }} />
                <p>Comunidades</p>
              </div>
            </li>
            <li className='menu-item'>
              <div
                className={classNames("item", {
                  "item-dark": isDarkMode,
                  "item-light": !isDarkMode,
                })}
                onClick={() => navigate("premium")}
              >
                <XIcon sx={{ fontSize: 30 }} />
                <p>Premium</p>
              </div>
            </li>
            <li className='menu-item'>
              <div
                className={classNames("item", {
                  "item-dark": isDarkMode,
                  "item-light": !isDarkMode,
                })}
                onClick={() => navigate("profile")}
              >
                <PersonOutlinedIcon sx={{ fontSize: 30 }} />
                <p>Perfil</p>
              </div>
            </li>
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
