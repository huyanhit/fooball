<template>
    <div class="text-black dark:text-white-dark">
        <router-view></router-view>
    </div>
</template>
<script setup>
    import { useAppStore } from '@/stores/index';
    const store = useAppStore();
</script>
