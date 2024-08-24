<script setup>
import ApplecationShortFooter from './ApplecationShortFooter.vue';
</script>

<template>
    <!-- Footer Start -->
    <div class="container-fluid bg-primary text-light footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
        <div class="container py-5 px-lg-5">
            <div class="row g-5">
                <div class="col-md-6 col-lg-4">
                    <h5 class="text-white mb-4">Əlaqə üçün</h5>
                    <p><i class="fa fa-map-marker-alt me-3"></i>{{ setting.address }}</p>
                    <p><i class="fa fa-phone-alt me-3"></i>{{ setting.phone_number }}</p>
                    <p><i class="fa fa-envelope me-3"></i>{{ setting.email }}</p>
                    <div class="d-flex pt-2">
                        <a v-if="setting.facebook" class="btn btn-outline-light btn-social" target="_blank"
                            href="{{ $setting->facebook }}" aria-label="facebook link"><i
                                class="fab fa-facebook-f"></i></a>
                        <a v-if="setting.instagram" class="btn btn-outline-light btn-social" target="_blank"
                            href="{{ $setting->instagram }}" aria-label="instagram link"><i
                                class="fab fa-instagram"></i></a>
                        <a v-if="setting.twitter" class="btn btn-outline-light btn-social" target="_blank"
                            href="{{ $setting->twitter }}" aria-label="twitter link"><i class="fab fa-twitter"></i></a>
                        <a v-if="setting.youtube" class="btn btn-outline-light btn-social" target="_blank"
                            href="{{ $setting->youtube }}" aria-label="youtube link"><i class="fab fa-youtube"></i></a>
                        <a v-if="setting.whatsapp" class="btn btn-outline-light btn-social" target="_blank"
                            href="{{ $setting->whatsapp }}" aria-label="whatsapp link"><i
                                class="fab fa-whatsapp"></i></a>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4">
                    <h5 class="text-white mb-4">Menu</h5>
                    <router-link class="btn btn-link" to="/" aria-label="Ana Səhifə">Ana Səhifə</router-link>
                    <router-link class="btn btn-link" to="/about-us" aria-label="Haqqımızda">Haqqımızda</router-link>
                    <router-link class="btn btn-link" to="/services" aria-label="Xidmətlər">Xidmətlər</router-link>
                    <router-link class="btn btn-link" to="/portfolios" aria-label="İşlərimiz">İşlərimiz</router-link>
                    <router-link class="btn btn-link" to="/contact-us" aria-label="Əlaqə">Əlaqə</router-link>
                </div>

                <applecation-short-footer></applecation-short-footer>


            </div>
        </div>
        <div class="container px-lg-5">
            <div class="copyright">
                <div class="row">
                    <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        &copy; <router-link class="border-bottom" to="/" aria-label="Sayt Master">Sayt
                            Master</router-link>, Bütün hüquqlar
                        qorunur.


                    </div>

                </div>
            </div>
        </div>
    </div>
    <!-- Footer End -->


    <!-- Back to Top -->
    <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top pt-2 " aria-label="Back to top"><i
            class="bi bi-arrow-up"></i></a>
</template>

<script>
export default {
    components: {
        'applecation-short-footer': ApplecationShortFooter
    },
    data() {
        return {
            setting: this.$setting
        }
    },
}
</script>