<template>
    <table class="fs-11">
        <template v-if="odds['handicap-'+bookmaker.companyIdMain+'-'+match.matchId+'-'+oddsType]">
            <tr class="px-1">
                <td><div class="fs-11 hover:text-blue-600">
                    {{odds['handicap-'+bookmaker.companyIdMain+'-'+match.matchId+'-'+oddsType].instantHome?? '-'}}</div></td>
                <td><div class="fs-11 hover:text-blue-600">
                    {{odds['handicap-'+bookmaker.companyIdMain+'-'+match.matchId+'-'+oddsType].instantHandicap?? '-'}} </div></td>
                <td><div class="fs-11 hover:text-blue-600">
                    {{odds['handicap-'+bookmaker.companyIdMain+'-'+match.matchId+'-'+oddsType].instantAway?? '-'}} </div></td>
            </tr>
        </template>
        <template v-if="odds['europeOdds-'+bookmaker.companyIdMain+'-'+match.matchId+'-'+oddsType]">
            <tr class="px-1">
                <td><div class="fs-11 hover:text-blue-600">
                    {{odds['europeOdds-'+bookmaker.companyIdMain+'-'+match.matchId+'-'+oddsType].instantHome?? '-'}} </div></td>
                <td><div class="fs-11 hover:text-blue-600">
                    {{odds['europeOdds-'+bookmaker.companyIdMain+'-'+match.matchId+'-'+oddsType].instantDraw?? '-'}} </div></td>
                <td><div class="fs-11 hover:text-blue-600">
                    {{odds['europeOdds-'+bookmaker.companyIdMain+'-'+match.matchId+'-'+oddsType].instantAway?? '-'}} </div></td>
            </tr>
        </template>
    </table>
</template>
<script setup>
import {useAppStore} from "@/stores";
const store    = useAppStore();
const props    = defineProps(['odds', 'match', "bookmaker"]);
const oddsType = 3
</script>
