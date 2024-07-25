<template>
    <b-overlay :show="data.overlay">
        <b-card title="Lịch đấu hôm nay">
            <ul class="list-group">
                <li class="list-group-item d-flex justify-content-between" v-for="item in store.livescore.data">
                <span>
                    {{  moment.unix(item.matchTime).format('h:mm:ss') }}
                </span>
                    <span class="d-flex justify-content-between">
                    <span class="uppercase fs-12"> {{ item.homeName }} </span>
                    <span>
                        <span class="mx-1 bg-yellow-500 p-0.5 text-white">{{ item.homeYellow }}</span>
                        <span class="mx-1 bg-red-500 p-0.5 text-white">{{ item.homeRed }}</span>
                        <span class="mx-1 fw-bold fs-18">{{ item.homeScore }}</span>
                            <span class="text-danger"> vs </span>
                        <span class="mx-1 fw-bold fs-20">{{ item.awayScore }}</span>
                        <span class="mx-1 bg-red-500 p-0.5 text-white">{{ item.awayRed }}</span>
                        <span class="mx-1 bg-yellow-500 p-0.5 text-white">{{ item.awayYellow }}</span>
                    </span>
                    <span class="uppercase fs-12"> {{ item.awayName }} </span>
                </span>
                    <span>
                    <span> vòng: {{ item.season}}</span>
                </span>
                </li>
            </ul>
            <b-pagination
                :total-rows="store.schedule.total"
                :per-page="store.schedule.per_page"
                @pageClick="changePage"
            />
        </b-card>
    </b-overlay>

</template>

<style scoped>

</style>
<script setup>
import {onMounted, reactive} from "vue";
import {BCard, BOverlay, BPagination} from "bootstrap-vue-next";
import {useAppStore} from "@/stores";
import moment from 'moment';

const store = useAppStore();
const data = reactive({
    overlay: false
})

onMounted(() => {
    loadPage();
})
const changePage = function (e, page){
    loadPage(page);
}
const loadPage = async function (page = 1) {
    data.overlay = true;
    await store.getLiveScore({ page: page });
    data.overlay = false;
}
</script>
