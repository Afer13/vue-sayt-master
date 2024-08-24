<template>
    <nav class="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
        <router-link to="/" class="navbar-brand p-0 d-a-j" aria-label="Ana Səhifə">
            <img class="logo-write" src="https://saytmaster.rf.gd/storage/logos/aZrtVZqQgW4szqEVLEVdLjCABeWxsZksnyhvAjUC.png" alt="SaytMaster Logo">
            <img class="logo-blue" src="https://saytmaster.rf.gd/storage/logos/2XgsSgv1UPCKChfoXr98pXpXiy1HBZwyrm71yqcp.png" alt="SaytMaster Logo">
            <span class="logo-text logo-write">SaytMaster</span>
            <span class="logo-text logo-blue">SaytMaster</span>
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse" aria-label="Navbar Collapse">
            <span class="fa fa-bars"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse" style="position: relative;z-index: 9999;">
            <div class="navbar-nav ms-auto py-0">
                <router-link to="/" class="nav-item nav-link "
                    aria-label="Ana Səhifə">Ana
                    Səhifə</router-link>
                <router-link to="/about-us"
                    class="nav-item nav-link "
                    aria-label="Haqqımızda">Haqqımızda</router-link>
                <router-link to="/services" class="nav-item nav-link "
                    aria-label="Xidmətlər">Xidmətlər</router-link>
                <router-link to="/portfolios"
                    class="nav-item nav-link "
                    aria-label="İşlərimiz">İşlərimiz</router-link>
                <router-link to="/blog" class="nav-item nav-link " aria-label="Blog">Blog</router-link>
                <router-link to="/contact-us"
                    class="nav-item nav-link "
                    aria-label="Əlaqə">Əlaqə</router-link>
            </div>
            <router-link to="/application" class="btn btn-secondary text-dark rounded-pill py-2 px-4 ms-3"
                aria-label="Layihəniz var?">Layihəniz
                var?</router-link>
        </div>

    </nav>
</template>