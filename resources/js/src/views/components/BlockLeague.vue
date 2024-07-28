<template>
    <b-overlay :show="data.overlay">
        <b-card>
            <div class="d-flex flex-row position-relative">
                <span class="flex-fill fs-16 uppercase p-2">Giải đấu</span>
                <span class="flex-shrink-1">Trang {{data.pageShow + 1}}</span>
            </div>
            <div class="h-[calc(100vh-224px)] overflow-auto" id="league-bar">
                <ul class="list-group overflow-auto" >
                    <template v-for="item in store.league_profile">
                        <li class="list-group-item" v-if="item.id >= (data.pageShow * 50) && item.id < ((data.pageShow + 1) * 50)">
                            <i class="mdi mdi-check-bold align-middle lh-1 me-2"></i> {{ item.name }}
                        </li>
                    </template>
                </ul>
            </div>
        </b-card>
    </b-overlay>
</template>
<script setup>
import {onMounted, reactive} from "vue";
import {BCard, BOverlay} from "bootstrap-vue-next";
import {useAppStore} from "@/stores";
import SimpleBar from "simplebar";
const store = useAppStore();
const data = reactive({
    overlay: false,
    pageShow: 0,
})
onMounted(() => {
    loadPage();
    const simpleBar = new SimpleBar(document.getElementById('league-bar'), { autoHide: false })
    simpleBar.getScrollElement().addEventListener('scroll', checkScroll);
})

const checkScroll = function (e){
    let obj = e.target;
    if(obj.scrollTop === (obj.scrollHeight - obj.offsetHeight)){
        let length = Math.floor(Object.keys(store.league_profile).length / 100);
        console.log(length)
        if(data.pageShow < length ){
            data.pageShow = (data.pageShow + 1);
            obj.scrollTop = 1
        }
    }
    if(obj.scrollTop < 1 && data.pageShow > 0){
        setTimeout(()=>{
            obj.scrollTop = (obj.scrollHeight - obj.offsetHeight) - 1
        }, 100)
        if( data.pageShow > 0 ){
            data.pageShow = (data.pageShow - 1);
        }
    }
}
const loadPage = async function () {
    data.overlay = true;
    await store.getLeagueProfile({save: 12*3600});
    data.overlay = false;
}
</script>
