<script setup>
import ApplecationShort from './ApplecationShort.vue';
import LoadingText from './LoadingText.vue';
import axios from 'axios';
</script>

<template>
    <div class="container-xxl py-5 bg-primary hero-header mb-5">
        <div class="container my-5 py-5 px-lg-5">
            <div class="row g-5 py-5">
                <div class="col-lg-6 text-center text-lg-start">
                    <h1 class="text-white mb-4 animated zoomIn">Veb Sayt Hazırlama Xidmətləri ilə İşinizi Sürətlə
                        Genişləndirin</h1>
                    <p class="text-white pb-3 animated zoomIn">Bizim peşəkar komandamız sizin üçün yüksək keyfiyyətli və
                        funksional veb saytlar hazırlayır. Müasir texnologiyalar və kreativ dizaynlarla işinizin
                        rəqəmsal
                        dünyada uğur qazanmasını təmin edirik. Keyfiyyətli və effektiv həllər üçün bizə müraciət edin.
                    </p>
                    <router-link to="/application" class="btn btn-light py-sm-3 px-sm-5 rounded-pill me-3 animated slideInLeft"
                        aria-label="Layihəniz var?">Layihəniz
                        var?</router-link>
                    <router-link to="/portfolios"
                        class="btn btn-outline-light py-sm-3 px-sm-5 rounded-pill animated slideInRight"
                        aria-label="İşlərimiz">İşlərimiz</router-link>
                </div>
                <div class="col-lg-6 text-center text-lg-start">
                    <img class="img-fluid d-none d-md-block" src="/src/assets/img/title-img.png" alt="">
                </div>
            </div>
        </div>
    </div>
    <!-- About Start -->
    <div class="container-xxl py-5">
        <div class="container px-lg-5">
            <div v-if="loading">
                <div class="section-title position-relative text-center mb-5 pb-2 wow fadeInUp" data-wow-delay="0.1s">
                    <h6 class="position-relative d-inline text-primary ps-4">Haqqımızda</h6>
                </div>
                <loading-text></loading-text>
            </div>
            <div v-else class="row g-5">
                <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="section-title position-relative mb-4 pb-2">
                        <h6 class="position-relative text-primary ps-4">Haqqımızda</h6>
                        <h2 class="mt-2">{{ about.data.title }}</h2>
                    </div>
                    <p class="mb-4">{{ about.data.content_short }}</p>
                    <div class="row g-3">
                        <div v-for="{ index, itemGroup } in about.itemsGroup" :key="index" class="col-sm-6">
                            <p v-for="{ ind, item } in itemGroup" :key="ind" class="mb-3 h6"><i
                                    class="fa fa-check text-primary me-2"></i>{{ item }}</p>
                        </div>

                    </div>
                    <div class="d-flex align-items-center mt-4">
                        <a class="btn btn-primary rounded-pill px-4 me-3" href="/about-us" aria-label="Haqqımızda">Daha
                            Ətraflı</a>
                        <a v-if="setting.facebook" class="btn btn-outline-primary btn-square me-3" target="_blank"
                            :href="setting.facebook" aria-label="facebook link"><i class="fab fa-facebook-f"></i></a>
                        <a v-if="setting.twitter" class="btn btn-outline-primary btn-square me-3" target="_blank"
                            :href="setting.twitter" aria-label="twitter link"><i class="fab fa-twitter"></i></a>
                        <a v-if="setting.instagram" class="btn btn-outline-primary btn-square me-3" target="_blank"
                            :href="setting.instagram" aria-label="instagram link"><i class="fab fa-instagram"></i></a>
                        <a v-if="setting.youtube" class="btn btn-outline-primary btn-square me-3" target="_blank"
                            :href="setting.youtube" aria-label="youtube link"><i class="fab fa-youtube"></i></a>
                        <a v-if="setting.whatsapp" class="btn btn-outline-primary btn-square me-3" target="_blank"
                            :href="setting.whatsapp" aria-label="whatsapp link"><i class="fab fa-whatsapp"></i></a>
                    </div>
                </div>
                <div class="col-lg-6">
                    <img class="img-fluid wow zoomIn" data-wow-delay="0.5s"
                        :src="`${$baseUrl}/storage/${about.data.image_url}`" alt="Haqqımızda - Sayt Master">
                </div>
            </div>
        </div>
    </div>
    <!-- About End -->


    <applecation-short></applecation-short>


    <!-- Service Start -->
    <div class="container-xxl py-5">
        <div class="container">
            <div v-if="loading">
                <div class="section-title position-relative text-center mb-5 pb-2 wow fadeInUp" data-wow-delay="0.1s">
                    <h6 class="position-relative d-inline text-primary ps-4">Bizim xidmətlərimiz</h6>
                    <h2 class="mt-2">Hansı Həlləri Təqdim Edirik</h2>
                </div>
                <loading-text></loading-text>
            </div>
            <div v-else class="px-lg-5">
                <div class="section-title position-relative text-center mb-5 pb-2 wow fadeInUp" data-wow-delay="0.1s">
                    <h6 class="position-relative d-inline text-primary ps-4">Bizim xidmətlərimiz</h6>
                    <h2 class="mt-2">Hansı Həlləri Təqdim Edirik</h2>
                </div>
                <div class="row g-4">
                    <div v-for="service in services" :key="service.id" class="col-lg-4 col-md-6 wow zoomIn"
                        data-wow-delay="0.1s">
                        <div class="service-item d-flex flex-column justify-content-center text-center rounded">
                            <div class="service-icon flex-shrink-0">
                                <i :class="`${service.icon} fa-2x`"></i>
                            </div>
                            <h5 class="mb-3">{{ service.title }}</h5>
                            <p>{{ service.content_short }}</p>
                            <router-link class="btn px-3 mt-auto mx-auto" :to="`/services/${service.slug}`"
                                :aria-label="service.title">Daha Ətraflı</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Service End -->


    <!-- Service Start -->
    <div class="container-xxl py-5">
        <div class="container">
            <div v-if="loading">
                <div class="section-title position-relative text-center mb-5 pb-2 wow fadeInUp" data-wow-delay="0.1s">
                    <h6 class="position-relative d-inline text-primary ps-4">Blog</h6>
                    <h2 class="mt-2">Məlumat və Yeniliklər</h2>
                </div>
                <loading-text></loading-text>
            </div>
            <div v-else class="px-lg-5">
                <div class="section-title position-relative text-center mb-5 pb-2 wow fadeInUp" data-wow-delay="0.1s">
                    <h6 class="position-relative d-inline text-primary ps-4">Blog</h6>
                    <h2 class="mt-2">Məlumat və Yeniliklər</h2>
                </div>
                <div class="row g-4">
                    <div v-for="post in posts" :key="post.id" class="col-lg-4 col-md-6 wow zoomIn"
                        data-wow-delay="0.1s">
                        <div
                            class="service-item post-item d-flex flex-column justify-content-center text-center rounded">
                            <div class="flex-shrink-0">
                                <img class="service-title-image" :src="`${$baseUrl}/storage/${post.image_url}`"
                                    alt="Xidmətlər - SaytMaster">
                            </div>
                            <h5 class="mb-3 text-align-start">{{ post.title }}</h5>
                            <p class="text-align-start">{{ post.content_short }}</p>
                            <div class="param-box">
                                <div class="param">
                                    <i class="fas fa-calendar-alt"></i>{{ formatDate(post.created_at) }}
                                </div>
                                <div class="param">
                                    <i class="far fa-eye"></i> {{ post.views }}
                                </div>
                            </div>
                            <router-link class="btn px-3 mt-auto mx-auto" :to="`/blog/${post.slug}`"
                                :aria-label="post.title">Daha
                                Ətraflı</router-link>
                        </div>
                    </div>
                </div>
                <div class="d-a-j mt-3">
                    <router-link class="btn btn-outline-primary" to="/blog" aria-label="Blog">Digər Yeniliklər <i
                            class="fas fa-arrow-right ml-2"></i></router-link>
                </div>
            </div>
        </div>
    </div>
    <!-- Service End -->


    <!-- Portfolio Start -->
    <div class="container-xxl py-5">
        <div class="container ">
            <div v-if="loading">
                <div class="section-title position-relative text-center mb-5 pb-2 wow fadeInUp" data-wow-delay="0.1s">
                    <h6 class="position-relative d-inline text-primary ps-4">İşlərimiz</h6>
                    <h2 class="mt-2">Gördüyümüz işlər</h2>
                </div>
                <loading-text></loading-text>
            </div>
            <div v-else class="px-lg-5">
                <div class="section-title position-relative text-center mb-5 pb-2 wow fadeInUp" data-wow-delay="0.1s">
                    <h6 class="position-relative d-inline text-primary ps-4">İşlərimiz</h6>
                    <h2 class="mt-2">Gördüyümüz işlər</h2>
                </div>
                <div class="row g-4 portfolio-container">
                    <div v-for="portfolio in portfolios" :key="portfolio.id"
                        class="col-lg-4 col-md-6 portfolio-item first wow zoomIn" data-wow-delay="0.1s">
                        <div class="position-relative rounded overflow-hidden">
                            <img class="img-fluid w-100" :src="`${$baseUrl}/storage/${portfolio.image_url}`"
                                :alt="`${portfolio.title} - SaytMaster`">
                            <div class="portfolio-overlay">
                                <div class="mt-auto">
                                    <span class="h5 d-block text-white mt-1 mb-0">{{ portfolio.title }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Portfolio End -->
</template>

<script>
export default {
    components: {
        'applecation-short': ApplecationShort,
        'loading-text': LoadingText
    },
    data() {
        return {
            about: null,
            services: null,
            posts: null,
            portfolios: null,
            setting: this.$setting,
            loading: true
        }
    },
    methods: {
        formatDate: function (dateString) {
            const date = new Date(dateString);
            const day = String(date.getDate()).padStart(2, '0'); // Gün
            const month = String(date.getMonth() + 1).padStart(2, '0'); // Ay
            const year = date.getFullYear(); // İl
            return `${day}.${month}.${year}`;
        },
    },
    created() {

        this.titleChange("Veb Saytların Hazırlanması");

        let self = this;
        axios.get(`${self.$baseUrl}/api/get-index-data`)
            .then(function (response) {
                self.about = response.data.about;
                self.services = response.data.services;
                self.posts = response.data.posts;
                self.portfolios = response.data.portfolios;
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(()=>self.loading = false);
    }
}
</script>
