<template>
    <b-overlay :show="data.overlay">
        <b-card title="Lịch đấu hôm nay">
            <table class="table table-nowrap">
                <tr v-for="item in store.livescore.data" class="text-center">
                    <td>
                        {{  moment.unix(item.matchTime).format('h:mm:ss') }}
                    </td>
                    <td class="uppercase fs-13"> {{ item.homeName }} </td>
                    <td class="d-flex justify-content-between">
                        <span>
                            <span class="mx-1 bg-yellow-500 px-0.5 fs-12 text-white">{{ item.homeYellow }}</span>
                            <span class="mx-1 bg-red-500 px-0.5 fs-12 text-white">{{ item.homeRed }}</span>
                            <span class="m-2 fw-bold">{{ item.homeScore }}</span>
                                <span class="text-danger"> vs </span>
                            <span class="m-2 fw-bold">{{ item.awayScore }}</span>
                            <span class="mx-1 bg-red-500 px-0.5 fs-12 text-white">{{ item.awayRed }}</span>
                            <span class="mx-1 bg-yellow-500 px-0.5 fs-12 text-white">{{ item.awayYellow }}</span>
                        </span>
                    </td>
                    <td class="uppercase fs-13"> {{ item.awayName }} </td>
                    <td>
                        <span> vòng: {{ item.season}}</span>
                    </td>
                </tr>
            </table>
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
