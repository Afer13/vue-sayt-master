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
                    <h1 class="text-white animated zoomIn">Xidmətlər</h1>
                    <hr class="bg-white mx-auto mt-0" style="width: 90px;">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb justify-content-center">
                            <li class="breadcrumb-item"><router-link class="text-white" to="/" aria-label="Ana Səhifə">Ana
                                    Səhifə</router-link></li>
                            <li class="breadcrumb-item text-white active" aria-current="page">Xidmətlər</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </div>





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
            services: null,
            setting: this.$setting,
            loading: true
        }
    },
    created() {
        this.titleChange("Xidmətlər");
        let self = this;
        axios.get(`${self.$baseUrl}/api/get-services`)
            .then(function (response) {
                self.services = response.data.services;
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(()=>self.loading = false);
    }
}
</script>