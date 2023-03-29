import Components from "./components";
import "element-plus/dist/index.css";

const Installer = {
  install(App) {
    Components.forEach((c) => {
      App.use(c);
    });
  },
};

export default Installer;
