<script setup>
import axios from 'axios';
</script>

<template>
    <div class="container-xxl py-5 bg-primary hero-header mb-5">
        <div class="container my-5 py-5 px-lg-5">
            <div class="row g-5 py-5">
                <div class="col-12 text-center">
                    <h1 class="text-white animated zoomIn">Layihəniz var?</h1>
                    <hr class="bg-white mx-auto mt-0" style="width: 90px;">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb justify-content-center">
                            <li class="breadcrumb-item"><router-link class="text-white" to="/" aria-label="Ana Səhifə">Ana
                                    Səhifə</router-link></li>
                            <li class="breadcrumb-item text-white active" aria-current="page">Layihəniz var?</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </div>



    <div class="container-xxl py-5">
        <div class="container px-lg-5">
            <div class="row justify-content-center">
                <div class="col-lg-6">
                    <div class="section-title position-relative text-center mb-5 pb-2 wow fadeInUp"
                        data-wow-delay="0.1s">
                        <h6 class="position-relative d-inline text-primary ps-4">Layihəniz var?</h6>
                        <h2 class="mt-2">Yeni bir layihəyə addım atın</h2>
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
                                        <input v-model="formData.surname" type="text" class="form-control" id="surname"
                                            placeholder="Soyad">
                                        <label for="surname">Soyad</label>
                                    </div>
                                    <div v-if="errors?.surname" class="text-danger">{{ errors.surname[0] }}</div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-floating">
                                        <input v-model="formData.email" type="email" class="form-control" id="email"
                                            placeholder="E-poçt">
                                        <label for="email">E-poçt</label>
                                    </div>
                                    <div v-if="errors?.email" class="text-danger">{{ errors.email[0] }}</div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-floating">
                                        <input v-model="formData.phone_number" type="text" class="form-control"
                                            id="phone_number" placeholder="Əlaqə nömrəsi">
                                        <label for="phone_number">Əlaqə nömrəsi</label>
                                    </div>
                                    <div v-if="errors?.phone_number" class="text-danger">{{ errors.phone_number[0] }}
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-floating">
                                        <select v-model="formData.type_id" name="type_id" class="form-select"
                                            id="type_id">
                                            <option value="">Sayt növünü seçin</option>

                                            <option v-for="type in types" :key="type.id" :value="type.id">{{ type.name
                                                }}</option>
                                        </select>
                                        <label for="phone_number">Sayt növü</label>
                                    </div>
                                    <div v-if="errors?.type_id" class="text-danger">{{ errors.type_id[0] }}</div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-floating">
                                        <input v-model="formData.company_name" type="text" class="form-control"
                                            id="company_name" placeholder="Şirkət adı">
                                        <label for="company_name">Şirkət adı</label>
                                    </div>
                                    <div v-if="errors?.company_name" class="text-danger">{{ errors.company_name[0] }}
                                    </div>
                                </div>

                                <div class="col-12">
                                    <div class="form-floating">
                                        <textarea v-model="formData.message" class="form-control"
                                            placeholder="Sayt haqqında qısa məlumat qeyd edin" id="message"
                                            style="height: 150px"></textarea>
                                        <label for="message">Sayt haqqında qısa məlumat</label>
                                    </div>
                                    <div v-if="errors?.message" class="text-danger">{{ errors.message[0] }}</div>
                                </div>
                                <div class="col-12">
                                    <button class="btn btn-primary w-100 py-3" type="submit" aria-label="Göndər"
                                        ref="submitBtn">
                                        <span v-if="loading" class="spinner-border spinner-border-sm" role="status"
                                            aria-hidden="true"></span>
                                        Göndər
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-lg-6 d-flex align-items-center justify-content-center mt-3">
                    <div class="col-lg-8">
                        <div class="d-flex align-items-center contact-item">
                            <img class="img-fluid flex-shrink-0 rounded-circle" src="/src/assets/img/whatsapp-icon.webp"
                                style="width: 50px; height: 50px;" alt="WhatSapp Icon - SaytMaster">
                            <div class="ps-3">
                                <small>Əlaqə Nömrəmiz</small>
                                <h6 class="mb-1"><a :href="`https://wa.me/${setting.phone_number}`"
                                        aria-label="WhatSapp Link">{{ setting.phone_number }}</a></h6>
                            </div>
                        </div>
                        <div class="d-flex align-items-center contact-item">
                            <img class="img-fluid flex-shrink-0 rounded-circle" src="/src/assets/img/mail-icon-2.png"
                                style="width: 50px; height: 50px;" alt="E-Mail Icon - SaytMaster">
                            <div class="ps-3">
                                <small>E-poçt ünvan</small>
                                <h6 class="mb-1"><a :href="`mailto:${setting.email}`" aria-label="Email Link">{{
                                    setting.email }}</a></h6>
                            </div>
                        </div>
                        <div class="d-flex align-items-center contact-item">
                            <img class="img-fluid flex-shrink-0 rounded-circle" src="/src/assets/img/address-icon.png"
                                style="width: 50px; height: 50px;" alt="Address Icon - SaytMaster">
                            <div class="ps-3">
                                <small>Ünvan</small>
                                <h6 class="mb-1">{{ setting.address }}</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>

<script>
export default {
    data() {
        return {
            setting: this.$setting,
            types: [],
            formData: {
                name: '',
                surname: '',
                email: '',
                phone_number: '',
                type_id: '',
                company_name: '',
                message: ''
            },
            message: '',
            statusClass: '',
            errors: [],
            loading: false,
        }
    },
    methods: {
        submit: function () {
            this.errors=[];
            this.message='';
            this.statusClass='';
            
            this.$refs.submitBtn.disabled = true;
            this.loading = true;
            let self = this;
            axios.post(`${self.$baseUrl}/api/application/post`, self.formData)
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
                }).finally(function () {
                    self.loading = false;
                    self.$refs.submitBtn.disabled = false;
                });
        },
        getTypes: function () {
            let self = this;
            axios.get(`${self.$baseUrl}/api/get-application-types`)
                .then(function (response) {
                    self.types = response.data.types;
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
    },
    created() {
        this.titleChange("Layihəniz Var?");
        this.getTypes();
    },
}
</script>