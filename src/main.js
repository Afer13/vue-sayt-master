import { createApp } from 'vue'
import App from './App.vue';
import setting from './mixsin/setting';
// import VueMeta from 'vue-meta';
import Routes from './routes';

const app = createApp(App);
app.config.globalProperties.$setting=setting.data.data;
app.config.globalProperties.$baseUrl="https://saytmaster.rf.gd";
app.config.globalProperties.titleChange=function(title){
    document.title = `${title} | SaytMaster`;
};
// app.use(VueMeta);
app.use(Routes);
app.mount('#app');
