<template>
    <div class="d-flex mt-1">
        <div class="w-[300px] pe-1">
            <block-league/>
        </div>
        <div class="flex-fill p-2 bg-white">
            <div class="">
                <block-live-score/>
            </div>
        </div>
    </div>
</template>
<script setup>
import {onMounted} from "vue";
import BlockLiveScore from "@/views/components/BlockLiveScore.vue";
import BlockLeague from "@/views/components/BlockLeague.vue";
onMounted(() => {

})
</script>
