<script setup>
    import axios from 'axios';
</script>
<template>
    <div class="container-xxl py-5 bg-primary hero-header mb-5">
        <div class="container my-5 py-5 px-lg-5">
            <div class="row g-5 py-5">
                <div class="col-12 text-center">
                    <h1 class="text-white animated zoomIn">Əlaqə</h1>
                    <hr class="bg-white mx-auto mt-0" style="width: 90px;">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb justify-content-center">
                            <li class="breadcrumb-item"><router-link class="text-white" to="/" aria-label="Ana Səhifə">Ana
                                    Səhifə</router-link></li>
                            <li class="breadcrumb-item text-white active" aria-current="page">Əlaqə</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </div>


    <!-- Contact Start -->
    <div class="container-xxl py-5">
        <div class="container px-lg-5">
            <div class="row justify-content-center">
                <div class="col-lg-6">
                    <div class="section-title position-relative text-center mb-5 pb-2 wow fadeInUp"
                        data-wow-delay="0.1s">
                        <h6 class="position-relative d-inline text-primary ps-4">Əlaqə</h6>
                        <h2 class="mt-2">İstənilən sual üçün əlaqə saxlayın</h2>
                    </div>
                    <div class="wow fadeInUp" data-wow-delay="0.3s">
                        <form @submit.prevent="submit" novalidate>
                            <div class="row g-3">
                                <div v-if="message" class="col-md-12 mb-2">
                                    <div :class="`alert ${statusClass}`">{{ message }}</div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-floating">
                                        <input v-model="formData.name" type="text" class="form-control" id="name"
                                            placeholder="Ad">
                                        <label for="name">Ad</label>
                                    </div>
                                    <div v-if="errors?.name" class="text-danger">{{ errors.name[0] }}</div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-floating">
                                        <input v-model="formData.email" type="email" class="form-control" id="email"
                                            placeholder="E-poçt">
                                        <label for="email">E-poçt</label>
                                    </div>
                                    <div v-if="errors?.email" class="text-danger">{{ errors.email[0] }}</div>
                                </div>
                                <div class="col-12">
                                    <div class="form-floating">
                                        <input v-model="formData.subject" type="text" class="form-control" id="subject"
                                            placeholder="Mövzu">
                                        <label for="subject">Mövzu</label>
                                    </div>
                                    <div v-if="errors?.subject" class="text-danger">{{ errors.subject[0] }}</div>
                                </div>
                                <div class="col-12">
                                    <div class="form-floating">
                                        <textarea v-model="formData.message" class="form-control"
                                            placeholder="Burada bir mesaj buraxın" id="message"
                                            style="height: 150px"></textarea>
                                        <label for="message">Mesaj</label>
                                    </div>
                                    <div v-if="errors?.message" class="text-danger">{{ errors.message[0] }}</div>
                                </div>
                                <div class="col-12">
                                    <button class="btn btn-primary w-100 py-3" type="submit"
                                        aria-label="Mesaj Göndər" ref="submitBtn">
                                        <span v-if="loading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                        Mesaj Göndər
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-lg-6">
                    <img class="img-fluid wow zoomIn" data-wow-delay="0.5s" src="/src/assets/img/contact.jpg"
                        alt="Əlaqə - SaytMaster">
                </div>
            </div>
        </div>
    </div>
    <!-- Contact End -->


</template>

<script>
export default {
    data() {
        return {
            formData: {
                name: '',
                email: '',
                subject: '',
                message: ''
            },
            message: '',
            statusClass: '',
            errors: [],
            loading:false,
        }
    },
    methods: {
        submit: function () {
            this.errors=[];
            this.message='';
            this.statusClass='';
            
            this.$refs.submitBtn.disabled = true;
            this.loading=true;
            let self = this;
            axios.post(`${self.$baseUrl}/api/contact/post`, self.formData)
                .then(function (response) {
                    self.message = response.data.message;
                    if (response.data.status == "success") {
                        self.statusClass = "alert-success";
                    }
                    else {
                        self.statusClass = "alert-danger";
                    }
                })
                .catch(function (error) {
                    if (error.response.status === 422) {
                        self.errors = error.response.data.errors
                    }
                }).finally(function(){
                    self.loading=false;
                    self.$refs.submitBtn.disabled = false;
                });
        }
    },
    created(){
        this.titleChange("Əlaqə");
    }
}
</script>