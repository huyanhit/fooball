
<template>
    <img :class="classProps" :src="store.files[item.id]" ref="img"/>
</template>
<script setup>
import {onMounted, ref} from 'vue'
import {useAppStore} from "@/stores";
const img = ref(null);

const props = defineProps(['item', 'classProps'])
const store = useAppStore();
onMounted(async () => {
    if (!store.files[props.item.id]) {
        let response = await fetch('/api/get-image-url?id=' + props.item.id + '&category=league-profile&prop=logo', {method: "GET"})
        if (response.status === 200) {
            store.files[props.item.id] = URL.createObjectURL(await response.blob())
        }
    }
})
</script>
