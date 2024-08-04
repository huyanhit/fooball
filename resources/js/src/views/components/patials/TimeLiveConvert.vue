<template>
    <span v-if="[1, 2, 3].includes(match.status)" v-html="liveTimeConvert"></span>
</template>
<script setup>
import moment from "moment/moment";
import {useAppStore} from "@/stores";
import {computed} from "vue";
const store    = useAppStore();
const props    = defineProps(['match']);

const liveTimeConvert = computed( () =>{
    let ms = moment.unix(store.systems.time).valueOf()
        - moment.unix(props.match.matchTime).valueOf()
    if(props.match.status === 1){
        if(props.match.halfStartTime){
            ms = moment.unix(store.systems.time).valueOf() - moment.unix(props.match.halfStartTime).valueOf()
        }
        let seconds = (ms / 1000).toFixed(1);
        let minutes = (ms / (1000 * 60)).toFixed(1);
        if (seconds < 60 && seconds > 0) return seconds + " s";
        else if (minutes < 45 && minutes > 1) return parseInt(minutes) + " '";
        else if (minutes > 45) return '45+'+ (parseInt(minutes) - 45);
        else return '---';
    }
    if(props.match.status === 2){
        let minutes = (ms / (1000 * 60)).toFixed(1);
        return parseInt(minutes) + " '";
    }
    if(props.match.status === 3){
        if(props.match.halfStartTime){
            ms = moment.unix(store.systems.time).valueOf() - moment.unix(props.match.halfStartTime).valueOf()
        } else {
            ms = ms + (1000 * 60)
        }
        let minutes = (ms / (1000 * 60)).toFixed(1);
        if (minutes <= 45  && minutes > 1) return (45 + parseInt(minutes)) + " '";
        else if (minutes > 45 && minutes < 60) return '90+' +(parseInt(minutes) - 45);
        else return '---';
    }
    if(props.match.status === 4){
        let minutes = (ms / (1000 * 60)).toFixed(1);
        return parseInt(minutes) + " '";
    }
    if(props.match.status === 5){
        let minutes = (ms / (1000 * 60)).toFixed(1);
        return parseInt(minutes) + " '";
    }
})
</script>
<style scoped>

</style>
