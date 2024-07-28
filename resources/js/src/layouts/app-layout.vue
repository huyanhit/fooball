<template>
    <!--  BEGIN MAIN CONTAINER  -->
    <div class="container flex-col">
        <Header/>
        <Menu/>
        <div class="content">
            <router-view></router-view>
        </div>
        <Footer/>
    </div>
</template>
<script setup>
    import { useAppStore } from '@/stores/index';
    import Header from '@/components/layout/Header.vue';
    import Footer from '@/components/layout/Footer.vue';
    import Menu from "@/components/layout/Menu.vue";
    const store = useAppStore();
</script>
