import { useNavigation } from "../context/NavigationContext";
import { Comunity } from "../pages/Comunity";
import { Explore } from "../pages/Explore";
import { Grok } from "../pages/Grok";
import { Home } from "../pages/Home";
import { Lists } from "../pages/Lists";
import { Messages } from "../pages/Messages";
import { Notifys } from "../pages/Notifys";
import { Premium } from "../pages/Premium";
import { Profile } from "../pages/Profile";
import { Saves } from "../pages/Saves";

export const Routes: React.FC = () => {
  const { currentView } = useNavigation();

  switch (currentView) {
    case "explore":
      return <Explore />;
    case "notify":
      return <Notifys />;
    case "messages":
      return <Messages />;
    case "grok":
      return <Grok />;
    case "lists":
      return <Lists />;
    case "saves":
      return <Saves />;
    case "comunity":
      return <Comunity />;
    case "premium":
      return <Premium />;
    case "profile":
      return <Profile />;
    default:
      return <Home />;
  }
};
