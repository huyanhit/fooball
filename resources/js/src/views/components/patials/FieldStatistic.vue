<template>
    <ul class="px-3 pb-3">
        <li class="d-flex justify-content-between mb-[2px] hover:text-red-500" v-for="item in statistics">
            <div class="inline-block p-[7px] w-[13%] text-right fs-20">{{item.home}}</div>
            <div class="h-6 bg-gray-200 dark:bg-gray-700 mt-1 text-right w-[30%]">
                <div class="h-6 bg-orange-600 dark:bg-orange-300 float-right" :style="'width: '+ ((100/(item.away+item.home))*item.home) +'%'"></div>
            </div>
            <div class="py-1.5 bg-yellow-50 w-[15%] h-[32px] text-center border border-1">{{item.name}}</div>
            <div class="h-6 bg-gray-200 dark:bg-gray-700 float-left mt-1 w-[30%]">
                <div class="h-6 bg-blue-600 dark:bg-blue-300 float-left" :style="'width: '+ ((100/(item.away+item.home))*item.away) +'%'"></div>
            </div>
            <div class="inline-block p-[7px] w-[13%] fs-20">{{item.away}}</div>
        </li>
    </ul>
</template>

<script setup>
import {computed} from "vue";

const props = defineProps(['match'])
const statistics = computed(()=>{
    return{
        shots:{name:'Bàn thắng', home:props.match.homeScore, away:props.match.awayScore},
        shots_ht:{name:'Bàn thắng hiêp 1', home:props.match.homeHalfScore, away:props.match.awayHalfScore},
        corner:{name: 'Phạt góc', home: props.match?.homeCorner, away:props.match?.awayCorner},
        yellow:{name:'Thẻ vàng', home:props.match?.homeYellow, away:props.match?.awayYellow},
        red:{name:'Thẻ đỏ', home:props.match?.homeRed, away:props.match?.awayRed},
        // corner_ht:[props.match.homeHalfCorner, props.match.awayHalfCorner],
        // shots_on_goal:[props.match.home,props.match.away],
        // dangerous_attack:[props.match.home,props.match.away],
        // dangerous:[props.match.home,props.match.away],
        // target:[props.match.home,props.match.away],
        // kicks:[props.match.home,props.match.away],
        // possession:[props.match.home,props.match.away],
        // possession_ht:[props.match.home,props.match.away],
        // saves:[props.match.home,props.match.away],
        // throw_ins:[props.match.home,props.match.away],
        // kick_off:[props.match.kickOff, !props.match.kickOff]
    }
})
const stylePlayer = function (name){
    name = name.replace('↑', '<i class="ri-arrow-up-line pl-1 pe-2 text-green-500"></i>');
    name = name.replace('↓', '<i class="ri-arrow-down-line pl-1 pe-2 text-red-500"></i>');

    return name
}
</script>

<style scoped>

</style>
