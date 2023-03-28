import Button from "./src/index.vue";

const Installer = {
  install(App) {
    App.component("Button", Button);
  },
};

export default Installer;
