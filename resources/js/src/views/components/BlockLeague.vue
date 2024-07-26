<template>
    <b-overlay :show="data.overlay">
        <b-card title="Giải đấu">
            <div class="h-[calc(100vh-250px)]" data-simplebar>
                <ul class="list-group overflow-auto" >
                    <li class="list-group-item" v-for="item in store.league">
                        <i class="mdi mdi-check-bold align-middle lh-1 me-2"></i> {{ item.name }}
                    </li>
                </ul>
            </div>
        </b-card>
    </b-overlay>
</template>
<script setup>
import {onMounted, reactive} from "vue";
import {BCard, BOverlay} from "bootstrap-vue-next";
import {useAppStore} from "@/stores";
const store = useAppStore();
const data = reactive({
    overlay: false
})
onMounted(() => {
    loadPage();
})
const loadPage = async function () {
    data.overlay = true;
    await store.getLeague();
    data.overlay = false;
}
</script>
