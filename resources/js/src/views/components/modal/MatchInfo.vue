<template>
    <!-- Bordered Tables -->
    <div class="bg-success d-flex justify-content-between text-white  p-2">
        <div class="cursor-pointer uppercase fs-14 text-center hover:text-blue-600 px-2"
             :title="props.match.homeName">
            {{ props.match.homeName }}
        </div>
        <div>
            <span class="fs-16 text-truncate">{{ props.match.homeScore }} - {{ props.match.awayScore }}</span>
        </div>
        <div class="cursor-pointer uppercase fs-14 text-center hover:text-blue-600  px-2"
             :title="props.match.awayName">
            {{ props.match.awayName }}
        </div>
    </div>
    <table class="table table-bordered table-nowrap mb-0">
        <tbody>
            <tr>
                <th scope="row">FT</th>
                <td colspan="3">ODDS</td>
            </tr>
            <tr>
                <th scope="row" v-if="data.handicap">AH</th>
                <td><div class="fs-11 hover:text-blue-600"> {{data.handicap?.instantHome?? '-'}} </div></td>
                <td><div class="fs-11 hover:text-blue-600"> {{data.handicap?.instantHandicap?? '-'}} </div></td>
                <td><div class="fs-11 hover:text-blue-600"> {{data.handicap?.instantAway?? '-'}} </div></td>
            </tr>
            <tr>
                <th scope="row" v-if="data.europeOdds">1X2</th>
                <td><div class="fs-11 hover:text-blue-600"> {{data.europeOdds?.instantHome?? '-'}} </div></td>
                <td><div class="fs-11 hover:text-blue-600"> {{data.europeOdds?.instantDraw?? '-'}} </div></td>
                <td><div class="fs-11 hover:text-blue-600"> {{data.europeOdds?.instantAway?? '-'}} </div></td>
            </tr>
            <tr>
                <th scope="row" v-if="data.overUnder">O/U</th>
                <td><div class="fs-11 hover:text-blue-600"> {{data.overUnder?.instantOver?? '-'}} </div></td>
                <td><div class="fs-11 hover:text-blue-600"> {{data.overUnder?.instantHandicap?? '-'}} </div></td>
                <td><div class="fs-11 hover:text-blue-600"> {{data.overUnder?.instantUnder?? '-'}} </div></td>
            </tr>
            <tr>
                <td colspan="4" class="text-center py-1"><b-button variant="outline-info" size="sm"> view more </b-button></td>
            </tr>
        </tbody>
    </table>
</template>
<script setup>
import {computed, reactive} from "vue";
import {BButton} from "bootstrap-vue-next";
import {useAppStore} from "@/stores";
const props = defineProps(['match']);
const store = useAppStore();
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
data.overUnder = computed(()=>{
    return store.odd['overUnder'][props.match.matchId]
})
</script>
<style scoped>

</style>
