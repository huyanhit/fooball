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
            <template v-if="odds['handicap-'+bookmaker.companyIdMain+'-'+match.matchId+'-'+oddsType]">
                <tr>
                    <th scope="row">AH</th>
                    <td><div class="fs-11 hover:text-blue-600"> {{odds['handicap-'+bookmaker.companyIdMain+'-'+match.matchId+'-'+oddsType]?.instantHome?? '-'}} </div></td>
                    <td><div class="fs-11 hover:text-blue-600"> {{odds['handicap-'+bookmaker.companyIdMain+'-'+match.matchId+'-'+oddsType]?.instantHandicap?? '-'}} </div></td>
                    <td><div class="fs-11 hover:text-blue-600"> {{odds['handicap-'+bookmaker.companyIdMain+'-'+match.matchId+'-'+oddsType]?.instantAway?? '-'}} </div></td>

                    <td><div class="fs-11 hover:text-blue-600"> {{odds['handicap-'+bookmaker.companyIdMain+'-'+match.matchId+'-'+oddsType]?.initialHome?? '-'}} </div></td>
                    <td><div class="fs-11 hover:text-blue-600"> {{odds['handicap-'+bookmaker.companyIdMain+'-'+match.matchId+'-'+oddsType]?.initialDraw?? '-'}} </div></td>
                    <td><div class="fs-11 hover:text-blue-600"> {{odds['handicap-'+bookmaker.companyIdMain+'-'+match.matchId+'-'+oddsType]?.initialAway?? '-'}} </div></td>
                </tr>
            </template>
            <template v-if="odds['europeOdds-'+bookmaker.companyIdMain+'-'+match.matchId+'-'+oddsType]">
                <tr>
                    <th scope="row">1X2</th>
                    <td><div class="fs-11 hover:text-blue-600"> {{odds['europeOdds-'+bookmaker.companyIdMain+'-'+match.matchId+'-'+oddsType]?.instantHome?? '-'}} </div></td>
                    <td><div class="fs-11 hover:text-blue-600"> {{odds['europeOdds-'+bookmaker.companyIdMain+'-'+match.matchId+'-'+oddsType]?.instantDraw?? '-'}} </div></td>
                    <td><div class="fs-11 hover:text-blue-600"> {{odds['europeOdds-'+bookmaker.companyIdMain+'-'+match.matchId+'-'+oddsType]?.instantAway?? '-'}} </div></td>

                    <td><div class="fs-11 hover:text-blue-600"> {{odds['europeOdds-'+bookmaker.companyIdMain+'-'+match.matchId+'-'+oddsType]?.initialHome?? '-'}} </div></td>
                    <td><div class="fs-11 hover:text-blue-600"> {{odds['europeOdds-'+bookmaker.companyIdMain+'-'+match.matchId+'-'+oddsType]?.initialDraw?? '-'}} </div></td>
                    <td><div class="fs-11 hover:text-blue-600"> {{odds['europeOdds-'+bookmaker.companyIdMain+'-'+match.matchId+'-'+oddsType]?.initialAway?? '-'}} </div></td>
                </tr>
            </template>
            <template v-if="odds['overUnder-'+bookmaker.companyIdMain+'-'+match.matchId+'-'+oddsType]">
                <tr>
                    <th scope="row">O/U</th>
                    <td><div class="fs-11 hover:text-blue-600"> {{odds['overUnder-'+bookmaker.companyIdMain+'-'+match.matchId+'-'+oddsType]?.instantOver?? '-'}} </div></td>
                    <td><div class="fs-11 hover:text-blue-600"> {{odds['overUnder-'+bookmaker.companyIdMain+'-'+match.matchId+'-'+oddsType]?.instantHandicap?? '-'}} </div></td>
                    <td><div class="fs-11 hover:text-blue-600"> {{odds['overUnder-'+bookmaker.companyIdMain+'-'+match.matchId+'-'+oddsType]?.instantUnder?? '-'}} </div></td>

                    <td><div class="fs-11 hover:text-blue-600"> {{odds['overUnder-'+bookmaker.companyIdMain+'-'+match.matchId+'-'+oddsType]?.initialHome?? '-'}} </div></td>
                    <td><div class="fs-11 hover:text-blue-600"> {{odds['overUnder-'+bookmaker.companyIdMain+'-'+match.matchId+'-'+oddsType]?.initialDraw?? '-'}} </div></td>
                    <td><div class="fs-11 hover:text-blue-600"> {{odds['overUnder-'+bookmaker.companyIdMain+'-'+match.matchId+'-'+oddsType]?.initialAway?? '-'}} </div></td>
                </tr>
            </template>
            <tr>
                <td colspan="7" class="text-center py-1"><b-button variant="outline-info" size="sm"> view more </b-button></td>
            </tr>
        </tbody>
    </table>
</template>
<script setup>
import {BButton} from "bootstrap-vue-next";
import {useAppStore} from "@/stores";
const props = defineProps(['odds', 'match', 'bookmaker']);
const store = useAppStore();
const oddsType = 3
</script>
<style scoped>

</style>
