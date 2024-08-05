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
            <div class="fs-24 fw-bold my-2">Live Odds Analysis</div>
            <table class="table table-bordered fs-13">
                <tbody id="oddsTbody">
                <tr>
                    <th rowspan="2" class="">Time</th>
                    <th rowspan="2">Score</th>
                    <th height="20" colspan="6"><b>Asian Handicap</b></th>
                    <th colspan="6"><b>1x2</b></th>
                    <th colspan="6" class=""><b>Over/Under</b></th>
                </tr>
                <tr>
                    <th height="20" colspan="3">First Odds</th>
                    <th colspan="3" class="ll th-bg2 rl">Live Odds</th>
                    <th colspan="3">First Odds</th>
                    <th colspan="3" class="ll th-bg2 rl">Live Odds</th>
                    <th colspan="3">First Odds</th>
                    <th colspan="3">Live Odds</th>
                </tr>
                <tr>
                    <td>Early</td>
                    <td>&nbsp;</td>

                    <td><div class="fs-11 hover:text-blue-600"> {{getFirstOdd('handicap', 'initialHome')}} </div></td>
                    <td><div class="fs-11 hover:text-blue-600"> {{getFirstOdd('handicap', 'initialHandicap')}} </div></td>
                    <td><div class="fs-11 hover:text-blue-600"> {{getFirstOdd('handicap', 'initialAway')}} </div></td>

                    <td><div class="fs-11 hover:text-blue-600"> {{getFirstOdd('handicap', 'instantHome')}} </div></td>
                    <td><div class="fs-11 hover:text-blue-600"> {{getFirstOdd('handicap', 'instantHandicap')}} </div></td>
                    <td><div class="fs-11 hover:text-blue-600"> {{getFirstOdd('handicap', 'instantAway')}} </div></td>

                    <td><div class="fs-11 hover:text-blue-600"> {{getFirstOdd('europeOdds', 'initialHome')}} </div></td>
                    <td><div class="fs-11 hover:text-blue-600"> {{getFirstOdd('europeOdds', 'initialDraw')}} </div></td>
                    <td><div class="fs-11 hover:text-blue-600"> {{getFirstOdd('europeOdds', 'initialAway')}} </div></td>

                    <td><div class="fs-11 hover:text-blue-600"> {{getFirstOdd('europeOdds', 'instantHome')}} </div></td>
                    <td><div class="fs-11 hover:text-blue-600"> {{getFirstOdd('europeOdds', 'instantDraw')}} </div></td>
                    <td><div class="fs-11 hover:text-blue-600"> {{getFirstOdd('europeOdds', 'instantAway')}} </div></td>

                    <td><div class="fs-11 hover:text-blue-600"> {{getFirstOdd('overUnder', 'initialOver')}} </div></td>
                    <td><div class="fs-11 hover:text-blue-600"> {{getFirstOdd('overUnder', 'initialDraw')}} </div></td>
                    <td><div class="fs-11 hover:text-blue-600"> {{getFirstOdd('overUnder', 'initialUnder')}} </div></td>

                    <td><div class="fs-11 hover:text-blue-600"> {{getFirstOdd('overUnder', 'instantOver')}} </div></td>
                    <td><div class="fs-11 hover:text-blue-600"> {{getFirstOdd('overUnder', 'instantDraw')}} </div></td>
                    <td><div class="fs-11 hover:text-blue-600"> {{getFirstOdd('overUnder', 'instantUnder')}} </div></td>
                </tr>

                <tr>
                    <td>Live</td>
                    <td>&nbsp;</td>

                    <td><div class="fs-11 hover:text-blue-600"> {{getLiveOdds('handicap', 'initialHome')}} </div></td>
                    <td><div class="fs-11 hover:text-blue-600"> {{getLiveOdds('handicap', 'initialHandicap')}} </div></td>
                    <td><div class="fs-11 hover:text-blue-600"> {{getLiveOdds('handicap', 'initialAway')}} </div></td>

                    <td><div class="fs-11 hover:text-blue-600"> {{getLiveOdds('handicap', 'instantHome')}} </div></td>
                    <td><div class="fs-11 hover:text-blue-600"> {{getLiveOdds('handicap', 'instantHandicap')}} </div></td>
                    <td><div class="fs-11 hover:text-blue-600"> {{getLiveOdds('handicap', 'instantAway')}} </div></td>

                    <td><div class="fs-11 hover:text-blue-600"> {{getLiveOdds('europeOdds', 'initialHome')}} </div></td>
                    <td><div class="fs-11 hover:text-blue-600"> {{getLiveOdds('europeOdds', 'initialDraw')}} </div></td>
                    <td><div class="fs-11 hover:text-blue-600"> {{getLiveOdds('europeOdds', 'initialAway')}} </div></td>

                    <td><div class="fs-11 hover:text-blue-600"> {{getLiveOdds('europeOdds', 'instantHome')}} </div></td>
                    <td><div class="fs-11 hover:text-blue-600"> {{getLiveOdds('europeOdds', 'instantDraw')}} </div></td>
                    <td><div class="fs-11 hover:text-blue-600"> {{getLiveOdds('europeOdds', 'instantAway')}} </div></td>

                    <td><div class="fs-11 hover:text-blue-600"> {{getLiveOdds('overUnder', 'initialOver')}} </div></td>
                    <td><div class="fs-11 hover:text-blue-600"> {{getLiveOdds('overUnder', 'initialDraw')}} </div></td>
                    <td><div class="fs-11 hover:text-blue-600"> {{getLiveOdds('overUnder', 'initialUnder')}} </div></td>

                    <td><div class="fs-11 hover:text-blue-600"> {{getLiveOdds('overUnder', 'instantOver')}} </div></td>
                    <td><div class="fs-11 hover:text-blue-600"> {{getLiveOdds('overUnder', 'instantDraw')}} </div></td>
                    <td><div class="fs-11 hover:text-blue-600"> {{getLiveOdds('overUnder', 'instantUnder')}} </div></td>
                </tr>

                <tr>
                    <td>InPlay</td>
                    <td>&nbsp;</td>

                    <td><div class="fs-11 hover:text-blue-600"> {{getInPlayOdd('handicap', 'initialHome')}} </div></td>
                    <td><div class="fs-11 hover:text-blue-600"> {{getInPlayOdd('handicap', 'initialHandicap')}} </div></td>
                    <td><div class="fs-11 hover:text-blue-600"> {{getInPlayOdd('handicap', 'initialAway')}} </div></td>

                    <td><div class="fs-11 hover:text-blue-600"> {{getInPlayOdd('handicap', 'instantHome')}} </div></td>
                    <td><div class="fs-11 hover:text-blue-600"> {{getInPlayOdd('handicap', 'instantHandicap')}} </div></td>
                    <td><div class="fs-11 hover:text-blue-600"> {{getInPlayOdd('handicap', 'instantAway')}} </div></td>

                    <td><div class="fs-11 hover:text-blue-600"> {{getInPlayOdd('europeOdds', 'initialHome')}} </div></td>
                    <td><div class="fs-11 hover:text-blue-600"> {{getInPlayOdd('europeOdds', 'initialDraw')}} </div></td>
                    <td><div class="fs-11 hover:text-blue-600"> {{getInPlayOdd('europeOdds', 'initialAway')}} </div></td>

                    <td><div class="fs-11 hover:text-blue-600"> {{getInPlayOdd('europeOdds', 'instantHome')}} </div></td>
                    <td><div class="fs-11 hover:text-blue-600"> {{getInPlayOdd('europeOdds', 'instantDraw')}} </div></td>
                    <td><div class="fs-11 hover:text-blue-600"> {{getInPlayOdd('europeOdds', 'instantAway')}} </div></td>

                    <td><div class="fs-11 hover:text-blue-600"> {{getInPlayOdd('overUnder', 'initialOver')}} </div></td>
                    <td><div class="fs-11 hover:text-blue-600"> {{getInPlayOdd('overUnder', 'initialDraw')}} </div></td>
                    <td><div class="fs-11 hover:text-blue-600"> {{getInPlayOdd('overUnder', 'initialUnder')}} </div></td>

                    <td><div class="fs-11 hover:text-blue-600"> {{getInPlayOdd('overUnder', 'instantOver')}} </div></td>
                    <td><div class="fs-11 hover:text-blue-600"> {{getInPlayOdd('overUnder', 'instantDraw')}} </div></td>
                    <td><div class="fs-11 hover:text-blue-600"> {{getInPlayOdd('overUnder', 'instantUnder')}} </div></td>
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
                <span>Shandong Taishan</span>
                <span>Shandong Taishan</span>
            </div>
            <table class="table table-striped table-bordered mt-3" >
                <tbody>
                <tr class="ky_tit">
                    <th></th>
                    <th><span class="t15">2</span></th>
                    <th>Minutes</th>
                    <th><span class="t15 blue">1</span></th>
                    <th></th>
                </tr>
                <tr>
                    <td style="text-align: right;"></td>
                    <td></td>
                    <td>
                        <b>90+3'</b>
                    </td>
                    <td>
                        <img alt="Yellow Card" src="/images/bf_img/3.png" />
                    </td>
                    <td style="text-align: left;">
                        <a href="//football.bola012.com/team/player/226475" target="_blank">Abdusalam A.</a>
                    </td>
                </tr>
                <tr>
                    <td style="text-align: right;"></td>
                    <td></td>
                    <td>
                        <b>90+2'</b>
                    </td>
                    <td>
                        <img alt="Sub" src="/images/bf_img/11.png" />
                    </td>
                    <td style="text-align: left;">
                        <img alt="Sub in" src="/images/bf_img/4.png" />
                        <a href="//football.bola012.com/team/player/63395" target="_blank">Gao Di</a>

                        <img alt="Sub out" src="/images/bf_img/5.png" />
                        <a href="//football.bola012.com/team/player/76271" target="_blank">Gu Bin</a>
                    </td>
                </tr>
                <tr>
                    <td style="text-align: right;"></td>
                    <td></td>
                    <td>
                        <b>90+1'</b>
                    </td>
                    <td>
                        <img alt="Sub" src="/images/bf_img/11.png" />
                    </td>
                    <td style="text-align: left;">
                        <img alt="Sub in" src="/images/bf_img/4.png" />
                        <a href="//football.bola012.com/team/player/226475" target="_blank">Abdusalam A.</a>

                        <img alt="Sub out" src="/images/bf_img/5.png" />
                        <a href="//football.bola012.com/team/player/84217" target="_blank">Zhang Jiaqi</a>
                    </td>
                </tr>
                <tr>
                    <td style="text-align: right;">
                        <a href="//football.bola012.com/team/player/84217" target="_blank">Zhang Jiaqi</a>
                    </td>
                    <td>
                        <img alt="Own goal" src="/images/bf_img/8.png" />
                    </td>
                    <td>
                        <b>90'</b>
                    </td>
                    <td></td>
                    <td style="text-align: left;"></td>
                </tr>
                <tr>
                    <td style="text-align: right;">
                        <img alt="Sub in" src="/images/bf_img/4.png" />
                        <a href="//football.bola012.com/team/player/144928" target="_blank">Li Hailong</a>

                        <img alt="Sub out" src="/images/bf_img/5.png" />
                        <a href="//football.bola012.com/team/player/151302" target="_blank">Liu Yang</a>
                    </td>
                    <td>
                        <img alt="Sub" src="/images/bf_img/11.png" />
                    </td>
                    <td>
                        <b>73'</b>
                    </td>
                    <td></td>
                    <td style="text-align: left;"></td>
                </tr>
                <tr>
                    <td style="text-align: right;">
                        <img alt="Sub in" src="/images/bf_img/4.png" />
                        <a href="//football.bola012.com/team/player/100275" target="_blank">Jin Jingdao</a>

                        <img alt="Sub out" src="/images/bf_img/5.png" />
                        <a href="//football.bola012.com/team/player/80513" target="_blank">Ji Xiang</a>
                    </td>
                    <td>
                        <img alt="Sub" src="/images/bf_img/11.png" />
                    </td>
                    <td>
                        <b>62'</b>
                    </td>
                    <td></td>
                    <td style="text-align: left;"></td>
                </tr>
                <tr>
                    <td style="text-align: right;">
                        <a href="//football.bola012.com/team/player/151302" target="_blank">Liu Yang</a>
                    </td>
                    <td>
                        <img alt="Yellow Card" src="/images/bf_img/3.png" />
                    </td>
                    <td>
                        <b>61'</b>
                    </td>
                    <td></td>
                    <td style="text-align: left;"></td>
                </tr>
                <tr>
                    <td style="text-align: right;">
                        <a href="//football.bola012.com/team/player/63405" target="_blank">Zhang Chi</a>
                    </td>
                    <td>
                        <img alt="Yellow Card" src="/images/bf_img/3.png" />
                    </td>
                    <td>
                        <b>57'</b>
                    </td>
                    <td></td>
                    <td style="text-align: left;"></td>
                </tr>
                <tr>
                    <td style="text-align: right;"></td>
                    <td></td>
                    <td>
                        <b>55'</b>
                    </td>
                    <td>
                        <img alt="Yellow Card" src="/images/bf_img/3.png" />
                    </td>
                    <td style="text-align: left;">
                        <a href="//football.bola012.com/team/player/84217" target="_blank">Zhang Jiaqi</a>
                    </td>
                </tr>
                <tr>
                    <td style="text-align: right;">
                        <a href="//football.bola012.com/team/player/178336" target="_blank">Chen Pu</a>
                    </td>
                    <td>
                        <img alt="Goal" src="/images/bf_img/1.png" />
                    </td>
                    <td>
                        <b>53'</b>
                    </td>
                    <td></td>
                    <td style="text-align: left;"></td>
                </tr>
                <tr>
                    <td style="text-align: right;">
                        <img alt="Sub in" src="/images/bf_img/4.png" />
                        <a href="//football.bola012.com/team/player/100569" target="_blank">Wu Xinghan</a>

                        <img alt="Sub out" src="/images/bf_img/5.png" />
                        <a href="//football.bola012.com/team/player/80352" target="_blank">Wang Tong</a>
                    </td>
                    <td>
                        <img alt="Sub" src="/images/bf_img/11.png" />
                    </td>
                    <td>
                        <b>46'</b>
                    </td>
                    <td></td>
                    <td style="text-align: left;"></td>
                </tr>
                <tr>
                    <td style="text-align: right;"></td>
                    <td></td>
                    <td>
                        <b>38'</b>
                    </td>
                    <td>
                        <img alt="Yellow Card" src="/images/bf_img/3.png" />
                    </td>
                    <td style="text-align: left;">
                        <a href="//football.bola012.com/team/player/82535" target="_blank">Dong Yu</a>
                    </td>
                </tr>
                <tr>
                    <td style="text-align: right;"></td>
                    <td></td>
                    <td>
                        <b>36'</b>
                    </td>
                    <td>
                        <img alt="Goal" src="/images/bf_img/1.png" />
                    </td>
                    <td style="text-align: left;">
                        <a href="//football.bola012.com/team/player/76271" target="_blank">Gu Bin</a>
                    </td>
                </tr>
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
import {onMounted, reactive} from "vue";
import {useAppStore} from "@/stores";
import {useRoute, useRouter} from "vue-router";
import moment from "moment";
import ImageFile from "@/views/components/patials/ImageFile.vue";
import {onUnmounted} from "@vue/runtime-core";
import TimeLiveConvert from "@/views/components/patials/TimeLiveConvert.vue";

