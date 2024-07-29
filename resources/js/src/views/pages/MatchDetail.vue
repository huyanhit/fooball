<template>
    <div class="d-flex flex-column bg-white">
        <div class="text-center my-3">
            <span class="fw-bold text-red-500 me-1">
                <span class="fs-18"> {{data.match['leagueName']}}</span>
            </span>
            <span class="text-dark fs-14">
                15-01-2023 14:30 Sunday
            </span>
        </div>

        <div class="d-flex justify-content-around mb-3">
            <div class="d-flex align-items-center justify-content-end  text-center w-[35%]">
                <div class="fs-18 fw-bold">{{data.match['homeName']}}</div>
                <div class="inline-block mt-2">
                    <image-file :item="data.match"></image-file>
                    <img src="//football.bola012.com/image/team/images/40/1gy3vjsrhjq.png?8" height="80" alt="Shandong Taishan" />
                </div>
                <i class="ri ri-star-fill fs-36 ml-[30px]"></i>
            </div>
            <div class="d-flex align-items-center justify-content-center text-center w-[30%]">
                <div class="fs-48 mr-[40px] fw-bold">2</div>
                <div class="d-flex flex-column align-items-center">
                    <div>Finished</div>
                    <span class="text-truncate"> (<span title="Score 1st Half">0-1</span>,<span title="Score 2nd Half">2-0</span>)</span>
                </div>
                <div class="fs-48 ml-[40px] fw-bold">1</div>
            </div>
            <div class="d-flex align-items-center justify-content-start text-center w-[35%]">
                <i class="ri ri-star-fill fs-36 mr-[30px]"></i>
                <div class="inline-block">
                    <img src="//football.bola012.com/image/team/images/40/1gy3vjsrhjq.png?8" height="80" alt="Shandong Taishan" />
                </div>
                <div class="fs-18 fw-bold">{{data.match['awayName']}}</div>
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
                    <td>0.66</td>
                    <td>0</td>
                    <td>1.11</td>
                    <td>0.70</td>
                    <td>0</td>
                    <td>1.06</td>
                    <td>2.97</td>
                    <td>1.86</td>
                    <td>3.80</td>
                    <td>3.10</td>
                    <td>1.83</td>
                    <td>3.75</td>
                    <td>0.76</td>
                    <td>0.5/1</td>
                    <td>1.00</td>
                    <td>0.81</td>
                    <td>0.5/1</td>
                    <td>0.95</td>
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
import {computed, onMounted, reactive} from "vue";
import {useAppStore} from "@/stores";
import {useRoute, useRouter} from "vue-router";
import ImageFile from "@/views/components/patials/ImageFile.vue";
const props = defineProps(['match']);
const store = useAppStore();
const router = useRouter();
const route  = useRoute()

const data = reactive({
    handicap: {},
    europeOdds: {},
    match: {}
})

onMounted(()=>{
    store.getLiveScore();
})
data.match = computed(()=>{
    return {}
})

data.handicap = computed(()=>{
    return store.odd['handicap'][route.params.match_id]
})
data.europeOdds = computed(()=>{
    return store.odd['europeOdds'][route.params.match_id]
})
data.overUnder = computed(()=>{
    return store.odd['overUnder'][route.params.match_id]
})

</script>
<style>
.collapse{
    visibility: unset;
}
</style>
