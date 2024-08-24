<script setup>
    import axios from 'axios';
</script>

<template>
    <form @submit.prevent="submit" novalidate class="col-md-6 col-lg-4">
        <h5 class="text-white mb-4">Başlamağa hazırsınız?</h5>
        <p>Sizə daha yaxşı xidmət göstərmək üçün əlaqə nömrənizi daxil edin.</p>
        <div v-if="message" class="col-md-12 mb-2">
            <div :class="`alert ${statusClass}`">{{ message }}</div>
        </div>
        <div class="position-relative w-100 mt-3">
            <input v-model="formData.phone_number" class="form-control border-0 rounded-pill w-100 ps-4 pe-5" type="text"
                placeholder="Sizin əlaqə nömrəniz" style="height: 48px;">
            <button type="submit" class="btn shadow-none position-absolute top-0 end-0 mt-1 me-2" aria-label="Başlamağa hazırsınız?" ref="submitBtn">
                <span v-if="loading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                <i v-else class="fa fa-paper-plane text-primary fs-4" ></i>
            </button>
        </div>
        <div v-if="errors?.phone_number" class="text-danger">{{ errors.phone_number[0] }}</div>
    </form>
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