const props = defineProps(['match']);
const store = useAppStore();
const router = useRouter();
const route  = useRoute()
const oddsInPlay   = 3
const oddsInstant  = 2
const oddsEarly    = 1

const data = reactive({
    match: {},
    homeTeam: {},
    awayTeam: {},
    interval: null
})

onMounted(async () => {
    await store.getLiveScore({matchId: route.params.match_id});
    await store.getOdds({matchId: route.params.match_id});
    await store.getBookmaker();

    data.match = store.live_scores.find((item) => item.matchId === route.params.match_id)
    data.homeTeam = await store.getTeam(data.match.homeId)
    data.awayTeam = await store.getTeam(data.match.awayId)

    await reload();
})

onUnmounted(()=>{
    clearInterval(data.interval);
})
const reload = function () {
    data.interval = setInterval(() => {
        store.getLiveScore({matchId: route.params.match_id});
        store.getOddChange({matchId: route.params.match_id});
    }, 60*1000); //2 s lấy 1 lần
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

function getFirstOdd(type, field){
    let early = store.odds[type+'_'+store.bookmaker.companyIdMain+'_'+route.params.match_id+'_'+oddsEarly]
    if(early){
        for (let i in early){
            if(early[i] && early[i][field]) {
                return early[i][field];
            }
        }
    }

    return '-'
}
function getLiveOdds(type, field){
    let instant = store.odds[type+'_'+store.bookmaker.companyIdMain+'_'+route.params.match_id+'_'+oddsInstant]
    if(instant) {
        for (let i in instant) {
            if (instant[i] && instant[i][field]) {
                return instant[i][field];
            }
        }
    }

    return '-'
}
function getInPlayOdd(type, field){
    let inPlay = store.odds[type+'_'+store.bookmaker.companyIdMain+'_'+route.params.match_id+'_'+oddsInPlay]
    if(inPlay){
        for (let i in inPlay){
            if(inPlay[i] && inPlay[i][field]) {
                return inPlay[i][field];
            }
        }
    }

    return '-'
}
</script>
<style>
.collapse{
    visibility: unset;
}
</style>
