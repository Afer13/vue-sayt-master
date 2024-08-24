<script setup>
import axios from 'axios';
import LoadingText from './LoadingText.vue';
import { Bootstrap5Pagination } from 'laravel-vue-pagination';
</script>

<template>

    <div class="container-xxl py-5 bg-primary hero-header mb-5">
        <div class="container my-5 py-5 px-lg-5">
            <div class="row g-5 py-5">
                <div class="col-12 text-center">
                    <h1 class="text-white animated zoomIn">İşlərimiz</h1>
                    <hr class="bg-white mx-auto mt-0" style="width: 90px;">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb justify-content-center">
                            <li class="breadcrumb-item"><router-link class="text-white" to="/" aria-label="Ana Səhifə">Ana
                                    Səhifə</router-link></li>
                            <li class="breadcrumb-item text-white active" aria-current="page">İşlərimiz</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </div>


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
                    <Bootstrap5Pagination :data="portfoliosData" @pagination-change-page="getResults" />
                </div>
            </div>
        </div>
    </div>
    <!-- Portfolio End -->

</template>

<script>
export default {
    components: {
        'loading-text': LoadingText
    },
    data() {
        return {
            portfolios: null,
            portfoliosData: null,
            setting: this.$setting,
            loading: true
        }
    },
    methods: {
        getResults: function (page = 1) {
            let self = this;
            axios.get(`${self.$baseUrl}/api/get-portfolios?page=${page}`)
                .then(function (response) {
                    self.portfolios = response.data.portfolios.data;
                    self.portfoliosData = response.data.portfolios;
                })
                .catch(function (error) {
                    console.log(error);
                })
                .finally(()=>self.loading = false);
        }
    },
    created() {
        this.titleChange("İşlərimiz");
        this.getResults();
    }
}
</script>