import Pagination from "./src/index.vue";

const Installer = {
  install(App) {
    App.component("Pagination", Pagination);
  },
};

export default Installer;
