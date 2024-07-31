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
            <template v-for="item in data.handicap">
                <tr>
                    <th scope="row" v-if="data.handicap">AH</th>
                    <td><div class="fs-11 hover:text-blue-600"> {{item?.instantHome?? '-'}} </div></td>
                    <td><div class="fs-11 hover:text-blue-600"> {{item?.instantHandicap?? '-'}} </div></td>
                    <td><div class="fs-11 hover:text-blue-600"> {{item?.instantAway?? '-'}} </div></td>
                </tr>
            </template>
            <template v-for="item in data.europeOdds">
                <tr>
                    <th scope="row" v-if="data.europeOdds">1X2</th>
                    <td><div class="fs-11 hover:text-blue-600"> {{item?.instantHome?? '-'}} </div></td>
                    <td><div class="fs-11 hover:text-blue-600"> {{item?.instantDraw?? '-'}} </div></td>
                    <td><div class="fs-11 hover:text-blue-600"> {{item?.instantAway?? '-'}} </div></td>
                </tr>
            </template>
            <template v-for="item in data.overUnder">
                <tr>
                    <th scope="row" v-if="data.overUnder">O/U</th>
                    <td><div class="fs-11 hover:text-blue-600"> {{item?.instantOver?? '-'}} </div></td>
                    <td><div class="fs-11 hover:text-blue-600"> {{item?.instantHandicap?? '-'}} </div></td>
                    <td><div class="fs-11 hover:text-blue-600"> {{item?.instantUnder?? '-'}} </div></td>
                </tr>
            </template>
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
const props = defineProps(['match', 'bookmaker']);
const store = useAppStore();
const data = reactive({
    handicap: {},
    europeOdds: {}
})

data.handicap = computed(()=>{
    if(store.odd['handicap'] && store.odd['handicap'][props.match.matchId])
        return Object.values(store.odd['handicap'][props.match.matchId]).
        filter(item => parseInt(item.companyId) === props.bookmaker.companyIdMain)
})
data.europeOdds = computed(()=>{
    if(store.odd['europeOdds'] && store.odd['europeOdds'][props.match.matchId])
        return Object.values(store.odd['europeOdds'][props.match.matchId]).
        filter(item =>  parseInt(item.companyId) === props.bookmaker.companyIdMain)
})
data.overUnder = computed(()=>{
    if(store.odd['overUnder'] && store.odd['overUnder'][props.match.matchId])
        return Object.values(store.odd['overUnder'][props.match.matchId]).
        filter(item =>  parseInt(item.companyId) === props.bookmaker.companyIdMain)
})
</script>
<style scoped>

</style>
