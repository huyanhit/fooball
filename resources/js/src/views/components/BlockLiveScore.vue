<template>
    <b-overlay :show="data.overlay">
        <b-card title="Lịch đấu hôm nay" class="text-center">
            <div class="d-flex flex-row position-relative mb-2">
                <div class="flex-fill me-2">
                    <input type="text" class="form-control" v-model="data.keyword"
                           placeholder="Lọc theo tên đội bóng"
                           autocomplete="off" id="search-options" value="">
                </div>

                <span class="m-0 flex-shrink-1 fs-12 border rounded border-gray-600 text-primary p-2 me-1">Tìm thấy {{liveScoreFilter.length}} trận</span>
                <span class="m-0 flex-shrink-1 fs-12 border rounded border-gray-600 text-primary p-2 me-1">Trang {{data.pageShow}}</span>
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
            <div class="h-[calc(100vh-300px)] overflow-auto" id="simple-bar">
                <table class="relative">
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
                            <div class="fs-11 lowercase text-black bookmaker">
                                <multiselect
                                    v-model="data.bookmaker"
                                    :can-clear="false"
                                    :caret="false"
                                    :options="data.bookmakers" />
                            </div>
                        </td>
                    </tr>
                    <template v-for="(item, index) in liveScoreFilter" class="text-center h-[40px]"
                        :key="index">
                        <template v-if="index >= (data.pageShow * 100) && index < ((data.pageShow + 1) * 100)">
                        <tr class="text-left bg-success-light" v-if="!liveScoreFilter[index - 1] || (item.leagueId !== liveScoreFilter[index - 1].leagueId)">
                            <td colspan="10" class="h-[30px] px-2 fw-bold" v-if="store.league[item.leagueId]"> {{store.league[item.leagueId].name}}</td>
                        </tr>
                        <tr class="text-center h-[30px]">
                            <td>
                                <b-button size="sm" class="btn-outline-light text-muted cursor-pointer" @click="setLike(item.id)">
                                    <i class="ri ri-star-fill hover:text-yellow-500" :class="{'text-yellow-500': data.likes.includes(item.id)}"></i>
                                </b-button>
                            </td>
                            <td>
                                <div class="d-flex flex-column w-50px fs-11" v-if="item.matchTime">
                                    <span>{{moment.unix(item.matchTime).format('h:mm:ss')}}</span>
                                    <span v-html="statusParse(item.status)"></span>
                                </div>
                            </td>
                            <td>
                                <div ><i class="ri ri-movie-line hover:text-red-500"/></div>
                            </td>
                            <td>
                                <div class="cursor-pointer uppercase fs-12 w-[100px] text-center inline-block hover:text-blue-600"
                                     :title="item.homeName">
                                    {{ item.homeName }}
                                </div>
                            </td>
                            <td>
                                <span>
                                    <span class="badge text-body fs-16" >{{ item.homeScore }}</span>
                                    <span class="badge rounded-pill border-dark text-body hover:bg-gray-200 cursor-pointer relative top-[-2px]">1 tip</span>
                                    <span class="badge text-body fs-16">{{ item.awayScore }}</span>
                                </span>
                            </td>
                            <td>
                                <div class="cursor-pointer uppercase fs-12 w-[100px] text-center inline-block hover:text-blue-600"
                                     :title="item.awayName">{{ item.awayName }}</div>
                            </td>
                            <td>
                                <div class="fs-11 hover:text-red-500">	6-3 </div>
                            </td>
                            <td>
                                <div class="fs-11 hover:text-red-500"> 2-0 </div>
                            </td>
                            <td>
                                <div class="fs-11 hover:text-red-500"> <i class="ri-flag-2-fill"></i></div>
                            </td>
                            <td>
                                <table class="fs-11">
                                    <tr class="px-1">
                                        <td><div class="fs-11 hover:text-blue-600"> 2-0 </div></td>
                                        <td><div class="fs-11 hover:text-blue-600"> 2-0 </div></td>
                                        <td><div class="fs-11 hover:text-blue-600"> 2-0 </div></td>
                                    </tr>
                                    <tr class="px-1">
                                        <td><div class="fs-11 hover:text-blue-600"> 2-0 </div></td>
                                        <td><div class="fs-11 hover:text-blue-600"> 2-0 </div></td>
                                        <td><div class="fs-11 hover:text-blue-600"> 2-0 </div></td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        </template>
                    </template>
                </table>
            </div>
        </b-card>
    </b-overlay>
</template>
<script setup>
import {computed, onMounted, reactive} from "vue";
import {BButton, BCard, BOverlay} from "bootstrap-vue-next";
import {useAppStore} from "@/stores";
import Multiselect from '@vueform/multiselect'
import SimpleBar from 'simplebar'
import moment from 'moment';
const store = useAppStore();
const data = reactive({
    overlay: false,
    keyword: '',
    sortBy: 'status',
    likes: [],
    bookmaker: 'Batman',
    pageShow: 0,
    is_status: '',
    statuses: [1,2,3,4,5],
    bookmakers: [
        'Batman',
        'Robin',
        'Joker',
    ]
})

onMounted(async () => {
    await store.getLiveScore({save: 12 * 3600});
    await loadPage();
})

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
    if(data.likes.includes(setLike)){
        data.likes.splice(id, 1)
    }else{
        data.likes.push(id)
    }
}
const changeStatus = function (status){
    data.is_status = status
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
    if(obj.scrollTop === (obj.scrollHeight - obj.offsetHeight)){
        let length    = Math.floor(liveScoreFilter.value.length / 1000);
        if(data.pageShow < length ){
            data.pageShow = (data.pageShow + 1);
            obj.scrollTop = 1
        }
    }
    if(obj.scrollTop < 1 && data.pageShow > 0){
        setTimeout(()=>{
            obj.scrollTop = (obj.scrollHeight - obj.offsetHeight) - 1
        }, 100)
        if( data.pageShow > 0 ){
            data.pageShow = (data.pageShow - 1);
        }
    }
}

const loadPage = async function () {
    setInterval(async () => {
        await store.getLiveScore();
        store.livescore.sort((a,b)=>{
            return a[data.sortBy] - b[data.sortBy]
        })
    }, 30*1000); //2 s lấy 1 lần
}

const liveScoreFilter = computed(()=>{
    let filters = store.livescore.filter((item) => {
        if(data.is_status){
            return data.statuses.includes(item.status)
        }else{
            return item.homeName.toLowerCase().includes(data.keyword.toLowerCase())
                || item.awayName.toLowerCase().includes(data.keyword.toLowerCase())
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
.bookmaker .multiselect-single-label {
    padding-right: 0;
    font-size: 12px;
    text-transform: uppercase;
}
.simplebar-scrollbar {
    left: 7px !important;
}
.multiselect-dropdown.is-hidden {
    overflow: unset;
}
.multiselect-option {
    font-size: 12px;
    text-transform: uppercase;
}
</style>
