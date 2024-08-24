<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Spinner from './components/Spinner.vue';
// import Index from './components/Index.vue';

</script>

<template>
  <div class="container-xxl bg-white p-0">
    <app-spinner v-if="isLoading" ></app-spinner>
    <div v-else class="container-xxl position-relative p-0">
      <app-header></app-header>

      <router-view></router-view>

      <app-footer></app-footer>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    'app-header': Header,
    // 'app-index':Index,
    'app-footer': Footer,
    'app-spinner': Spinner,
  },
  data() {
    return {
      isLoading: false,
    }
  },
  created() {
    // Router event listeners
    this.$router.beforeEach((to, from, next) => {
      this.isLoading = true;  // Start loading
      next();
    });

    this.$router.afterEach(() => {
      this.isLoading = false;  // Stop loading
    });
  },
}
</script>