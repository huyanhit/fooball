<template>
    <b-overlay :show="data.overlay">
        <b-card title="Lịch đấu hôm nay" class="text-center">
            <div class="position-relative mb-2">
                <input type="text" class="form-control" v-model="data.keyword"
                       placeholder="Lọc theo tên đội bóng" autocomplete="off" id="search-options" value="">
            </div>
            <div class="h-[calc(100vh-300px)] overflow-auto" data-simplebar>
                <table class="table table-nowrap relative">
                    <tr class="text-center uppercase h-[40px] bg-success text-white">
                        <th>
                            time
                        </th>
                        <th>home</th>
                        <th>
                            score
                        </th>
                        <th> away </th>
                        <th>
                            round
                        </th>
                    </tr>
                    <template v-for="(item, index) in liveScoreFilter" class="text-center h-[40px]" :key="index">
                    <tr class="text-left bg-success-light" v-if="!liveScoreFilter[index - 1] || (item.leagueId !== liveScoreFilter[index - 1].leagueId)">
                        <td colspan="5" class="h-[40px] px-2 fw-bold" v-if="store.league[item.leagueId]"> {{store.league[item.leagueId].name}}</td>
                    </tr>
                    <tr class="text-center h-[40px]">
                        <td>
                            <div class="small w-50px" v-if="item.matchTime">{{  moment.unix(item.matchTime).format('h:mm:ss') }}</div>
                        </td>
                        <td class="uppercase fs-12 max-w-[150px] text-truncate"> {{ item.homeName }} </td>
                        <td class="text-center">
                        <span class="">
                            <span class="mx-1 bg-yellow-500 px-0.5 fs-12 text-white inline-block">{{ item.homeYellow }}</span>
                            <span class="mx-1 bg-red-500 px-0.5 fs-12 text-white inline-block">{{ item.homeRed }}</span>
                            <span class="mx-2 fw-bold fs-14">{{ item.homeScore }}</span>
                                <span class="text-danger"> vs </span>
                            <span class="mx-2 fw-bold fs-14">{{ item.awayScore }}</span>
                            <span class="mx-1 bg-red-500 px-0.5 fs-12 text-white inline-block">{{ item.awayRed }}</span>
                            <span class="mx-1 bg-yellow-500 px-0.5 fs-12 text-white inline-block">{{ item.awayYellow }}</span>
                        </span>
                        </td>
                        <td class="uppercase fs-12 max-w-[150px] text-truncate"> {{ item.awayName }} </td>
                        <td>
                            <div class="small w-50px">{{ item.season}}</div>
                        </td>
                    </tr>
                    </template>
                </table>
            </div>
        </b-card>
    </b-overlay>
</template>

<style scoped>

</style>
<script setup>
import {computed, onMounted, reactive} from "vue";
import {BCard, BOverlay} from "bootstrap-vue-next";
import {useAppStore} from "@/stores";
import moment from 'moment';

const store = useAppStore();
const data = reactive({
    overlay: false,
    keyword: '',
    sortBy: 'leagueId',
})

onMounted(async () => {
    await store.getLiveScore();
    await loadPage();
})

const loadPage = async function () {
    setInterval(async () => {
        await store.getLiveScore();
    }, 30*60*1000); //30 phút lấy 1 lần
}
const liveScoreFilter = computed(()=>{
    return store.livescore.filter((item) => {
        return item.homeName.includes(data.keyword) || item.awayName.includes(data.keyword)
    })
    .sort((a,b)=>{
        return a[data.sortBy] - b[data.sortBy]
    });
})
</script>
