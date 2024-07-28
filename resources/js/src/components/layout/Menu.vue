<template>
    <ul class="nav nav-tabs nav-tabs-custom nav-success bg-white mt-1 p-2" role="tablist">
        <li class="nav-item" role="presentation">
            <router-link class="nav-link py-1 " :class="{active: route.name === 'live-score'}"  to="live-score" >
                <i class="ri-live-line me-1"></i> Livescore
            </router-link>
        </li>
        <li class="nav-item" role="presentation">
            <router-link class="nav-link py-1 "   to="favorites" >
                <i class="ri-heart-2-line me-1"></i> Yêu thích
            </router-link>
        </li>
        <li class="nav-item" role="presentation">
            <router-link class="nav-link py-1 "  to="results" >
                <i class="ri-bubble-chart-line  me-1"></i> Kết quả
            </router-link>
        </li>
        <li class="nav-item" role="presentation">
            <router-link class="nav-link py-1 " to="schedule" role="tab" aria-selected="true">
                <i class="ri-calendar-schedule-line me-1"></i> Lịch đấu
            </router-link>
        </li>
        <li class="nav-item" role="presentation">
            <router-link class="nav-link py-1 " to="tip" >
                <i class="ri-chat-quote-line me-1"></i> Nhận định
            </router-link>
        </li>
        <li class="nav-item" role="presentation">
            <router-link class="nav-link py-1 " to="community" >
                <i class="ri-group-line me-1"></i> Cộng đồng
            </router-link>
        </li>
        <li class="nav-item" role="presentation">
            <router-link class="nav-link py-1 " to="statistics" >
                <i class="ri-donut-chart-line me-1"></i> Thống kê
            </router-link>
        </li>
    </ul>
</template>
<script setup>
import {useRoute, useRouter} from "vue-router";

    const route = useRoute()
</script>
<style scoped>

</style>
