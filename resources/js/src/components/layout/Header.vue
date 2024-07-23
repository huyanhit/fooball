<template>
    <header class="z-40" :class="{ dark: store.semidark && store.menu === 'horizontal' }">
        header
    </header>
</template>

<script setup>
    import { useRoute } from 'vue-router';
    import { useAppStore } from '@/stores/index';
    const store = useAppStore();
    const route = useRoute();
</script>
