import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import commonUI from "common-components";
import "common-components/dist/index.css";

createApp(App).use(commonUI).mount("#app");
