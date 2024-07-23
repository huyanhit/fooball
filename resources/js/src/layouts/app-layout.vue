<template>
    <!--  BEGIN MAIN CONTAINER  -->
    <div class="main-content flex flex-col min-h-screen">
        <!--  BEGIN TOP NAVBAR  -->
        <Header />
        <!--  END TOP NAVBAR  -->

        <!--  BEGIN CONTENT AREA  -->
        <div class="content">
            <router-view></router-view>
        </div>
        <!--  END CONTENT AREA  -->

        <!-- BEGIN FOOTER -->
        <Footer />
        <!-- END FOOTER -->
    </div>
</template>
<script setup>
    import { useAppStore } from '@/stores/index';
    import Header from '@/components/layout/Header.vue';
    import Footer from '@/components/layout/Footer.vue';
    const store = useAppStore();
</script>
