<template>
    <table class="fs-11">
        <template  v-if="data.handicap[5]" v-for="item in data.handicap[5]">
            <tr class="px-1">
                <td><div class="fs-11 hover:text-blue-600"> {{item.instantHome?? '-'}}</div></td>
                <td><div class="fs-11 hover:text-blue-600"> {{item.instantHandicap?? '-'}} </div></td>
                <td><div class="fs-11 hover:text-blue-600"> {{item.instantAway?? '-'}} </div></td>
            </tr>
        </template>
        <template v-if="data.europeOdds[5]" v-for="item in data.europeOdds[5]">
            <tr class="px-1">
                <td><div class="fs-11 hover:text-blue-600"> {{item.instantHome?? '-'}} </div></td>
                <td><div class="fs-11 hover:text-blue-600"> {{item.instantDraw?? '-'}} </div></td>
                <td><div class="fs-11 hover:text-blue-600"> {{item.instantAway?? '-'}} </div></td>
            </tr>
        </template>
    </table>
</template>
<script setup>
import {computed, reactive} from "vue";
    import {useAppStore} from "@/stores";
    const store = useAppStore();
    const props = defineProps(['match', "bookmaker"]);
    const data = reactive({
        handicap: {},
        europeOdds: {}
    })
    data.handicap = computed(()=>{
        let results = [];
        for (const index in store.odd['handicap']) {
            if (store.odd['handicap'][index] && store.odd['handicap'][index][props.match.matchId]){
                results[index] = Object.values(store.odd['handicap'][index][props.match.matchId])
                    .filter(item => item.companyId === props.bookmaker.companyIdMain)
            }
        }
        return results
    })
    data.europeOdds = computed(()=>{
        let results = [];
        for (const index in store.odd['europeOdds']) {
            if (store.odd['europeOdds'][index] && store.odd['europeOdds'][index][props.match.matchId]){
                results[index] = Object.values(store.odd['europeOdds'][index][props.match.matchId])
                    .filter(item => item.companyId === props.bookmaker.companyIdMain)
            }
        }
        return results
    })
</script>
<style scoped>

</style>
