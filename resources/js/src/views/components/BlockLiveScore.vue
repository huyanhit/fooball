<template>
    <b-overlay :show="data.overlay">
        <div class="text-center mb-0 p-2 overflow-hidden">
            <div class="flex-fill fs-16 uppercase p-2">Lịch đấu hôm nay</div>
            <div class="d-flex flex-row position-relative mb-2">
                <div class="flex-fill me-2">
                    <input type="text" class="form-control" v-model="store.keyword" @input="store.page_show = 1"
                           placeholder="Lọc theo tên đội bóng"
                           autocomplete="off" id="search-options" value="">
                </div>
                <span class="m-0 flex-shrink-1 fs-12 border rounded border-gray-600 text-primary p-2 me-1">Tìm thấy {{liveScoreFilter.length}} trận</span>
                <span class="m-0 flex-shrink-1 fs-12 border rounded border-gray-600 text-primary p-2 me-1">Trang {{store.page_show}}</span>
            </div>
            <div class="d-flex flex-row position-relative mb-2">
                <span class="m-0 flex-shrink-1 fs-12 border rounded bg-gray-500 text-white px-1 cursor-pointer me-2"
                      @click="changeStatus('reset')">Reset</span>
                <span class="m-0 flex-shrink-1 fs-12 border rounded border-gray-600 text-primary px-1 cursor-pointer me-2"
                      :class="{'bg-red-400 text-white': store.is_status === 'live'}"
                      @click="changeStatus('live')">live</span>
                <span class="m-0 flex-shrink-1 fs-12 border rounded border-gray-600 text-primary px-1 cursor-pointer me-2"
                      :class="{'bg-red-400 text-white': store.is_status === 'not_start'}"
                      @click="changeStatus('not_start')">not start</span>
                <span class="m-0 flex-shrink-1 fs-12 border rounded border-gray-600 text-primary px-1 cursor-pointer me-2"
                      :class="{'bg-red-400 text-white': store.is_status === 'first_half'}"
                      @click="changeStatus('first_half')">first half</span>
                <span class="m-0 flex-shrink-1 fs-12 border rounded border-gray-600 text-primary px-1 cursor-pointer me-2"
                      :class="{'bg-red-400 text-white': store.is_status === 'half_time'}"
                      @click="changeStatus('half_time')">half time</span>
                <span class="m-0 flex-shrink-1 fs-12 border rounded border-gray-600 text-primary px-1 cursor-pointer me-2"
                      :class="{'bg-red-400 text-white': store.is_status === 'second_half'}"
                      @click="changeStatus('second_half')">second half</span>
                <span class="m-0 flex-shrink-1 fs-12 border rounded border-gray-600 text-primary px-1 cursor-pointer me-2"
                      :class="{'bg-red-400 text-white': store.is_status === 'extra_time'}"
                      @click="changeStatus('extra_time')">extra time</span>
                <span class="m-0 flex-shrink-1 fs-12 border rounded border-gray-600 text-primary px-1 cursor-pointer me-2"
                      :class="{'bg-red-400 text-white': store.is_status === 'penalty'}"
                      @click="changeStatus('penalty')">penalty</span>
                <span class="m-0 flex-shrink-1 fs-12 border rounded border-gray-600 text-primary px-1 cursor-pointer me-2"
                      :class="{'bg-red-400 text-white': store.is_status === 'order'}"
                      @click="changeStatus('order')">order</span>
            </div>
            <table>
                <tr class="text-center uppercase h-[30px] bg-success text-white fs-12">
                    <th style="width: 5%">
                        <div class="flex-fill me-2">
                            <b-button size="sm" class="btn-outline-warning hover:text-red-500 cursor-pointer"
                                      @click="store.likes = []">
                                <i class="ri ri-delete-bin-2-line"/>
                            </b-button>
                        </div>
                    </th>
                    <th style="width: 13%;">time</th>
                    <td style="width: 2%;"></td>
                    <th style="width: 18%;">home</th>
                    <th style="width: 20%;">score</th>
                    <th style="width: 18%;">away</th>
                    <th style="width: 3%;"><i class="ri-flag-2-fill"></i></th>
                    <th style="width: 3%;">FT</th>
                    <th style="width: 5%;">Data</th>
                    <td style="width: 18%; text-align: right">
                        <BDropdown variant="success" size="sm" dropend class="bookmaker min-w-[100px]">
                            <template #button-content>
                                <span class="min-w-[80px] uppercase"> {{store.bookmaker.companyName??choose}} </span>
                            </template>
                            <BDropdownItem v-for="item in store.bookmakers" @click="store.bookmaker = item" >
                                <span> {{ item.companyName }}</span>
                            </BDropdownItem>
                        </BDropdown>
                    </td>
                </tr>
            </table>
            <div class="h-[calc(100vh-360px)] overflow-auto" id="simple-bar">
                <table class="relative border border-groove">
                    <tr class="h-[0]">
                        <th style="width: 5%"></th>
                        <th style="width: 13%;"></th>
                        <td style="width: 2%;"></td>
                        <th style="width: 18%;"></th>
                        <th style="width: 20%;"></th>
                        <th style="width: 18%;"></th>
                        <th style="width: 3%;"></th>
                        <th style="width: 3%;"></th>
                        <th style="width: 3%;"></th>
                        <td style="width: 18%;"></td>
                    </tr>
                    <template v-for="(item, index) in liveScoreFilter" class="text-center h-[40px]" :key="index">
                        <template v-if="pageMinItem(index) && pageMaxItem(index)">
                            <tr class="text-left bg-success-light"
                                v-if="!liveScoreFilter[index - 1] || (item.leagueId !== liveScoreFilter[index - 1].leagueId)">
                                <td colspan="10" class="h-[30px] px-2 fw-bold" v-if="store.league_profiles[item.leagueId]">
                                    <span>{{store.league_profiles[item.leagueId].name}}</span>
                                </td>
                            </tr>
                            <tr class="text-center h-[30px]">
                                <td>
                                    <b-button size="sm" class="btn-outline-light text-muted cursor-pointer" @click="setLike(item.id)">
                                        <i class="ri ri-star-fill hover:text-yellow-500" :class="{'text-yellow-500': store.likes.includes(item.id)}"></i>
                                    </b-button>
                                </td>
                                <td>
                                    <div class="d-flex flex-column w-50px fs-11">
                                        <span v-if="[1, 2, 3].includes(item.status)">
                                             {{timeLineMatch(store.systems.time, item)}}
                                        </span>
                                        <span v-else>
                                            {{moment.unix(item.updateTime).format('LT')}}
                                        </span>
                                        <span class="lowercase" v-html="statusParse(item.status)"></span>
                                    </div>
                                </td>
                                <td>
                                    <div ><i class="ri ri-movie-line hover:text-red-500"/></div>
                                </td>
                                <td>
                                    <b-link :to="'/match-detail/'+item.matchId" class="cursor-pointer uppercase fw-bold fs-11 w-[100px] text-center inline-block hover:text-blue-600"
                                         :title="item.homeName">
                                         {{ item.homeName }}
                                    </b-link>
                                </td>
                                <td>
                                    <span class="relative">
                                         <i class="ri ri-rectangle-fill inline-block rotate-[100deg] text-yellow-500 fs-[20px]"></i>
                                         <span class="absolute fs-10 left-[4px] -top-[1px] text-white">{{ item.homeYellow }}</span>
                                    </span>
                                    <span class="relative">
                                         <i class="ri ri-rectangle-fill inline-block rotate-[100deg] text-red-500 fs-[20px]"></i>
                                         <span class="absolute fs-10 left-[4px] -top-[1px] text-white">{{ item.homeRed }}</span>
                                    </span>
                                    <span>
                                        <span class="badge text-body fs-14" >{{ item.homeScore }}</span>
                                        <span
                                            class="badge rounded-pill border-dark text-body hover:bg-gray-200 cursor-pointer relative top-[-2px]"
                                            v-if="[0].includes(item.status)"> 1 tip
                                        </span>
                                        <span v-else> - </span>
                                        <span class="badge text-body fs-14">{{ item.awayScore }}</span>
                                    </span>
                                    <span class="relative">
                                         <i class="ri ri-rectangle-fill inline-block rotate-[100deg] text-red-500 fs-[20px]"></i>
                                         <span class="absolute fs-10 left-[4px] -top-[1px] text-white">{{ item.awayRed }}</span>
                                    </span>
                                    <span class="relative">
                                         <i class="ri ri-rectangle-fill inline-block rotate-[100deg] text-yellow-500 fs-[20px]"></i>
                                         <span class="absolute fs-10 left-[4px] -top-[1px] text-white">{{ item.awayYellow }}</span>
                                    </span>
                                </td>
                                <td>
                                    <b-link :to="'/match-detail/'+item.matchId"  class="cursor-pointer uppercase fw-bold fs-11 w-[100px] text-center inline-block hover:text-blue-600"
                                         :title="item.awayName">{{ item.awayName }}</b-link>
                                </td>
                                <td>
                                    <div class="fs-11 hover:text-red-500" v-if="item.status === 1"> {{ item.homeCorner }}-{{ item.awayCorner }} </div>
                                </td>
                                <td>
                                    <div class="fs-11 hover:text-red-500" v-if="item.status === 1"> {{ item.homeHalfScore }}-{{ item.awayHalfScore }} </div>
                                </td>
                                <td>
                                    <div class="fs-11 hover:text-red-500"><i class="ri-flag-2-fill"></i>
                                    </div>
                                </td>
                                <td v-if="store.odds" class="relative">
                                    <div @mouseenter.prevent.stop="data.showOdd = []; data.showOdd[item.id] = true"
                                         @mouseleave.prevent.stop="data.showOdd[item.id] = false">
                                        <live-odds :odds="odds" :match="item" :bookmaker="store.bookmaker"/>
                                        <div @mouseleave.prevent.stop="data.showOdd[item.id] = false">
                                            <BDropdown :offset="{mainAxis: -100, crossAxis: -50 }" class="odd-match" v-model="data.showOdd[item.id]" lass="m-1" v-if="data.showOdd[item.id]">
                                                <match-info :odds="odds" :match="item" :bookmaker="store.bookmaker"/>
                                            </BDropdown>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </template>
                    </template>
                </table>
            </div>
        </div>
    </b-overlay>
