import Components from "./components";

const Installer = {
  install(App) {
    Components.forEach((c) => {
      App.use(c);
    });
  },
};

export default Installer;
