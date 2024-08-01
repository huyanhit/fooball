
<template>
    <img :class="classProps" v-if="save || store.files[props.category+'_'+props.properties+'_'+props.item.id]"
         :src="store.files[props.category+'_'+props.properties+'_'+props.item.id]" :onerror="'this.src=\''+imageDefault+'\''" ref="img"/>
    <img v-else :src="'/storage/'+category+'/'+properties+'/'+getFileName(item)" :onerror="loadImage" ref="img" :class="classProps"/>

</template>
<script setup>
import {onMounted, ref} from 'vue'
import {useAppStore} from "@/stores";
import imageDefault from '@/assets/images/team-default.png'
const img = ref(null);

const props = defineProps(['item', 'classProps', 'category', 'properties', 'save'])
const store = useAppStore();

const getFileName = function (item){
    if(item.logo){
        const found = item.logo.match(/(\w+)(\.\w+)+(?!.*(\w+)(\.\w+)+)/m);
        return found[0];
    }

    return  '';
}
const loadImage = async function () {
    img.value.src = imageDefault;
}

onMounted(async () => {
    if(props.save){
        if (!store.files[props.category+'_'+props.properties+'_'+props.item.id]) {
            let response = await fetch('/api/get-image-url?id='+props.item.id+
                '&category='+props.category+'&prop='+props.properties, {method: "GET"})
            if (response.status === 200) {
                store.files[props.category+'_'+props.properties+'_'+props.item.id] =
                    URL.createObjectURL(await response.blob())
            }
        }
    }
})

</script>
