import ShadowBox from "./src/index.vue";

const Installer = {
  install(App) {
    App.component("ShadowBox", ShadowBox);
  }
}

export default Installer;
