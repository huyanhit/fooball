<template>
    <!--  BEGIN MAIN CONTAINER  -->
    <div class="flex flex-col">
        <Header />
        <div class="content">
            <div class="main-content">
                <router-view></router-view>
                <Footer />
            </div>
        </div>
    </div>
</template>
<script setup>
    import { useAppStore } from '@/stores/index';
    import Header from '@/components/layout/Header.vue';
    import Footer from '@/components/layout/Footer.vue';
    const store = useAppStore();
</script>
