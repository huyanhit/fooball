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
            <tr>
                <th scope="row">AH</th>
                <td><div class="fs-11 hover:text-blue-600"> {{getLiveOdds('handicap', 'instantHome')}} </div></td>
                <td><div class="fs-11 hover:text-blue-600"> {{getLiveOdds('handicap', 'instantHandicap')}} </div></td>
                <td><div class="fs-11 hover:text-blue-600"> {{getLiveOdds('handicap', 'instantAway')}} </div></td>
                <td><div class="fs-11 hover:text-blue-600"> {{getFirstOdd('handicap', 'initialHome')}} </div></td>
                <td><div class="fs-11 hover:text-blue-600"> {{getFirstOdd('handicap', 'initialHandicap')}} </div></td>
                <td><div class="fs-11 hover:text-blue-600"> {{getFirstOdd('handicap', 'initialAway')}} </div></td>
            </tr>
            <tr>
                <th scope="row">1X2</th>
                <td><div class="fs-11 hover:text-blue-600"> {{getLiveOdds('europeOdds', 'instantHome')}} </div></td>
                <td><div class="fs-11 hover:text-blue-600"> {{getLiveOdds('europeOdds', 'instantDraw')}} </div></td>
                <td><div class="fs-11 hover:text-blue-600"> {{getLiveOdds('europeOdds', 'instantAway')}} </div></td>
                <td><div class="fs-11 hover:text-blue-600"> {{getFirstOdd('europeOdds', 'initialHome')}} </div></td>
                <td><div class="fs-11 hover:text-blue-600"> {{getFirstOdd('europeOdds', 'initialDraw')}} </div></td>
                <td><div class="fs-11 hover:text-blue-600"> {{getFirstOdd('europeOdds', 'initialAway')}} </div></td>
            </tr>
            <tr>
                <th scope="row">O/U</th>
                <td><div class="fs-11 hover:text-blue-600"> {{getLiveOdds('overUnder', 'instantOver')}} </div></td>
                <td><div class="fs-11 hover:text-blue-600"> {{getLiveOdds('overUnder', 'instantDraw')}} </div></td>
                <td><div class="fs-11 hover:text-blue-600"> {{getLiveOdds('overUnder', 'instantUnder')}} </div></td>
                <td><div class="fs-11 hover:text-blue-600"> {{getFirstOdd('overUnder', 'initialOver')}} </div></td>
                <td><div class="fs-11 hover:text-blue-600"> {{getFirstOdd('overUnder', 'initialDraw')}} </div></td>
                <td><div class="fs-11 hover:text-blue-600"> {{getFirstOdd('overUnder', 'initialUnder')}} </div></td>
            </tr>
            <tr>
                <td colspan="7" class="text-center py-1"><b-button variant="outline-info" size="sm"> view more </b-button></td>
            </tr>
        </tbody>
    </table>
</template>
<script setup>
import {BButton} from "bootstrap-vue-next";
import {useAppStore} from "@/stores";
const props = defineProps(['match']);
const store = useAppStore();

const oddsInPlay   = 3
const oddsInstant  = 2
const oddsEarly    = 1

const typeMain     = 1
const typeChange   = 2
function getLiveOdds(type, field){
    let inPlay  = store.odds[type+'_'+typeChange+'_'+store.bookmaker.companyIdMain+'_'+props.match.matchId+'_'+oddsInPlay]
    if (inPlay){
        for (let i in inPlay){
            if(inPlay[i] && inPlay[i][field]) {
                return inPlay[i][field];
            }
        }
    }
    let instant = store.odds[type+'_'+typeMain+'_'+store.bookmaker.companyIdMain+'_'+props.match.matchId+'_'+oddsInstant]
    if(instant) {
        for (let i in instant) {
            if (instant[i] && instant[i][field]) {
                return instant[i][field];
            }
        }
    }

    return '-'
}
function getFirstOdd(type, field){
    let early = store.odds[type+'_'+typeMain+'_'+store.bookmaker.companyIdMain+'_'+props.match.matchId+'_'+oddsEarly]
    if(early){
        for (let i in early.reverse()){
            if(early[i] && early[i][field]) {
                return early[i][field];
            }
        }
    }
    let instant = store.odds[type+'_'+typeMain+'_'+store.bookmaker.companyIdMain+'_'+props.match.matchId+'_'+oddsInstant]
    if(instant) {
        for (let i in instant.reverse()) {
            if (instant[i] && instant[i][field]) {
                return instant[i][field];
            }
        }
    }

    return '-'
}
</script>
