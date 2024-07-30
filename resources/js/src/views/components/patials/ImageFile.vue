
<template>
    <img :class="classProps" v-if="store.files[props.category+'_'+props.properties+'_'+props.id]"
         :src="store.files[props.category+'_'+props.properties+'_'+props.id]" onerror="this.src=''" ref="img"/>
</template>
<script setup>
import {onMounted, ref} from 'vue'
import {useAppStore} from "@/stores";
const img = ref(null);

const props = defineProps(['id', 'classProps', 'category', 'properties'])
const store = useAppStore();
onMounted(async () => {
    if (!store.files[props.category+'_'+props.properties+'_'+props.id]) {
        let response = await fetch('/api/get-image-url?id='+props.id+
            '&category='+props.category+'&prop='+props.properties, {method: "GET"})
        if (response.status === 200) {
            store.files[props.category+'_'+props.properties+'_'+props.id] = URL.createObjectURL(await response.blob())
        }
    }
})
</script>
