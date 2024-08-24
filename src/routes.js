import { createRouter, createWebHistory } from "vue-router";
import Index from "./components/Index.vue";
import About from "./components/About.vue";
import Services from "./components/Services.vue";
import Portfolios from "./components/Portfolios.vue";
import Posts from "./components/Posts.vue";
import Contact from "./components/Contact.vue";
import Applecation from "./components/Applecation.vue";
import PostDetal from "./components/PostDetal.vue";
import ServiceDetal from "./components/ServiceDetal.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Index },
    { path: "/about-us", component: About },
    { path: "/services", component: Services },
    { path: "/portfolios", component: Portfolios },
    { path: "/blog", component: Posts },
    { path: "/contact-us", component: Contact },
    { path: "/application", component: Applecation },
    { path: "/blog/:slug", component: PostDetal },
    { path: "/services/:slug", component: ServiceDetal },
  ],
});

export default router;
