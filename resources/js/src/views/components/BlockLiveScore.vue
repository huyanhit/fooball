<template>
    <b-overlay :show="data.overlay">
        <div class="text-center mb-0 p-2 overflow-hidden">
            <div class="flex-fill fs-16 uppercase p-2">Lịch đấu hôm nay</div>
            <div class="d-flex flex-row position-relative mb-2">
                <div class="flex-fill me-2">
                    <input type="text" class="form-control" v-model="data.keyword"
                           placeholder="Lọc theo tên đội bóng"
                           autocomplete="off" id="search-options" value="">
                </div>
                <span class="m-0 flex-shrink-1 fs-12 border rounded border-gray-600 text-primary p-2 me-1">Tìm thấy {{liveScoreFilter.length}} trận</span>
                <span class="m-0 flex-shrink-1 fs-12 border rounded border-gray-600 text-primary p-2 me-1">Trang {{data.pageShow + 1}}</span>
            </div>
            <div class="d-flex flex-row position-relative mb-2">
                <span class="m-0 flex-shrink-1 fs-12 border rounded bg-gray-500 text-white px-1 cursor-pointer me-2"
                      @click="changeStatus('reset')">Reset</span>
                <span class="m-0 flex-shrink-1 fs-12 border rounded border-gray-600 text-primary px-1 cursor-pointer me-2"
                      :class="{'bg-red-400 text-white': data.is_status === 'live'}"
                      @click="changeStatus('live')">live</span>
                <span class="m-0 flex-shrink-1 fs-12 border rounded border-gray-600 text-primary px-1 cursor-pointer me-2"
                      :class="{'bg-red-400 text-white': data.is_status === 'not_start'}"
                      @click="changeStatus('not_start')">not start</span>
                <span class="m-0 flex-shrink-1 fs-12 border rounded border-gray-600 text-primary px-1 cursor-pointer me-2"
                      :class="{'bg-red-400 text-white': data.is_status === 'first_half'}"
                      @click="changeStatus('first_half')">first half</span>
                <span class="m-0 flex-shrink-1 fs-12 border rounded border-gray-600 text-primary px-1 cursor-pointer me-2"
                      :class="{'bg-red-400 text-white': data.is_status === 'half_time'}"
                      @click="changeStatus('half_time')">half time</span>
                <span class="m-0 flex-shrink-1 fs-12 border rounded border-gray-600 text-primary px-1 cursor-pointer me-2"
                      :class="{'bg-red-400 text-white': data.is_status === 'second_half'}"
                      @click="changeStatus('second_half')">second half</span>
                <span class="m-0 flex-shrink-1 fs-12 border rounded border-gray-600 text-primary px-1 cursor-pointer me-2"
                      :class="{'bg-red-400 text-white': data.is_status === 'extra_time'}"
                      @click="changeStatus('extra_time')">extra time</span>
                <span class="m-0 flex-shrink-1 fs-12 border rounded border-gray-600 text-primary px-1 cursor-pointer me-2"
                      :class="{'bg-red-400 text-white': data.is_status === 'penalty'}"
                      @click="changeStatus('penalty')">penalty</span>
                <span class="m-0 flex-shrink-1 fs-12 border rounded border-gray-600 text-primary px-1 cursor-pointer me-2"
                      :class="{'bg-red-400 text-white': data.is_status === 'order'}"
                      @click="changeStatus('order')">order</span>
            </div>
            <div class="h-[calc(100vh-330px)] overflow-auto" id="simple-bar">
                <table class="relative border border-groove">
                    <tr class="text-center uppercase h-[30px] bg-success text-white fs-12">
                        <th>
                            <b-button size="sm" class="btn-outline-warning hover:text-red-500 cursor-pointer"
                                      @click="data.likes = []">
                                <i class="ri ri-delete-bin-2-line"/>
                            </b-button>
                        </th>
                        <th> time </th>
                        <td> </td>
                        <th> home </th>
                        <th> score </th>
                        <th> away </th>
                        <th> <i class="ri-flag-2-fill"></i> </th>
                        <th> FT </th>
                        <th> Data </th>
                        <td>
                            <BDropdown variant="light" size="sm" :text="data.bookmaker.companyName?? 'choose'"
                                       dropstart split class="bookmaker w-[80px]" >
                                <BDropdownItem v-for="item in store.bookmaker" @click="data.bookmaker = item" >
                                    <span> {{ item.companyName }}</span>
                                </BDropdownItem>
                            </BDropdown>
                        </td>
                    </tr>
                    <template v-for="(item, index) in liveScoreFilter" class="text-center h-[40px]"
                        :key="index">
                        <template v-if="index >= (data.pageShow * 50) && index < ((data.pageShow + 1) * 50)">
                        <tr class="text-left bg-success-light" v-if="!liveScoreFilter[index - 1] || (item.leagueId !== liveScoreFilter[index - 1].leagueId)">
                            <td colspan="10" class="h-[30px] px-2 fw-bold" v-if="store.league_profile[item.leagueId]">
                                <span>{{store.league_profile[item.leagueId].name}}</span>
                            </td>
                        </tr>
                        <tr class="text-center h-[30px]">
                            <td>
                                <b-button size="sm" class="btn-outline-light text-muted cursor-pointer" @click="setLike(item.id)">
                                    <i class="ri ri-star-fill hover:text-yellow-500" :class="{'text-yellow-500': data.likes.includes(item.id)}"></i>
                                </b-button>
                            </td>
                            <td>
                                <div class="d-flex flex-column w-50px fs-11">
                                    <span v-if="[1].includes(item.status)">
                                        {{liveFirstTime(item)}}
                                    </span>
                                    <span v-else-if="[3].includes(item.status)">
                                        {{liveHaftTime(item)}}
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
                                        v-if="[0].includes(item.status)">
                                        1 tip
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
                                <div class="fs-11 hover:text-red-500" else> - </div>
                            </td>
                            <td>
                                <div class="fs-11 hover:text-red-500" v-if="item.status === 1"> {{ item.homeHalfScore }}-{{ item.awayHalfScore }} </div>
                                <div class="fs-11 hover:text-red-500" else> - </div>
                            </td>
                            <td>
                                <div class="fs-11 hover:text-red-500"><i class="ri-flag-2-fill"></i>
                                </div>
                            </td>
                            <td v-if="store.odd" class="relative">
                                <div @mouseenter.prevent.stop="data.showOdd = []; data.showOdd[item.id] = true">
                                    <live-odds :match="item" :bookmaker="data.bookmaker"/>
                                </div>
                                <template v-if="data.showOdd[item.id]">
                                    <div @mouseleave.prevent.stop="data.showOdd[item.id] = false"
                                         class="absolute right-[70px] -top-[30px] bg-gray-100 w-[400px] z-1 p-2 border border-groove">
                                         <match-info :match="item" :bookmaker="data.bookmaker"/>
                                    </div>
                                </template>
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
import {BButton, BCard, BDropdown, BDropdownItem, BLink, BOverlay} from "bootstrap-vue-next";
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
    sortBy: 'status',
    likes: [],
    bookmaker: {
        companyIdMain: 31,
        companyName: 'Sbobet'
    },
    pageShow: 0,
    is_status: '',
    statuses: [1,2,3,4,5],
    showOdd: [],
    interval: null
})

