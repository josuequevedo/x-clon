import "./Layout.css";
import { LayoutProps } from "./types";

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='container-layout'>
      <aside className='sidebar'>
        <nav className='sidebar-nav'>
          <ul className='menu'>
            <li className='menu-item selected-menu-item'>
              <a href=''>Inicio</a>
            </li>
            <li className='menu-item'>
              <a href=''>Explorar</a>
            </li>
            <li className='menu-item'>
              <a href=''>Notificaciones</a>
            </li>
            <li className='menu-item'>
              <a href=''>Mensajes</a>
            </li>
            <li className='menu-item'>
              <a href=''>Grok</a>
            </li>
            <li className='menu-item'>
              <a href=''>Listas</a>
            </li>
            <li className='menu-item'>
              <a href=''>Comunidades</a>
            </li>
            <li className='menu-item'>
              <a href=''>Premium</a>
            </li>
            <li className='menu-item'>
              <a href=''>Perfil</a>
            </li>
            <li className='menu-item'>
              <a href=''>Drak mode</a>
            </li>
          </ul>
        </nav>
      </aside>
      <div className='children-layout-container'>{children}</div>
    </div>
  );
};
