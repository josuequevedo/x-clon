import "./Layout.css";
import { LayoutProps } from "./types";
import Xicon from "../assets/Xicon.svg";
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

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='container-layout'>
      <aside className='sidebar'>
        <nav className='sidebar-nav'>
          <ul className='menu'>
            <li className='icon-layout'>
              <img src={Xicon} alt='Icon' width='100%' height='100%' />
            </li>
            <li className='menu-item selected-menu-item'>
              <HomeOutlinedIcon sx={{ fontSize: 30 }} />

              <a href=''>Inicio</a>
            </li>
            <li className='menu-item'>
              <SearchOutlinedIcon sx={{ fontSize: 30 }} />

              <a href=''>Explorar</a>
            </li>
            <li className='menu-item'>
              <NotificationsOutlinedIcon sx={{ fontSize: 30 }} />

              <a href=''>Notificaciones</a>
            </li>
            <li className='menu-item'>
              <MarkunreadOutlinedIcon sx={{ fontSize: 30 }} />
              <a href=''>Mensajes</a>
            </li>
            <li className='menu-item'>
              <BrowserNotSupportedOutlinedIcon sx={{ fontSize: 30 }} />
              <a href=''>Grok</a>
            </li>
            <li className='menu-item'>
              <ListAltOutlinedIcon sx={{ fontSize: 30 }} />
              <a href=''>Listas</a>
            </li>
            <li className='menu-item'>
              <BookmarkBorderOutlinedIcon sx={{ fontSize: 30 }} />
              <a href=''>Guardados</a>
            </li>
            <li className='menu-item'>
              <GroupOutlinedIcon sx={{ fontSize: 30 }} />
              <a href=''>Comunidades</a>
            </li>
            <li className='menu-item'>
              <img src={Xicon} alt='Icon' width='30' />
              <a href=''>Premium</a>
            </li>
            <li className='menu-item'>
              <PersonOutlinedIcon sx={{ fontSize: 30 }} />
              <a href=''>Perfil</a>
            </li>
            <li className='menu-item'>
              <DarkModeOutlinedIcon sx={{ fontSize: 30 }} />
              <a href=''>Drak mode</a>
            </li>
          </ul>
          <div className='post'>
            <a href=''>Postear</a>
          </div>
        </nav>
      </aside>
      <div className='children-layout-container'>{children}</div>
    </div>
  );
};
