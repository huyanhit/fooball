<template>
    <b-overlay :show="data.overlay">
        <b-card title="Giải đấu">
            <ul class="list-group">
                <li class="list-group-item" v-for="item in store.league.data">
                    <i class="mdi mdi-check-bold align-middle lh-1 me-2"></i> {{ item.name }}
                </li>
            </ul>
            <b-pagination
                :total-rows="store.league.total"
                :per-page="store.league.per_page"
                @pageClick="changePage"
            />
        </b-card>
    </b-overlay>
</template>
<script setup>
import {onMounted, reactive} from "vue";
import {BCard, BOverlay, BPagination} from "bootstrap-vue-next";
import {useAppStore} from "@/stores";
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
    await store.getLeague({ page: page });
    data.overlay = false;
}
</script>
