<template>
    <b-overlay :show="data.overlay">
        <ul class="list-group">
            <li class="list-group-item" v-for="item in store.schedule.data">
                <i class="mdi mdi-check-bold align-middle lh-1 me-2"></i> {{ item.matchId }}
            </li>
        </ul>
    </b-overlay>
</template>

<style scoped>

</style>
<script setup>
import {onMounted, reactive} from "vue";
import {BOverlay, BPagination} from "bootstrap-vue-next";
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
    await store.getSchedule({ page: page });
    data.overlay = false;
}
</script>
