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
                    <h1 class="text-white animated zoomIn">{{ post.title }}</h1>
                    <hr class="bg-white mx-auto mt-0" style="width: 90px;">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb justify-content-center">
                            <li class="breadcrumb-item"><router-link class="text-white" to="/" aria-label="Ana Səhifə">Ana
                                    Səhifə</router-link></li>
                            <li class="breadcrumb-item"><router-link class="text-white" to="/blog" aria-label="Blog">Blog</router-link>
                            </li>
                            <li class="breadcrumb-item text-white active" aria-current="page">Ətraflı</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </div>

    <div class="container-xxl py-5">
        <div class="container px-lg-5">
            <div class="row g-5">

                <div class="col-lg-12 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="row g-3">
                        <div class="col-sm-3">
                            <h6 class="mb-3"><i class="fas fa-calendar-alt text-primary me-2"></i> Tarix : {{
                                formatDate(post.created_at) }}</h6>
                        </div>
                        <div class="col-sm-3">
                            <h6 class="mb-3"><i class="far fa-eye text-primary me-2"></i> Baxış sayı : {{ post.views }}
                            </h6>
                        </div>
                    </div>
                    <p class="mb-4">{{ post.content_short }}</p>
                </div>
                <div class="col-lg-12 d-a-j">
                    <img class="img-fluid wow zoomIn" data-wow-delay="0.5s"
                        :src="`${$baseUrl}/storage/${post.image_url}`" :alt="`${post.title} - SaytMaster`">
                </div>
                <div class="col-lg-12 wow fadeInUp" data-wow-delay="0.1s">
                    <p class="mb-4" v-html="post.content"></p>
                </div>

            </div>
        </div>
    </div>

    <applecation-short></applecation-short>


    <div class="container-xxl py-5">

        <div class="container">
            <div v-if="loading">
                <div class="section-title position-relative text-center mb-5 pb-2 wow fadeInUp" data-wow-delay="0.1s">
                    <h6 class="position-relative d-inline text-primary ps-4">Blog</h6>
                    <h2 class="mt-2">Digər məlumat və yeniliklər</h2>
                </div>
                <loading-text></loading-text>
            </div>
            <div v-else class="px-lg-5">
                <div class="section-title position-relative text-center mb-5 pb-2 wow fadeInUp" data-wow-delay="0.1s">
                    <h6 class="position-relative d-inline text-primary ps-4">Blog</h6>
                    <h2 class="mt-2">Digər məlumat və yeniliklər</h2>
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
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {
        'applecation-short': ApplecationShort,
        'loading-text': LoadingText
    },
    data() {
        return {
            post:null,
            posts: null,
            loading: true
        }
    },
    methods:{
        formatDate: function (dateString) {
            const date = new Date(dateString);
            const day = String(date.getDate()).padStart(2, '0'); // Gün
            const month = String(date.getMonth() + 1).padStart(2, '0'); // Ay
            const year = date.getFullYear(); // İl
            return `${day}.${month}.${year}`;
        },
    },
    created() {
        

        let self = this;
        axios.get(`${self.$baseUrl}/api/get-post/${self.$route.params.slug}`)
            .then(function (response) {
                self.post = response.data.post;
                self.posts = response.data.posts;

                self.titleChange(self.post.title);

            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(()=>self.loading = false);
    }
}
</script>