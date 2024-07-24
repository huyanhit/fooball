<template>
   <div class="page-content">
            <b-overlay :show="data.overlay">
                <table class="table table-striped text-center border border-1">
                    <thead>
                        <tr>
                            <th scope="col">League Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Short Name</th>
                            <th scope="col">Type</th>
                            <th scope="col">Sub League Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in data.league.data">
                            <th scope="row">{{ item.leagueId }}</th>
                            <td>{{ item.name }}</td>
                            <td>{{ item.shortName }}</td>
                            <td><span class="badge bg-success">{{ item.type }}</span></td>
                            <td>{{ item.subLeagueName }}</td>
                        </tr>
                    </tbody>
                </table>
            </b-overlay>
            <b-pagination
                :total-rows="data.league.total"
                :per-page="data.league.per_page"
                @pageClick="changePage"
            />
        </div>
</template>
<script setup>

import {onMounted, reactive} from "vue";
import apiService from "@/composables/use-api";
import {BOverlay, BPagination} from "bootstrap-vue-next";
const data = reactive({
    league : [],
    overlay: false
})
onMounted(() => {
   loadPage();
})
const changePage = function (e, page){
    loadPage(page);
}
const loadPage = async function (page) {
    data.overlay = true;
    data.league  = await apiService.callApi({method: 'get', url: 'league', param: {page: page??1}});
    data.overlay = false;
}
</script>
