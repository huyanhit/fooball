<template>
    <div class="d-flex mt-1">
        <div id="scroll-league" class="flex-grow-0 w-[300px] me-1 h-[calc(100vh-330px)] overflow-auto" v-if="data.league">
            <template v-for="(item, index) in data.league_country" :key="index">
                <BAccordion bodyClass="p-0">
                    <BAccordionItem :title="item.country" class="fs-12"
                                    :visible="data.league.countryId === item.countryId">
                        <ul class="list-group p-0">
                            <template v-for="i in item.items">
                                <li class="hover:bg-success-light p-2 border border-groove mt-1 d-flex"
                                    :id="lodash.kebabCase(i.name)"
                                    :class="{'bg-success-light': data.league.id === i.id}" @click="changeLeague(i)">
                                     <span class="flex-fill">
                                         {{i.name}}
                                     </span>
                                     <i class="ri ri-arrow-right-line"></i>
                                </li>
                            </template>
                        </ul>
                    </BAccordionItem>
                </BAccordion>
            </template>
        </div>
        <div class="flex-fill bg-white p-3" v-if="data.league">
            {{data.league.name}}
            {{data.league.countryId}}
        </div>
    </div>
</template>
<script setup>
import {onMounted, reactive} from "vue";
import {useRoute, useRouter} from "vue-router";
import {useAppStore} from "@/stores";
import lodash from "lodash";
import {BAccordion, BAccordionItem} from "bootstrap-vue-next";
import SimpleBar from "simplebar";

const store = useAppStore();
const route = useRoute()
const router = useRouter()
const data = reactive({
    league: {},
    league_country: {},
})

onMounted(async () => {
    await store.getLeagueProfile({save: 12 * 3600});
    data.league = Object.values(store.league_profile).find(item => {
        return lodash.kebabCase(item.name) === route.params.league_name
    })

    let subItem = [];
    let league = Object.values(store.league_profile).sort((a, b) => {
        return a.countryId - b.countryId
    })

    let countryId = 0
    for (const index in league) {
        if(league[countryId].countryId === league[index].countryId){
            subItem.push(league[index]);
        }else {
            data.league_country[countryId] = {
                id: league[countryId].id,
                countryId: league[countryId].countryId,
                country: league[countryId].country,
                items: subItem
            }
            subItem = [];
            subItem.push(league[index]);
        }

        countryId = index;
    }

    setTimeout(()=>{
        if(data.league){
            const scroll = document.getElementById('scroll-league');
            const scrollDiv = document.getElementById(lodash.kebabCase(data.league.name));
            if(scrollDiv){
                scroll.scrollTop = scrollDiv.offsetTop - 150;
            }
        }
    }, 100)


})

const changeLeague = function (item){
    data.league = item;
    router.push('/league-detail/'+lodash.kebabCase(item.name))
}
</script>
<style>
.collapse{
    visibility: unset;
}
</style>
