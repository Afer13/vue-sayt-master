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
                    <h1 class="text-white animated zoomIn">Blog</h1>
                    <hr class="bg-white mx-auto mt-0" style="width: 90px;">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb justify-content-center">
                            <li class="breadcrumb-item"><router-link class="text-white" to="/" aria-label="Ana Səhifə">Ana
                                    Səhifə</router-link></li>
                            <li class="breadcrumb-item text-white active" aria-current="page">Blog</li>
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
                    <Bootstrap5Pagination :data="postsData" @pagination-change-page="getResults" />
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
            posts: null,
            postsData: null,
            setting: this.$setting,
            loading: true
        }
    },
    methods: {
        getResults: function (page = 1) {
            let self = this;
            axios.get(`${self.$baseUrl}/api/get-posts?page=${page}`)
                .then(function (response) {
                    self.posts = response.data.posts.data;
                    self.postsData = response.data.posts;
                })
                .catch(function (error) {
                    console.log(error);
                })
                .finally(()=>self.loading = false);
        },
        formatDate: function (dateString) {
            const date = new Date(dateString);
            const day = String(date.getDate()).padStart(2, '0'); // Gün
            const month = String(date.getMonth() + 1).padStart(2, '0'); // Ay
            const year = date.getFullYear(); // İl
            return `${day}.${month}.${year}`;
        },
    },
    created() {
        this.titleChange("Blog");
        this.getResults();
    }
}
</script>