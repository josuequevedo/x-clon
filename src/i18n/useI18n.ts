export const useI18n = (): { gettext: (text: string) => string } => {
  const keys: { [key: string]: string } = {
    Inicio: "Home",
    Explorar: "Explorer",
    Notificaciones: "Notifications",
    Mensajes: "Messages",
    Grok: "Grok",
    Listas: "Lists",
    Guardados: "Saves",
    Premium: "Premium",
    Comunidades: "Communities",
    Perfil: "Profile",
  };
  const gettext = (text: string): string => {
    return keys[text] || text;
  };

  return { gettext };
};
