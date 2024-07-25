<template>
    <div class="row mt-3">
        <div class="col-4">
            <block-league/>
        </div>
        <div class="col-8">
            <div class="row">
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