</template>
<script setup>
import {computed, onMounted, reactive} from "vue";
import {BButton, BDropdown, BDropdownItem, BLink, BOverlay} from "bootstrap-vue-next";
import {useAppStore} from "@/stores";
import SimpleBar from 'simplebar'
import moment from 'moment';
import LiveOdds from "@/views/components/patials/LiveOdds.vue";
import MatchInfo from "@/views/components/modal/MatchInfo.vue";
import {onUnmounted} from "@vue/runtime-core";
const store = useAppStore();
const data = reactive({
    overlay: false,
    keyword: '',
    likes: [],
    showOdd: 0,
    interval: null
})

onMounted( async () => {
    store.getLiveScore();
    store.getOdds();
    store.getBookmaker();
    reload();
})

const pageMinItem = function(index){
    return index >= ((store.page_show - 1) * 50)
}

const odds = computed(()=>{
    let results = {};
    for (const item of store.odds) {
        results[item.type+'-'+item.companyId+'-'+item.matchId+'-'+item.OddsType] = item
    }

    return results
})

const pageMaxItem = function(index){
    if (Math.floor(liveScoreFilter.value.length) === (store.page_show * 50)){
        return index < liveScoreFilter.value.length
    }else{
        return index < (store.page_show * 50)
    }
}

