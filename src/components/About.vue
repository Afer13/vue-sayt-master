<script setup>
import axios from 'axios';
import ApplecationShort from './ApplecationShort.vue';
import LoadingText from './LoadingText.vue';
</script>

<template>

    <div class="container-xxl py-5 bg-primary hero-header mb-5">
        <div class="container my-5 py-5 px-lg-5">
            <div class="row g-5 py-5">
                <div class="col-12 text-center">
                    <h1 class="text-white animated zoomIn">Haqqımızda</h1>
                    <hr class="bg-white mx-auto mt-0" style="width: 90px;">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb justify-content-center">
                            <li class="breadcrumb-item"><a class="text-white" href="/" aria-label="Ana Səhifə">Ana
                                    Səhifə</a></li>
                            <li class="breadcrumb-item text-white active" aria-current="page">Haqqımızda</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </div>



    <!-- About Start -->
    <div class="container-xxl py-5">
        <div class="container ">
            <div v-if="loading">
                <div class="section-title position-relative text-center mb-5 pb-2 wow fadeInUp" data-wow-delay="0.1s">
                    <h6 class="position-relative d-inline text-primary ps-4">Haqqımızda</h6>
                </div>
                <loading-text></loading-text>
            </div>
            <div v-else class="px-lg-5">
                <div class="row g-5">
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
                            <a v-if="setting.facebook" class="btn btn-outline-primary btn-square me-3" target="_blank"
                                :href="setting.facebook" aria-label="facebook link"><i
                                    class="fab fa-facebook-f"></i></a>
                            <a v-if="setting.twitter" class="btn btn-outline-primary btn-square me-3" target="_blank"
                                :href="setting.twitter" aria-label="twitter link"><i class="fab fa-twitter"></i></a>
                            <a v-if="setting.instagram" class="btn btn-outline-primary btn-square me-3" target="_blank"
                                :href="setting.instagram" aria-label="instagram link"><i
                                    class="fab fa-instagram"></i></a>
                            <a v-if="setting.youtube" class="btn btn-outline-primary btn-square me-3" target="_blank"
                                :href="setting.youtube" aria-label="youtube link"><i class="fab fa-youtube"></i></a>
                            <a v-if="setting.whatsapp" class="btn btn-outline-primary btn-square me-3" target="_blank"
                                :href="setting.whatsapp" aria-label="whatsapp link"><i class="fab fa-whatsapp"></i></a>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <img class="img-fluid wow zoomIn" data-wow-delay="0.5s"
                            :src="`${$baseUrl}/storage/${about.data.image_url}`" alt="Haqqımızda - SaytMaster">
                    </div>
                </div>
                <div class="row g-5">
                    <div class="col-lg-6">
                        <img class="img-fluid wow zoomIn about-2" data-wow-delay="0.5s"
                            src="/src/assets/img/about-2.webp" alt="Haqqımızda 2 - SaytMaster">
                    </div>
                    <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                        <p class="mb-4" v-html="about.data.content"></p>
                    </div>

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
            setting: this.$setting,
            loading: true
        }
    },
    created() {
        this.titleChange("Haqqımızda");

        let self = this;
        axios.get(`${self.$baseUrl}/api/get-about`)
            .then(function (response) {
                self.about = response.data.about;
                self.services = response.data.services;
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(() => self.loading = false);
    }
}
</script>