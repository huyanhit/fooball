
<template>
    <span>
        <span v-if="data.last && data.old" class="w-100 inline-block"
             :class="(data.last.value > data.old.value)? 'text-green-500': (data.last.value < data.old.value)? 'text-red-500': 'text-gray-500'"
             :title="'Old: '+ data.old.value">
             <span class="p-1 w-100 inline-block" :class="(store.systems.time - data.last.time) > 5000? 'bg-green-100': 'bg-blue-100'">
                <span> {{data.last.value}} </span>
                <i :class="(data.last.value > data.old.value)? 'ri-arrow-up-line': (data.last.value < data.old.value)? 'ri-arrow-down-line': ''"></i>
             </span>
        </span>
        <span v-else-if="data.last" class="p-1 w-100 inline-block text-gray-500"
            :class="(store.systems.time - data.last.time) > 5000? 'bg-green-100': 'bg-blue-100'">
                {{data.last.value}}
            </span>
        <span v-else class="p-1 w-100 inline-block text-gray-500"> - </span>
    </span>
</template>
<script setup>
import {useAppStore} from "@/stores";
import {computed} from "vue";

const props = defineProps(['type', 'type_change', 'company_id', 'match_id', 'odds_type', 'field']);
const store = useAppStore();

const data = computed(()=>{
    let data = []
    let odds = store.odds[props.type+'_'+props.type_change+'_'+props.company_id+'_'+props.match_id+'_'+props.odds_type]
    if (odds){
        for (let i in odds){
            if(odds[i] && odds[i][props.field]) {
                data.push({
                    value:odds[i][props.field],
                    time:odds[i]['changeTime']
                });
            }
        }
    }
    return {last:data[0], old:data[1]};
})
</script>

<style scoped>
.animation_1 {
    animation-name: animation_1;
    animation-duration: 2s;
    color: red;
    animation-iteration-count: infinite;
}

@keyframes animation_1 {
    0%   {color:red;}
    50%  {color:black;}
}

</style>
