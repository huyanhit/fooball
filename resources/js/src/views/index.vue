<template>
    <div class="main-content">

        <div class="page-content">
            <h3> League </h3>
            <table class="table table-striped">
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
        </div>
    </div>
</template>
<script setup>

import {onMounted, reactive} from "vue";
import apiService from "@/composables/use-api";
const data = reactive({
    league : []
})
onMounted(async () => {
    data.league = await apiService.callApi({method:'get', url:'league'} );
})
</script>
