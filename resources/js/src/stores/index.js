import { defineStore } from 'pinia';
import apiService from "@/composables/use-api";

export const useAppStore = defineStore('app', {
    state: () => ({
        mainLayout: 'app',
        country: [],
        league: [],
        bookmaker: [],
        schedule: [],
        result: [],
        livescore: [],
    }),
    actions: {
        setMainLayout(payload = null) {
            this.mainLayout = payload;
        },
        async getLeague(params) {
            this.league = await apiService.callApi({method: 'get', url: 'league', param:params});
        },
        async getSchedule(params) {
            this.schedule = await apiService.callApi({method: 'get', url: 'schedule', param:params});
        },
        async getLiveScore(params) {
            this.livescore = await apiService.callApi({method: 'get', url: 'livescore', param:params});
        }
    },
    getters: {

    },
});
