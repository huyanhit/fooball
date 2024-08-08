<template>
    <tr v-if="event.homeEvent === '1'" class="fw-bold">
        <td><span class="p-2 inline-block" v-html="stylePlayer(event.playerName)"></span></td>
        <td ><span class="p-2 inline-block" v-html="eventType[event.type]"></span></td>
        <td>
            <b><span class="p-2 inline-block text-red-500" >{{event.minute}} '</span></b>
        </td>
        <td></td>
        <td></td>
    </tr>
    <tr v-else class="fw-bold">
        <td></td>
        <td></td>
        <td>
            <b><span class="p-2 inline-block text-red-500">{{event.minute}} '</span></b>
        </td>
        <td ><span class="p-2 inline-block" v-html="eventType[event.type]"></span></td>
        <td><span class="p-2 inline-block" v-html="stylePlayer(event.playerName)"></span></td>
    </tr>
</template>

<script setup>
    const props = defineProps(['event'])
    const eventType = {
        1: '<i class="ri-football-fill text-green-500"></i>',
        2: '<i class="ri ri-rectangle-fill inline-block rotate-[100deg] text-red-500 fs-[20px]"></i>',
        3: '<i class="ri ri-rectangle-fill inline-block rotate-[100deg] text-yellow-500 fs-[20px]"></i>',
        7: '<i class="ri-git-commit-line text-gray-500"></i>',
        8: '<i class="ri-football-fill text-red-500"></i> Phản lưới nhà',
        9: '<i class="ri ri-rectangle-fill inline-block rotate-[100deg] text-yellow-500 fs-[20px]"></i>' +
           '<i class="ri ri-rectangle-fill inline-block rotate-[100deg] text-yellow-500 fs-[20px]"></i>',
        11: '<i class="ri-group-line text-blue-500"></i>',
        13: '<i class="ri-close-circle-line text-gray-500"></i> Hỏng phạt đền',
        14: '<i class="ri-vidicon-line text-gray-500"></i>'
    }
    const stylePlayer = function (name){
        name = name.replace('↑', '<i class="ri-arrow-up-line pl-1 pe-2 text-green-500"></i>');
        name = name.replace('↓', '<i class="ri-arrow-down-line pl-1 pe-2 text-red-500"></i>');

        return name
    }
</script>
