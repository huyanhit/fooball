<template>
    <!-- Bordered Tables -->
    <div class="bg-success d-flex justify-content-between text-white p-2 min-w-[400px]">
        <a class="text-center px-2 text-white" target="_blank">FIFA</a>
        <div class="cursor-pointer uppercase fs-14 text-center hover:text-blue-600 px-2 w-[200px]"
             :title="props.match.homeName">
            {{ props.match.homeName }}
        </div>
        <div>
            <span class="fs-14 text-truncate">{{ props.match.homeScore }} - {{ props.match.awayScore }}</span>
        </div>
        <div class="cursor-pointer uppercase fs-14 text-center hover:text-blue-600 px-2 w-[200px]"
             :title="props.match.awayName">
            {{ props.match.awayName }}
        </div>
    </div>
    <table class=" mb-0 text-center">
        <tr>
            <th scope="row"><span class="p-2">FT</span></th>
            <td colspan="3" class="w-[150px] p-2"><span class="p-2">ODDS</span></td>
            <td colspan="3" class="w-[150px] p-2"><span class="p-2">FIRST ODDS</span></td>
        </tr>
        <tr>
            <th scope="row p-2"><span class="p-2">AH</span></th>
            <td><FieldOdd type="handicap" field="instantHome" type_change="2" odds_type="3"
                          :company_id="store.bookmaker.companyIdMain" :match_id="props.match.matchId"/></td>
            <td><FieldOdd type="handicap" field="instantHandicap" type_change="2" odds_type="3"
                          :company_id="store.bookmaker.companyIdMain" :match_id="props.match.matchId"/></td>
            <td><FieldOdd type="handicap" field="instantAway" type_change="2" odds_type="3"
                          :company_id="store.bookmaker.companyIdMain" :match_id="props.match.matchId"/></td>
            <td><FieldOdd type="handicap" field="instantHome" type_change="1" odds_type="2"
                          :company_id="store.bookmaker.companyIdMain" :match_id="props.match.matchId"/></td>
            <td><FieldOdd type="handicap" field="instantHandicap" type_change="1" odds_type="2"
                          :company_id="store.bookmaker.companyIdMain" :match_id="props.match.matchId"/></td>
            <td><FieldOdd type="handicap" field="instantAway" type_change="1" odds_type="2"
                          :company_id="store.bookmaker.companyIdMain" :match_id="props.match.matchId"/></td>
        </tr>
        <tr>
            <th scope="row p-2"><span class="p-2">1X2</span></th>
            <td><FieldOdd type="europeOdds" field="instantHome" type_change="2" odds_type="3"
                          :company_id="store.bookmaker.companyIdMain" :match_id="props.match.matchId"/></td>
            <td><FieldOdd type="europeOdds" field="instantDraw" type_change="2" odds_type="3"
                          :company_id="store.bookmaker.companyIdMain" :match_id="props.match.matchId"/></td>
            <td><FieldOdd type="europeOdds" field="instantAway" type_change="2" odds_type="3"
                          :company_id="store.bookmaker.companyIdMain" :match_id="props.match.matchId"/></td>
            <td><FieldOdd type="europeOdds" field="instantHome" type_change="1" odds_type="2"
                          :company_id="store.bookmaker.companyIdMain" :match_id="props.match.matchId"/></td>
            <td><FieldOdd type="europeOdds" field="instantDraw" type_change="1" odds_type="2"
                          :company_id="store.bookmaker.companyIdMain" :match_id="props.match.matchId"/></td>
            <td><FieldOdd type="europeOdds" field="instantAway" type_change="1" odds_type="2"
                          :company_id="store.bookmaker.companyIdMain" :match_id="props.match.matchId"/></td>
        </tr>
        <tr>
            <th scope="row"><span class="p-2">O/U</span></th>
            <td><FieldOdd type="overUnder" field="initialOver" type_change="2" odds_type="3"
                          :company_id="store.bookmaker.companyIdMain" :match_id="props.match.matchId"/></td>
            <td><FieldOdd type="overUnder" field="instantDraw" type_change="2" odds_type="3"
                          :company_id="store.bookmaker.companyIdMain" :match_id="props.match.matchId"/></td>
            <td><FieldOdd type="overUnder" field="initialUnder" type_change="2" odds_type="3"
                          :company_id="store.bookmaker.companyIdMain" :match_id="props.match.matchId"/></td>
            <td><FieldOdd type="overUnder" field="initialOver" type_change="1" odds_type="2"
                          :company_id="store.bookmaker.companyIdMain" :match_id="props.match.matchId"/></td>
            <td><FieldOdd type="overUnder" field="instantDraw" type_change="1" odds_type="2"
                          :company_id="store.bookmaker.companyIdMain" :match_id="props.match.matchId"/></td>
            <td><FieldOdd type="overUnder" field="initialUnder" type_change="1" odds_type="2"
                          :company_id="store.bookmaker.companyIdMain" :match_id="props.match.matchId"/></td>
        </tr>
        <tr>
            <td colspan="7" class="text-center py-1"><b-button variant="outline-info" size="sm"> view more </b-button></td>
        </tr>
    </table>
</template>
<script setup>
import {BButton} from "bootstrap-vue-next";
import {useAppStore} from "@/stores";
import FieldOdd from "@/views/components/patials/FieldOdd.vue";
const props = defineProps(['match']);
const store = useAppStore();
</script>
