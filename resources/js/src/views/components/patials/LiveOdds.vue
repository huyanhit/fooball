<template>
    <table class="fs-11">
        <template v-if="store.odds['handicap_'+bookmaker.companyIdMain+'_'+match.matchId+'_'+oddsType]">
            <tr class="px-1">
                <td><div class="fs-11 hover:text-blue-600">
                    {{store.odds['handicap_'+bookmaker.companyIdMain+'_'+match.matchId+'_'+oddsType].instantHome?? '_'}}</div></td>
                <td><div class="fs-11 hover:text-blue-600">
                    {{store.odds['handicap_'+bookmaker.companyIdMain+'_'+match.matchId+'_'+oddsType].instantHandicap?? '-'}} </div></td>
                <td><div class="fs-11 hover:text-blue-600">
                    {{store.odds['handicap_'+bookmaker.companyIdMain+'_'+match.matchId+'_'+oddsType].instantAway?? '-'}} </div></td>
            </tr>
        </template>
        <template v-if="store.odds['europeOdds_'+bookmaker.companyIdMain+'_'+match.matchId+'_'+oddsType]">
            <tr class="px-1">
                <td><div class="fs-11 hover:text-blue-600">
                    {{store.odds['europeOdds_'+bookmaker.companyIdMain+'_'+match.matchId+'_'+oddsType].instantHome?? '-'}} </div></td>
                <td><div class="fs-11 hover:text-blue-600">
                    {{store.odds['europeOdds_'+bookmaker.companyIdMain+'_'+match.matchId+'_'+oddsType].instantDraw?? '-'}} </div></td>
                <td><div class="fs-11 hover:text-blue-600">
                    {{store.odds['europeOdds_'+bookmaker.companyIdMain+'_'+match.matchId+'_'+oddsType].instantAway?? '-'}} </div></td>
            </tr>
        </template>
    </table>
</template>
<script setup>
import {useAppStore} from "@/stores";
const store    = useAppStore();
const props    = defineProps(['match', "bookmaker"]);
const oddsType = 3
</script>