onMounted( async () => {
    await store.getOdds({save: 1800});
    await store.getLiveScore({save: 1800});
    await store.getBookmaker();
    reload();
})

const liveFirstTime = function (item) {
    let ms = 0
    if(item.halfStartTime){
        ms = moment.unix(item.updateTime).valueOf() - moment.unix(item.halfStartTime).valueOf()
    } else {
        ms = moment.unix(item.updateTime).valueOf() - moment.unix(item.matchTime).valueOf()
    }
    let seconds = (ms / 1000).toFixed(1);
    let minutes = (ms / (1000 * 60)).toFixed(1);
    if (seconds < 60) return seconds + " s";
    else if (minutes <= 45) return parseInt(minutes) + " '";
    else if (minutes > 45) return '90 +(' + (parseInt(minutes) - 45) + ')';
}

const liveHaftTime = function (item) {
    let ms = 0;
    if(item.halfStartTime){
        ms = moment.unix(item.updateTime).valueOf() - moment.unix(item.halfStartTime).valueOf()
    } else {
        ms = moment.unix(item.updateTime).valueOf() - moment.unix(item.matchTime).valueOf() - (1000 * 60)
    }

    let seconds = (ms / 1000).toFixed(1);
    let minutes = (ms / (1000 * 60)).toFixed(1);
    if (seconds < 60) return seconds + " s";
    else if (minutes <= 45) return parseInt(minutes) + " '";
    else if (minutes > 45) return '90 +(' + (parseInt(minutes) - 45) + ')';
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
    data.pageShow = 0;
    if(data.likes.includes(id)){
        data.likes.splice(data.likes.indexOf(id), 1)
    }else{
        data.likes.push(id)
    }
}
const changeStatus = function (status){
    data.is_status = status
    data.pageShow = 0;
    switch (status) {
        case 'live': data.statuses = [1,2,3,4,5]; break;
        case 'not_start': data.statuses = [0]; break;
        case 'first_half': data.statuses = [1]; break;
        case 'half_time': data.statuses = [2]; break;
        case 'second_half': data.statuses = [3]; break;
        case 'extra_time': data.statuses = [4]; break;
        case 'penalty': data.statuses = [5]; break;
        case 'order': data.statuses = [-1,-10,-11,-12,-14]; break;
        case 'reset': data.statuses = []; data.is_status = ''; break;
    }
}
const checkScroll = function (e){
    let obj = e.target;
    if(Math.ceil(obj.scrollTop) === obj.scrollHeight - obj.offsetHeight){
        let length = Math.floor(liveScoreFilter.value.length / 50);
        if(data.pageShow < length ){
            data.pageShow = (data.pageShow + 1);
            obj.scrollTop = 1
        }
    }
    if(Math.ceil(obj.scrollTop) < 1 && data.pageShow > 0){
        setTimeout(()=>{
            obj.scrollTop = (obj.scrollHeight - obj.offsetHeight) - 1
        }, 50)
        if( data.pageShow > 0 ){
            data.pageShow = (data.pageShow - 1);
        }
    }
}

const reload = function () {
    data.interval = setInterval( () => {
        store.getLiveScore();
        store.getOdds();
    }, 10*1000);

}

onUnmounted(()=>{
    clearInterval(data.interval);
})

const liveScoreFilter = computed(() =>{
    store.livescore.sort((a, b) => {
        return a[data.sortBy] - b[data.sortBy]
    })

    let filters = store.livescore.filter((item) => {
        if (data.is_status){
            return data.statuses.includes(item.status) && (item.homeName.toLowerCase().includes(data.keyword.toLowerCase())
                || item.awayName.toLowerCase().includes(data.keyword.toLowerCase()))
        }else{
            return (item.homeName.toLowerCase().includes(data.keyword.toLowerCase())
                || item.awayName.toLowerCase().includes(data.keyword.toLowerCase()))
        }
    })
    let up   = filters.filter((item) => data.likes.includes(item.id))
    let down = filters.filter((item) => !data.likes.includes(item.id))

    return up.concat(down);
})

onMounted(()=>{
    const simpleBar = new SimpleBar(document.getElementById('simple-bar'), { autoHide: false })
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
</style>
