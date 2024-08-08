<template>
    <div class="d-flex flex-column bg-white">
        <div class="text-center my-3">
            <span class="fw-bold text-red-500 me-1">
                <span class="fs-18">{{data.match['leagueName']}}</span>
            </span>
            <span class="fs-14 text-black">
                 {{moment.unix(data.match['matchTime']).format('LLLL')}}
            </span>
        </div>

        <div class="d-flex justify-content-around mb-3" v-if="data.match">
            <div class="d-flex align-items-center justify-content-end  text-center w-[35%]">
                <div class="fs-18 fw-bold mx-3  hover:text-blue-600">{{data.match['homeName']}}</div>
                <div class="inline-block mt-2">
                    <image-file save="true" v-if="data.homeTeam.id" :item="data.homeTeam" category="team" properties="logo" class="w-[80px]"></image-file>
                </div>
                <i class="ri ri-star-fill fs-36 ml-[30px] hover:text-yellow-500"></i>
            </div>
            <div class="d-flex align-items-center justify-content-center text-center w-[25%]">
                <div class="fs-48 mr-[20px] fw-bold">{{ data.match['homeScore'] }}</div>
                <div class="d-flex flex-column align-items-center">
                    <div class="fs-24" v-if="store.systems">
                        <TimeLiveConvert :match="data.match"/>
                    </div>
                    <div class="uppercase fw-bold" v-html="statusParse(data.match.status)"></div>
                    <span class="text-truncate"> (<span title="Score 1st Half">
                        {{data.match['homeHalfScore']}} - {{data.match['awayHalfScore']}}
                    </span>,<span title="Score 2nd Half">
                        {{ data.match['homeScore'] - data.match['homeHalfScore']}}
                        -
                        {{ data.match['awayScore'] - data.match['awayHalfScore']}}
                    </span>)</span>
                </div>
                <div class="fs-48 ml-[20px] fw-bold">{{ data.match['awayScore'] }}</div>
            </div>
            <div class="d-flex align-items-center justify-content-start text-center w-[35%]">
                <i class="ri ri-star-fill fs-36 mr-[30px] hover:text-yellow-500" ></i>
                <div class="inline-block">
                    <image-file save="true" v-if="data.awayTeam.id" :item="data.awayTeam" category="team" properties="logo" class="w-[80px]"></image-file>
                </div>
                <div class="fs-18 fw-bold mx-3 hover:text-blue-600">{{data.match['awayName']}}</div>
            </div>
        </div>
    </div>
    <ul class="nav nav-tabs nav-tabs-custom nav-success bg-white mt-1 p-2 d-flex justify-content-center" role="tablist">
        <li class="nav-item" role="presentation">
            <a class="nav-link active nav-link py-1 fw-bold" >
                <i class="ri-bubble-chart-line me-1"></i> TipsHot
            </a>
        </li>
        <li class="nav-item" role="presentation">
            <a class="nav-link py-1 fw-bold">
                <i class="ri-bubble-chart-line me-1"></i> Detail
            </a>
        </li>
        <li class="nav-item" role="presentation">
            <a class="nav-link py-1 fw-bold">
                <i class="ri-bubble-chart-line me-1"></i> Analysis
            </a>
        </li>
        <li class="nav-item" role="presentation">
            <a class="nav-link py-1 fw-bold">
                <i class="ri-bubble-chart-line me-1"></i> Odds
            </a>
        </li>
    </ul>
    <div class="bg-white border-top-dashed my-3 p-3">
        <!-- Bordered Tables -->
        <div class="text-center">
            <div class="fs-24 fw-bold"><span class="mb-3 inline-block">Live Odds Analysis</span></div>
            <table class="table table-bordered fs-13">
                <tbody>
                    <tr>
                        <th><span class="p-2 inline-block w-100 bg-gray-200 text-gray-600">Time</span></th>
                        <th><span class="p-2 inline-block w-100 bg-gray-200 text-gray-600">Score</span></th>
                        <th colspan="6"><span class="p-2 inline-block w-100 bg-gray-200 text-gray-600"><b>Asian Handicap</b></span></th>
                        <th colspan="6"><span class="p-2 inline-block w-100 bg-gray-200 text-gray-600"><b>1x2</b></span></th>
                        <th colspan="6"><span class="p-2 inline-block w-100 bg-gray-200 text-gray-600"><b>Over/Under</b></span></th>
                    </tr>
                    <tr>
                        <th><span class="p-2 inline-block h-100 w-100 bg-gray-200 text-gray-600"> - </span></th>
                        <th><span class="p-2 inline-block h-100 w-100 bg-gray-200 text-gray-600"> - </span></th>
                        <th colspan="3"><span class="p-2 inline-block w-100 bg-gray-200 text-gray-600">First Odds</span></th>
                        <th colspan="3"><span class="p-2 inline-block w-100 bg-gray-200 text-gray-600">Live Odds</span></th>
                        <th colspan="3"><span class="p-2 inline-block w-100 bg-gray-200 text-gray-600">First Odds</span></th>
                        <th colspan="3"><span class="p-2 inline-block w-100 bg-gray-200 text-gray-600">Live Odds</span></th>
                        <th colspan="3"><span class="p-2 inline-block w-100 bg-gray-200 text-gray-600">First Odds</span></th>
                        <th colspan="3"><span class="p-2 inline-block w-100 bg-gray-200 text-gray-600">Live Odds</span></th>
                    </tr>
                    <tr>
                        <td><span class="p-1 w-100 inline-block bg-green-500 text-white">Early</span></td>
                        <td>&nbsp;</td>

                        <td><FieldOdd type="handicap" field="initialHome" type_change="1" odds_type="1"
                                      :company_id="store.bookmaker.companyIdMain" :match_id="route.params.match_id"/></td>
                        <td><FieldOdd type="handicap" field="initialHandicap" type_change="1" odds_type="1"
                                      :company_id="store.bookmaker.companyIdMain" :match_id="route.params.match_id"/></td>
                        <td><FieldOdd type="handicap" field="initialAway" type_change="1" odds_type="1"
                                      :company_id="store.bookmaker.companyIdMain" :match_id="route.params.match_id"/></td>

                        <td><FieldOdd type="handicap" field="instantHome" type_change="1" odds_type="1"
                                      :company_id="store.bookmaker.companyIdMain" :match_id="route.params.match_id"/></td>
                        <td><FieldOdd type="handicap" field="instantHandicap" type_change="1" odds_type="1"
                                      :company_id="store.bookmaker.companyIdMain" :match_id="route.params.match_id"/></td>
                        <td><FieldOdd type="handicap" field="instantAway" type_change="1" odds_type="1"
                                      :company_id="store.bookmaker.companyIdMain" :match_id="route.params.match_id"/></td>

                        <td><FieldOdd type="europeOdds" field="initialHome" type_change="1" odds_type="1"
                                      :company_id="store.bookmaker.companyIdMain" :match_id="route.params.match_id"/></td>
                        <td><FieldOdd type="europeOdds" field="initialDraw" type_change="1" odds_type="1"
                                      :company_id="store.bookmaker.companyIdMain" :match_id="route.params.match_id"/></td>
                        <td><FieldOdd type="europeOdds" field="initialAway" type_change="1" odds_type="1"
                                      :company_id="store.bookmaker.companyIdMain" :match_id="route.params.match_id"/></td>

                        <td><FieldOdd type="europeOdds" field="instantHome" type_change="1" odds_type="1"
                                      :company_id="store.bookmaker.companyIdMain" :match_id="route.params.match_id"/></td>
                        <td><FieldOdd type="europeOdds" field="instantDraw" type_change="1" odds_type="1"
                                      :company_id="store.bookmaker.companyIdMain" :match_id="route.params.match_id"/></td>
                        <td><FieldOdd type="europeOdds" field="instantAway" type_change="1" odds_type="1"
                                      :company_id="store.bookmaker.companyIdMain" :match_id="route.params.match_id"/></td>

                        <td><FieldOdd type="overUnder" field="initialOver" type_change="1" odds_type="1"
                                      :company_id="store.bookmaker.companyIdMain" :match_id="route.params.match_id"/></td>
                        <td><FieldOdd type="overUnder" field="initialDraw" type_change="1" odds_type="1"
                                      :company_id="store.bookmaker.companyIdMain" :match_id="route.params.match_id"/></td>
                        <td><FieldOdd type="overUnder" field="initialUnder" type_change="1" odds_type="1"
                                      :company_id="store.bookmaker.companyIdMain" :match_id="route.params.match_id"/></td>

                        <td><FieldOdd type="overUnder" field="instantOver" type_change="1" odds_type="1"
                                      :company_id="store.bookmaker.companyIdMain" :match_id="route.params.match_id"/></td>
                        <td><FieldOdd type="overUnder" field="instantDraw" type_change="1" odds_type="1"
                                      :company_id="store.bookmaker.companyIdMain" :match_id="route.params.match_id"/></td>
                        <td><FieldOdd type="overUnder" field="instantUnder" type_change="1" odds_type="1"
                                      :company_id="store.bookmaker.companyIdMain" :match_id="route.params.match_id"/></td>
                    </tr>
                    <tr>
                        <td><span class="p-1 w-100 inline-block bg-red-500 text-white">Live</span></td>
                        <td>&nbsp;</td>

                        <td><FieldOdd type="handicap" field="initialHome" type_change="1" odds_type="2"
                                      :company_id="store.bookmaker.companyIdMain" :match_id="route.params.match_id"/></td>
                        <td><FieldOdd type="handicap" field="initialHandicap" type_change="1" odds_type="2"
                                      :company_id="store.bookmaker.companyIdMain" :match_id="route.params.match_id"/></td>
                        <td><FieldOdd type="handicap" field="initialAway" type_change="1" odds_type="2"
                                      :company_id="store.bookmaker.companyIdMain" :match_id="route.params.match_id"/></td>

                        <td><FieldOdd type="handicap" field="instantHome" type_change="1" odds_type="2"
                                      :company_id="store.bookmaker.companyIdMain" :match_id="route.params.match_id"/></td>
                        <td><FieldOdd type="handicap" field="instantHandicap" type_change="1" odds_type="2"
                                      :company_id="store.bookmaker.companyIdMain" :match_id="route.params.match_id"/></td>
                        <td><FieldOdd type="handicap" field="instantAway" type_change="1" odds_type="2"
                                      :company_id="store.bookmaker.companyIdMain" :match_id="route.params.match_id"/></td>

                        <td><FieldOdd type="europeOdds" field="initialHome" type_change="1" odds_type="2"
                                      :company_id="store.bookmaker.companyIdMain" :match_id="route.params.match_id"/></td>
                        <td><FieldOdd type="europeOdds" field="initialDraw" type_change="1" odds_type="2"
                                      :company_id="store.bookmaker.companyIdMain" :match_id="route.params.match_id"/></td>
                        <td><FieldOdd type="europeOdds" field="initialAway" type_change="1" odds_type="2"
                                      :company_id="store.bookmaker.companyIdMain" :match_id="route.params.match_id"/></td>

                        <td><FieldOdd type="europeOdds" field="instantHome" type_change="1" odds_type="2"
                                      :company_id="store.bookmaker.companyIdMain" :match_id="route.params.match_id"/></td>
                        <td><FieldOdd type="europeOdds" field="instantDraw" type_change="1" odds_type="2"
                                      :company_id="store.bookmaker.companyIdMain" :match_id="route.params.match_id"/></td>
                        <td><FieldOdd type="europeOdds" field="instantAway" type_change="1" odds_type="2"
                                      :company_id="store.bookmaker.companyIdMain" :match_id="route.params.match_id"/></td>

                        <td><FieldOdd type="overUnder" field="initialOver" type_change="1" odds_type="2"
                                      :company_id="store.bookmaker.companyIdMain" :match_id="route.params.match_id"/></td>
                        <td><FieldOdd type="overUnder" field="initialDraw" type_change="1" odds_type="2"
                                      :company_id="store.bookmaker.companyIdMain" :match_id="route.params.match_id"/></td>
                        <td><FieldOdd type="overUnder" field="initialUnder" type_change="1" odds_type="2"
                                      :company_id="store.bookmaker.companyIdMain" :match_id="route.params.match_id"/></td>

                        <td><FieldOdd type="overUnder" field="instantOver" type_change="1" odds_type="2"
                                      :company_id="store.bookmaker.companyIdMain" :match_id="route.params.match_id"/></td>
                        <td><FieldOdd type="overUnder" field="instantDraw" type_change="1" odds_type="2"
                                      :company_id="store.bookmaker.companyIdMain" :match_id="route.params.match_id"/></td>
                        <td><FieldOdd type="overUnder" field="instantUnder" type_change="1" odds_type="2"
                                      :company_id="store.bookmaker.companyIdMain" :match_id="route.params.match_id"/></td>
                    </tr>
                    <tr>
                        <td><span class="p-1 w-100 inline-block bg-blue-500 text-white">InPlay</span></td>
                        <td>&nbsp;</td>

                        <td><FieldOdd type="handicap" field="initialHome" type_change="2" odds_type="3"
                                      :company_id="store.bookmaker.companyIdMain" :match_id="route.params.match_id"/></td>
                        <td><FieldOdd type="handicap" field="initialHandicap" type_change="2" odds_type="3"
                                      :company_id="store.bookmaker.companyIdMain" :match_id="route.params.match_id"/></td>
                        <td><FieldOdd type="handicap" field="initialAway" type_change="2" odds_type="3"
                                      :company_id="store.bookmaker.companyIdMain" :match_id="route.params.match_id"/></td>

                        <td><FieldOdd type="handicap" field="instantHome" type_change="2" odds_type="3"
                                      :company_id="store.bookmaker.companyIdMain" :match_id="route.params.match_id"/></td>
                        <td><FieldOdd type="handicap" field="instantHandicap" type_change="2" odds_type="3"
                                      :company_id="store.bookmaker.companyIdMain" :match_id="route.params.match_id"/></td>
                        <td><FieldOdd type="handicap" field="instantAway" type_change="2" odds_type="3"
                                      :company_id="store.bookmaker.companyIdMain" :match_id="route.params.match_id"/></td>

                        <td><FieldOdd type="europeOdds" field="initialHome" type_change="2" odds_type="3"
                                      :company_id="store.bookmaker.companyIdMain" :match_id="route.params.match_id"/></td>
                        <td><FieldOdd type="europeOdds" field="initialDraw" type_change="2" odds_type="3"
                                      :company_id="store.bookmaker.companyIdMain" :match_id="route.params.match_id"/></td>
                        <td><FieldOdd type="europeOdds" field="initialAway" type_change="2" odds_type="3"
                                      :company_id="store.bookmaker.companyIdMain" :match_id="route.params.match_id"/></td>

                        <td><FieldOdd type="europeOdds" field="instantHome" type_change="2" odds_type="3"
                                      :company_id="store.bookmaker.companyIdMain" :match_id="route.params.match_id"/></td>
                        <td><FieldOdd type="europeOdds" field="instantDraw" type_change="2" odds_type="3"
                                      :company_id="store.bookmaker.companyIdMain" :match_id="route.params.match_id"/></td>
                        <td><FieldOdd type="europeOdds" field="instantAway" type_change="2" odds_type="3"
                                      :company_id="store.bookmaker.companyIdMain" :match_id="route.params.match_id"/></td>

                        <td><FieldOdd type="overUnder" field="initialOver" type_change="2" odds_type="3"
                                      :company_id="store.bookmaker.companyIdMain" :match_id="route.params.match_id"/></td>
                        <td><FieldOdd type="overUnder" field="initialDraw" type_change="2" odds_type="3"
                                      :company_id="store.bookmaker.companyIdMain" :match_id="route.params.match_id"/></td>
                        <td><FieldOdd type="overUnder" field="initialUnder" type_change="2" odds_type="3"
                                      :company_id="store.bookmaker.companyIdMain" :match_id="route.params.match_id"/></td>

                        <td><FieldOdd type="overUnder" field="instantOver" type_change="2" odds_type="3"
                                      :company_id="store.bookmaker.companyIdMain" :match_id="route.params.match_id"/></td>
                        <td><FieldOdd type="overUnder" field="instantDraw" type_change="2" odds_type="3"
                                      :company_id="store.bookmaker.companyIdMain" :match_id="route.params.match_id"/></td>
                        <td><FieldOdd type="overUnder" field="instantUnder" type_change="2" odds_type="3"
                                      :company_id="store.bookmaker.companyIdMain" :match_id="route.params.match_id"/></td>
                    </tr>
                </tbody>
            </table>
            <div>
                <span class="px-2 bg-green-200  mx-2"></span> Historical Data <span class="px-2 bg-blue-200 mx-2"></span> Lastest Data
            </div>
        </div>
    </div>
    <div class="bg-white border-top-dashed my-3 p-3">
        <div class="text-center mt-3">
            <div class="d-flex justify-content-around fs-18 fw-bold my-2">
                <span class="text-green-500">{{data.match['homeName']}}</span>
                <span class="text-red-500">{{data.match['awayName']}}</span>
            </div>
            <table class="table table-striped table-bordered mt-3" >
                <tbody>
                    <tr class="ky_tit">
                        <th style="width: 35%"></th>
                        <th style="width: 10%"><span class="fs-24 text-gray-600 p-3 inline-block">{{ data.match['homeScore'] }}</span></th>
                        <th style="width: 10%"><span class="text-gray-600 p-3 inline-block"> Phút </span></th>
                        <th style="width: 10%"><span class="fs-24 text-gray-600 p-3 inline-block">{{ data.match['awayScore'] }}</span></th>
                        <th style="width: 35%"></th>
                    </tr>
                    <template v-for="(item, index) in store.events[route.params.match_id]" :key="index">
                        <EventField :event="item"/>
                    </template>
                </tbody>
            </table>
        </div>
    </div>
    <div class="bg-white border-top-dashed my-3 p-3">
        <!-- Bordered Tables -->
        <div class="text-center">
            <div class="fs-24 fw-bold my-2">Team Statistics</div>
            <table class="table table-bordered mt-3">
                    <tbody><tr align="center">
                        <th>Home</th>
                        <th>Recent 3 Matches</th>
                        <th>Away</th>
                        <th>Home</th>
                        <th>Recent 10 Matches</th>
                        <th>Away</th>
                    </tr>
                    <tr align="center">
                        <td class="red">2.7</td>
                        <td><b>Goal</b></td>
                        <td class="">1.7</td>
                        <td class="red">3</td>
                        <td><b>Goal</b></td>
                        <td class="">2</td>
                    </tr>
                    <tr align="center">
                        <td class="">0.3</td>
                        <td><b>Loss</b></td>
                        <td class="">0.3</td>
                        <td class="red">0.6</td>
                        <td><b>Loss</b></td>
                        <td class="">0.4</td>
                    </tr>
                    <tr align="center">
                        <td class="">3</td>
                        <td><b>Shot(OT)</b></td>
                        <td class=" red">7.7</td>
                        <td class="">6.3</td>
                        <td><b>Shot(OT)</b></td>
                        <td class="red">8.6</td>
                    </tr>
                    <tr align="center">
                        <td class="red">8.3</td>
                        <td><b>Corner</b></td>
                        <td class="">5.7</td>
                        <td class="red">6.9</td>
                        <td><b>Corner</b></td>
                        <td class="">4.7</td>
                    </tr>
                    <tr align="center">
                        <td class="">0</td>
                        <td><b>Yellow Card</b></td>
                        <td class=" red">1.3</td>
                        <td class="">1</td>
                        <td><b>Yellow Card</b></td>
                        <td class="red">2.3</td>
                    </tr>
                    <tr align="center">
                        <td class="">0</td>
                        <td><b>Fouls</b></td>
                        <td class="">0</td>
                        <td class="">14.8</td>
                        <td><b>Fouls</b></td>
                        <td class="red">18.2</td>
                    </tr>
                    <tr align="center">
                        <td class="red">55.7%</td>
                        <td><b>Possession</b></td>
                        <td class="">52%</td>
                        <td class="red">58.6%</td>
                        <td><b>Possession</b></td>
                        <td class="">54.8%</td>
                    </tr>
                    </tbody></table>
        </div>
    </div>