const timeLineMatch = function (time, item) {
    let ms = moment.unix(time).valueOf() - moment.unix(item.matchTime).valueOf()
    let minutes = (ms / (1000 * 60)).toFixed(1);
    if (minutes <= 45) return parseInt(minutes) + " '";
    else if (minutes > 45 && minutes < 60) return "HT";
    else if (minutes > 60 && minutes < 105) return (parseInt(minutes) - 15) + " '";
    else if (minutes > 105 && minutes < 120) return '90 <span class="text-red-500 fs-10 mb-3"> + (' + (parseInt(minutes) - 105) + ')</span>';
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
const setLike = function (id){
    store.page_show = 1;
    if(store.likes.includes(id)){
        store.likes.splice(store.likes.indexOf(id), 1)
    }else{
        store.likes.push(id)
    }
}
const changeStatus = function (status){
    store.is_status = status
    store.page_show = 1;
    switch (status) {
        case 'live': store.statuses = [1,2,3,4,5]; break;
        case 'not_start': store.statuses = [0]; break;
        case 'first_half': store.statuses = [1]; break;
        case 'half_time': store.statuses = [2]; break;
        case 'second_half': store.statuses = [3]; break;
        case 'extra_time': store.statuses = [4]; break;
        case 'penalty': store.statuses = [5]; break;
        case 'order': store.statuses = [-1,-10,-11,-12,-14]; break;
        case 'reset': store.statuses = []; store.is_status = ''; break;
    }
}
const checkScroll = function (e){
    let obj = e.target;
    if(Math.ceil(obj.scrollTop) === obj.scrollHeight - obj.offsetHeight){
        let totalPage = Math.floor(liveScoreFilter.value.length / 50);
        if(store.page_show < totalPage){
            store.page_show = (store.page_show + 1);
            obj.scrollTop = 1
        }
    }else if(Math.ceil(obj.scrollTop) < 1 && store.page_show > 1){
        setTimeout(()=>{
            obj.scrollTop = (obj.scrollHeight - obj.offsetHeight) - 1
        }, 50)
        if(store.page_show > 1 ){
            store.page_show = (store.page_show - 1);
        }
    }
}

const reload = function () {
    data.interval = setInterval( () => {
        store.getLiveScoreChange();
        store.getOddChange();
    }, 60*1000);
}

onUnmounted(()=>{
    clearInterval(data.interval);
})

const liveScoreFilter = computed(() =>{
    let filters = store.live_scores.filter((item) => {
        if (store.is_status){
            return store.statuses.includes(item.status) && (
                   (item.homeName && item.homeName.toLowerCase().includes(store.keyword.toLowerCase()))
                || (item.awayName && item.awayName.toLowerCase().includes(store.keyword.toLowerCase())))
        }else{
            return ((item.homeName && item.homeName.toLowerCase().includes(store.keyword.toLowerCase()))
                || (item.awayName && item.awayName.toLowerCase().includes(store.keyword.toLowerCase())))
        }
    })

    let up   = filters.filter((item) => store.likes.includes(item.id))
    let down = filters.filter((item) => !store.likes.includes(item.id))

    return up.concat(down);
})

onMounted(() => {
    const simpleBar = new SimpleBar(document.getElementById('simple-bar'))
    simpleBar.getScrollElement().addEventListener('scroll', checkScroll);
})
</script>
<style>
.table>:not(caption)>*>* {
    border-bottom: none;
}
.bookmaker > button {
    padding: 0 2px;
    font-size: 12px;
}
.simplebar-scrollbar {
    left: 7px !important;
}
.multiselect-option {
    font-size: 12px!important;
    text-transform: uppercase!important;
}
.odd-match{
    position: absolute;
}
.odd-match .dropdown-menu{
    padding: 0;
}
.odd-match > .btn{
    visibility: hidden;
    position: absolute;
    height: 0;
}
</style>
