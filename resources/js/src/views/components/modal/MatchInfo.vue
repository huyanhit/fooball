<template>
    <!-- Bordered Tables -->
    <div class="bg-success d-flex justify-content-between text-white p-2 min-w-[400px]">
        <a class="text-center px-2" target="_blank">FIFA</a>
        <div class="cursor-pointer uppercase fs-14 text-center hover:text-blue-600 px-2 w-[150px]"
             :title="props.match.homeName">
            {{ props.match.homeName }}
        </div>
        <div>
            <span class="fs-16 text-truncate">{{ props.match.homeScore }} - {{ props.match.awayScore }}</span>
        </div>
        <div class="cursor-pointer uppercase fs-14 text-center hover:text-blue-600 px-2 w-[150px]"
             :title="props.match.awayName">
            {{ props.match.awayName }}
        </div>
    </div>
    <table class="table table-bordered table-nowrap mb-0 text-center">
        <tbody>
            <tr>
                <th scope="row">FT</th>
                <td colspan="3" class="w-[150px]">ODDS</td>
                <td colspan="3" class="w-[150px]">FIRST ODDS</td>
            </tr>
            <template v-for="item in data.handicap[1]">
                <tr>
                    <th scope="row">AH</th>
                    <td><div class="fs-11 hover:text-blue-600"> {{item?.instantHome?? '-'}} </div></td>
                    <td><div class="fs-11 hover:text-blue-600"> {{item?.instantHandicap?? '-'}} </div></td>
                    <td><div class="fs-11 hover:text-blue-600"> {{item?.instantAway?? '-'}} </div></td>

                    <td><div class="fs-11 hover:text-blue-600"> {{item?.initialHome?? '-'}} </div></td>
                    <td><div class="fs-11 hover:text-blue-600"> {{item?.initialDraw?? '-'}} </div></td>
                    <td><div class="fs-11 hover:text-blue-600"> {{item?.initialAway?? '-'}} </div></td>
                </tr>
            </template>
            <template v-for="item in data.europeOdds[1]">
                <tr>
                    <th scope="row">1X2</th>
                    <td><div class="fs-11 hover:text-blue-600"> {{item?.instantHome?? '-'}} </div></td>
                    <td><div class="fs-11 hover:text-blue-600"> {{item?.instantDraw?? '-'}} </div></td>
                    <td><div class="fs-11 hover:text-blue-600"> {{item?.instantAway?? '-'}} </div></td>

                    <td><div class="fs-11 hover:text-blue-600"> {{item?.initialHome?? '-'}} </div></td>
                    <td><div class="fs-11 hover:text-blue-600"> {{item?.initialDraw?? '-'}} </div></td>
                    <td><div class="fs-11 hover:text-blue-600"> {{item?.initialAway?? '-'}} </div></td>
                </tr>
            </template>
            <template v-for="item in data.overUnder[1]">
                <tr>
                    <th scope="row">O/U</th>
                    <td><div class="fs-11 hover:text-blue-600"> {{item?.instantOver?? '-'}} </div></td>
                    <td><div class="fs-11 hover:text-blue-600"> {{item?.instantHandicap?? '-'}} </div></td>
                    <td><div class="fs-11 hover:text-blue-600"> {{item?.instantUnder?? '-'}} </div></td>

                    <td><div class="fs-11 hover:text-blue-600"> {{item?.initialHome?? '-'}} </div></td>
                    <td><div class="fs-11 hover:text-blue-600"> {{item?.initialDraw?? '-'}} </div></td>
                    <td><div class="fs-11 hover:text-blue-600"> {{item?.initialAway?? '-'}} </div></td>
                </tr>
            </template>
            <tr>
                <td colspan="7" class="text-center py-1"><b-button variant="outline-info" size="sm"> view more </b-button></td>
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
    let results = [];
    for (const index in store.odd['handicap']) {
        if (store.odd['handicap'][index] && store.odd['handicap'][index][props.match.matchId]){
            results[index] = Object.values(store.odd['handicap'][index][props.match.matchId])
                .filter(item => item.companyId === props.bookmaker.companyIdMain)
        }
    }
    return results
})
data.europeOdds = computed(()=>{
    let results = [];
    for (const index in store.odd['europeOdds']) {
        if (store.odd['europeOdds'][index] && store.odd['europeOdds'][index][props.match.matchId]){
            results[index] = Object.values(store.odd['europeOdds'][index][props.match.matchId])
                .filter(item => item.companyId === props.bookmaker.companyIdMain)
        }
    }
    return results
})
data.overUnder = computed(()=>{
    let results = [];
    for (const index in store.odd['overUnder']) {
        if (store.odd['overUnder'] && store.odd['overUnder'][props.match.matchId]){
            results[index] = Object.values(store.odd['overUnder'][props.match.matchId])
                .filter(item => item.companyId === props.bookmaker.companyIdMain)
        }
    }
    return results
})
</script>
<style scoped>

</style>
