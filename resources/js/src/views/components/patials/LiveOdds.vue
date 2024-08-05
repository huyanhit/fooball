<template>
    <table class="fs-11">
        <tr class="px-1">
            <td><div class="fs-11 hover:text-blue-600"> {{getLiveOdds('handicap', 'instantHome')}} </div></td>
            <td><div class="fs-11 hover:text-blue-600"> {{getLiveOdds('handicap', 'instantHandicap')}} </div></td>
            <td><div class="fs-11 hover:text-blue-600"> {{getLiveOdds('handicap', 'instantAway')}} </div></td>
        </tr>
        <tr class="px-1">
            <td><div class="fs-11 hover:text-blue-600"> {{getLiveOdds('europeOdds', 'instantHome')}} </div></td>
            <td><div class="fs-11 hover:text-blue-600"> {{getLiveOdds('europeOdds', 'instantDraw')}} </div></td>
            <td><div class="fs-11 hover:text-blue-600"> {{getLiveOdds('europeOdds', 'instantAway')}} </div></td>
        </tr>
    </table>
</template>
<script setup>
import {useAppStore} from "@/stores";
const store    = useAppStore();
const props    = defineProps(['match']);
const oddsInPlay = 3
function getLiveOdds(type, field){
    let inPlay  = store.odds[type+'_'+store.bookmaker.companyIdMain+'_'+props.match.matchId+'_'+oddsInPlay]
    if (inPlay){
        for (let i in inPlay){
            if(inPlay[i] && inPlay[i][field]) {
                return inPlay[i][field];
            }
        }
    }

    return '-'
}
</script>