</template>
<script setup>
import {onMounted, reactive, onUnmounted} from "vue";
import {useAppStore} from "@/stores";
import {useRoute, useRouter} from "vue-router";

import moment from "moment";
import ImageFile from "@/views/components/patials/ImageFile.vue";
import TimeLiveConvert from "@/views/components/patials/TimeLiveConvert.vue";
import FieldOdd from "@/views/components/patials/FieldOdd.vue";
import EventField from "@/views/components/patials/EventField.vue";

const props = defineProps(['match']);
const store = useAppStore();
const router = useRouter();
const route  = useRoute()

const data = reactive({
    match: {},
    homeTeam: {},
    awayTeam: {},
    interval: null
})

onMounted(async () => {
    await store.getLiveScore({matchId: route.params.match_id});
    await store.getOdds({matchId: route.params.match_id});
    await store.getEvents({matchId: route.params.match_id});
    await store.getBookmaker();


    data.match = store.live_scores[route.params.match_id];
    data.homeTeam = await store.getTeam(data.match.homeId)
    data.awayTeam = await store.getTeam(data.match.awayId)

    reload();
})

onUnmounted(()=>{
    clearInterval(data.intervalL);
    clearInterval(data.intervalO);
})
const reload = function () {
    data.intervalL = setInterval(() => {
        store.getLiveScore({matchId: route.params.match_id});
    }, 600*1000);
    data.intervalO = setInterval(() => {
        store.getOddChange({matchId: route.params.match_id});
        store.getLiveScoreChange();
    }, 30*1000);
}

const statusParse = function (status){
    switch (status) {
        case 0: return '<span class="text-black"> Not started </span>';
        case 1: return '<span class="text-red-500"><span class="spinner-grow spinner-grow-sm"></span> First half </span>';
        case 2: return '<span class="text-red-500"><span class="spinner-grow spinner-grow-sm"></span> Half time </span>';
        case 3: return '<span class="text-red-500"><span class="spinner-grow spinner-grow-sm"></span> Second half </span>';
        case 4: return '<span class="text-red-500"><span class="spinner-grow spinner-grow-sm"></span> Extra time </span>';
        case 5: return '<span class="text-red-500"><span class="spinner-grow spinner-grow-sm"></span> Penalty </span>';
        case -1: return '<span class="text-black"> Finished </span>';
        case -10: return '<span class="text-black"> Cancelled </span>';
        case -11: return '<span class="text-black"> TBD </span>';
        case -12: return '<span class="text-black"> Terminated </span>';
        case -13: return '<span class="text-black"> Interrupted </span>';
        case -14: return '<span class="text-black"> Postponed </span>';
    }
}
</script>
<style>
.table>:not(caption)>*>* {
    border-bottom: none;
    padding: 0 !important;
}
.collapse{
    visibility: unset;
}
</style>
