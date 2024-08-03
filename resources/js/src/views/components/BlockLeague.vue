<template>
    <b-overlay :show="data.overlay">
        <div class="mb-0 bg-white p-3">
            <div class="flex-fill fs-16 uppercase p-2">Lịch đấu hôm nay</div>
            <div class="d-flex flex-row position-relative mb-2">
                <div class="flex-fill me-2">
                    <input type="text" class="form-control" v-model="data.keyword"
                           placeholder="Lọc theo tên đội bóng"
                           autocomplete="off" id="search-options" value="">
                </div>
                <span class="m-0 flex-shrink-1 fs-12 border rounded border-gray-600 text-primary p-2 me-1">Trang {{data.page_show}}</span>
            </div>
            <div class="d-flex flex-row position-relative mb-2">
                <span class="m-0 flex-shrink-1 fs-12 border rounded bg-gray-500 text-white px-1 cursor-pointer me-2"
                      @click="changeStatus('reset')">Reset</span>
                <span class="m-0 flex-shrink-1 fs-12 border rounded border-gray-600 text-primary px-1 cursor-pointer me-2"
                      :class="{'bg-red-400 text-white': data.is_status === 'hot'}"
                      @click="changeStatus('hot')"> Hot </span>
            </div>
            <div class="h-[calc(100vh-330px)]" id="league-bar">
                <ul class="list-group" >
                    <template v-for="(item, index) in leagueFilter" :key="index">
                        <li v-if="pageMinItem(index) && pageMaxItem(index)">
                            <b-link class="d-flex align-items-center list-group-item hover:bg-success-light cursor-pointer"
                                    :to="'league-detail/'+lodash.kebabCase(item.name)" >
                                <div class="avatar-sm me-2 border border-groove inline-block" :style="'background-color:'+ item.color">
                                    <ImageFile :item="item" category="league-profile" properties="logo" classProps="w-[45px]"/>
                                </div>
                                <div class="flex-fill">
                                    <div>{{ item.name }}</div>
                                    <div class="text-muted fs-11"> Vòng {{ item.currentRound }}</div>
                                </div>
                            </b-link>
                        </li>
                    </template>
                </ul>
            </div>
        </div>
    </b-overlay>
</template>
<script setup>
import {computed, onMounted, reactive} from "vue";
import {BLink, BOverlay} from "bootstrap-vue-next";
import {useAppStore} from "@/stores";
import lodash from "lodash";
import SimpleBar from "simplebar";
import ImageFile from "@/views/components/patials/ImageFile.vue";

const store  = useAppStore();
const data   = reactive({
    overlay: false,
    page_show: 1,
    keyword: '',
    is_status: '',
    statuses: [],
})

onMounted(() => {
    loadPage();
    const simpleBar = new SimpleBar(document.getElementById('league-bar'), { autoHide: false })
    simpleBar.getScrollElement().addEventListener('scroll', checkScroll);
})

const pageMinItem = function(index){
    return index >= ((data.page_show - 1) * 50)
}

const pageMaxItem = function(index){
    if (Math.floor(leagueFilter.value.length) === (data.page_show * 50)){
        return index < leagueFilter.value.length
    }else{
        return index < (data.page_show * 50)
    }
}


const changeStatus = function (status){
    data.is_status = status
    data.page_show = 1;
    switch (status) {
        case 'hot': data.statuses = ["111"]; break;
        case 'reset': data.statuses = []; data.is_status = ''; break;
    }
}
const checkScroll = function (e){
    let obj = e.target;
    if(Math.ceil(obj.scrollTop) === obj.scrollHeight - obj.offsetHeight){
        let totalPage = Math.floor(leagueFilter.value.length / 50);
        if(data.page_show < totalPage){
            data.page_show = (data.page_show + 1);
            obj.scrollTop = 1
        }
    }else if(Math.ceil(obj.scrollTop) < 1 && data.page_show > 1){
        setTimeout(()=>{
            obj.scrollTop = (obj.scrollHeight - obj.offsetHeight) - 1
        }, 50)
        if(data.page_show > 1 ){
            data.page_show = (data.page_show - 1);
        }
    }
}
const loadPage = async function () {
    data.overlay = true;
    await store.getLeagueProfile();
    data.overlay = false;
}

const leagueFilter = computed(()=> {
    return Object.values(store.league_profiles).filter((item) => {
        if (data.is_status) {
            return data.statuses.includes(item.leagueId)
        } else {
            return item.name.toLowerCase().includes(data.keyword.toLowerCase())
        }
    })
})
</script>
