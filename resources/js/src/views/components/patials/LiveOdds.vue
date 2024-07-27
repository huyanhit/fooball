<template>
    <table class="fs-11">
        <tr class="px-1" v-if="data.handicap">
            <td><div class="fs-11 hover:text-blue-600"> {{data.handicap.instantHome?? '-'}} </div></td>
            <td><div class="fs-11 hover:text-blue-600"> {{data.handicap.instantHandicap?? '-'}} </div></td>
            <td><div class="fs-11 hover:text-blue-600"> {{data.handicap.instantAway?? '-'}} </div></td>
        </tr>
        <tr class="px-1" v-if="data.europeOdds">
            <td><div class="fs-11 hover:text-blue-600"> {{data.europeOdds.instantHome?? '-'}} </div></td>
            <td><div class="fs-11 hover:text-blue-600"> {{data.europeOdds.instantDraw?? '-'}} </div></td>
            <td><div class="fs-11 hover:text-blue-600"> {{data.europeOdds.instantAway?? '-'}} </div></td>
        </tr>
    </table>
</template>
<script setup>
import {computed, onMounted, reactive} from "vue";
    import {useAppStore} from "@/stores";
    const store = useAppStore();
    const props = defineProps(['match']);
    const data = reactive({
        handicap: {},
        europeOdds: {}
    })
    data.handicap = computed(()=>{
        return store.odd['handicap'][props.match.matchId]
    })
    data.europeOdds = computed(()=>{
        return store.odd['europeOdds'][props.match.matchId]
    })
</script>
<style scoped>

</style>
