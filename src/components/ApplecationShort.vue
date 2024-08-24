<script setup>
import axios from 'axios';
</script>

<template>
    <div class="container-xxl bg-primary newsletter my-5 wow fadeInUp" data-wow-delay="0.1s">
        <div class="container px-lg-5">
            <div class="row align-items-center" style="height: 250px;">
                <form class="col-12 col-md-6" @submit.prevent="submit" novalidate>
                    <h3 class="text-white">Başlamağa hazırsınız?</h3>
                    <small class="text-white">Sizə daha yaxşı xidmət göstərmək üçün əlaqə nömrənizi daxil edin.</small>
                    <div v-if="message" class="col-md-12 mb-2">
                        <div :class="`alert ${statusClass}`">{{ message }}</div>
                    </div>
                    <div class="position-relative w-100 mt-3">
                        <input v-model="formData.phone_number" class="form-control border-0 rounded-pill w-100 ps-4 pe-5"
                            type="text" placeholder="Əlaqə nömrənizi daxil edin" 
                            style="height: 48px;">
                        <button class="btn shadow-none position-absolute top-0 end-0 mt-1 me-2" aria-label="Müraciət" ref="submitBtn">
                            <span v-if="loading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            <i v-else class="fa fa-paper-plane text-primary fs-4"></i>
                        </button>
                    </div>
                    <div v-if="errors?.phone_number" class="text-danger">{{ errors.phone_number[0] }}</div>
                </form>
                <div class="col-md-6 text-center mb-n5 d-none d-md-block">
                    <img class="img-fluid mt-5" style="height: 250px;" src="/src/assets/img/newsletter.png"
                        alt="Müraciət - Sayt Master">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            formData: {
                phone_number: '',
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
            axios.post(`${self.$baseUrl}/api/application-short/post`, self.formData)
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
}
</script>