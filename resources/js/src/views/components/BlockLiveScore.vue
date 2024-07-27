<template>
    <b-overlay :show="data.overlay">
        <b-card title="Lịch đấu hôm nay" class="text-center">
            <div class="d-flex position-relative mb-2">
                <div class="flex-fill me-2">
                    <input type="text" class="form-control" v-model="data.keyword"
                           placeholder="Lọc theo tên đội bóng" autocomplete="off" id="search-options" value="">
                </div>
                <span class="flex-shrink-1 badge border border-primary text-primary p-2">Tìm thấy {{liveScoreFilter.length}} trận</span>
            </div>
            <div class="h-[calc(100vh-300px)] overflow-auto" id="simple-bar" @scroll="checkScroll">
                <table class="relative">
                    <tr class="text-center uppercase h-[30px] bg-success text-white fs-12">
                        <th> <div @click="data.likes = []"><i class="ri ri-delete-bin-2-line"/></div></th>
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
                        <template v-if="index > (data.pageShow * 100) && index < ((data.pageShow + 1) * 100)">
                        <tr class="text-left bg-success-light" v-if="!liveScoreFilter[index - 1] || (item.leagueId !== liveScoreFilter[index - 1].leagueId)">
                            <td colspan="10" class="h-[30px] px-2 fw-bold" v-if="store.league[item.leagueId]"> {{store.league[item.leagueId].name}}</td>
                        </tr>
                        <tr class="text-center h-[30px]">
                            <td>
                                <b-button size="sm" class="btn-outline-light text-muted cursor-pointer" @click="setLike(item.id)">
                                    <i class="ri ri-star-fill" :class="{'text-yellow-500': data.likes.includes(item.id)}"></i>
                                </b-button>
                            </td>
                            <td>
                                <div class="d-flex flex-column w-50px fs-11" v-if="item.matchTime">
                                    <span>{{moment.unix(item.matchTime).format('h:mm:ss')}}</span>
                                    <span v-html="statusParse(item.status)"></span>
                                </div>
                            </td>
                            <td>
                                <div ><i class="ri ri-movie-line"/></div>
                            </td>
                            <td>
                                <div class="cursor-pointer uppercase fs-12 w-[100px] text-center inline-block" :title="item.homeName">
                                    {{ item.homeName }}
                                </div>
                            </td>
                            <td>
                                <span>
                                    <span class="badge text-body fs-16 relative top-1" >{{ item.homeScore }}</span>
                                    <span class="badge rounded-pill border-dark text-body hover:bg-gray-400 cursor-pointer">1 tip</span>
                                    <span class="badge text-body fs-16 relative top-1">{{ item.awayScore }}</span>
                                </span>
                            </td>
                            <td>
                                <div class="cursor-pointer uppercase fs-12 w-[100px] text-center inline-block" :title="item.awayName">{{ item.awayName }}</div>
                            </td>
                            <td>
                                <div class="fs-11">	6-3 </div>
                            </td>
                            <td>
                                <div class="fs-11"> 2-0 </div>
                            </td>
                            <td>
                                <div class="fs-11"> <i class="ri-flag-2-fill"></i></div>
                            </td>
                            <td>
                                <table class="fs-11">
                                    <tr class="px-1">
                                        <td>0.85</td>
                                        <td>0.85</td>
                                        <td>0.85</td>
                                    </tr>
                                    <tr class="px-1">
                                        <td>0.85</td>
                                        <td>0.85</td>
                                        <td>0.85</td>
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
    sortBy: 'like',
    likes: [],
    bookmaker: 'Batman',
    pageShow: 0,
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
        case 2: return '<span class="text-red-500"><span class="spinner-grow spinner-grow-sm"></span> Half-time </span>';
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
const checkScroll = function (e){
    let obj = e.target;
    if(obj.scrollTop === (obj.scrollHeight - obj.offsetHeight)){
        data.pageShow ++;
        obj.scrollTop = 1
    }if(obj.scrollTop === 0){
        data.pageShow = data.pageShow > 0 ? data.pageShow-1 : 0;
        obj.scrollTop = (obj.scrollHeight - obj.offsetHeight) - 1
    }
}

const loadPage = async function () {
    setInterval(async () => {
        await store.getLiveScore();
        store.livescore.sort((a,b)=>{
            return a[data.sortBy] - b[data.sortBy]
        })
    }, 5*1000); //2 s lấy 1 lần
}

const liveScoreFilter = computed(()=>{
    let filters = store.livescore.filter((item) => {
        return item.homeName.toLowerCase().includes(data.keyword.toLowerCase())
            || item.awayName.toLowerCase().includes(data.keyword.toLowerCase())
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
    left: 7px;
}
</style>
