<template>
    <table class="fs-11">
        <tr class="px-1">
            <td><FieldOdd type="handicap" field="instantHome" type_change="2" odds_type="3"
                          :company_id="store.bookmaker.companyIdMain" :match_id="props.match.matchId"/></td>
            <td><FieldOdd type="handicap" field="instantHandicap" type_change="2" odds_type="3"
                          :company_id="store.bookmaker.companyIdMain" :match_id="props.match.matchId"/></td>
            <td><FieldOdd type="handicap" field="instantAway" type_change="2" odds_type="3"
                          :company_id="store.bookmaker.companyIdMain" :match_id="props.match.matchId"/></td>
        </tr>
        <tr class="px-1">
            <td><FieldOdd type="europeOdds" field="instantHome" type_change="2" odds_type="3"
                          :company_id="store.bookmaker.companyIdMain" :match_id="props.match.matchId"/></td>
            <td><FieldOdd type="europeOdds" field="instantDraw" type_change="2" odds_type="3"
                          :company_id="store.bookmaker.companyIdMain" :match_id="props.match.matchId"/></td>
            <td><FieldOdd type="europeOdds" field="instantAway" type_change="2" odds_type="3"
                          :company_id="store.bookmaker.companyIdMain" :match_id="props.match.matchId"/></td>
        </tr>
    </table>
</template>
<script setup>
import {useAppStore} from "@/stores";
import FieldOdd from "@/views/components/patials/FieldOdd.vue";
const store    = useAppStore();
const props    = defineProps(['match']);
</script>
