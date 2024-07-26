import { defineStore } from 'pinia';
import apiService from "@/composables/use-api";

export const useAppStore = defineStore('app', {
    state: () => ({
        mainLayout: 'app',
        country: [],
        league: [],
        league_profile: [],
        bookmaker: [],
        schedule: [],
        result: [],
        livescore: [],
    }),
    actions: {
        setMainLayout(payload = null) {
            this.mainLayout = payload;
        },
        async getLeague(params = null) {
            this.league = await apiService.callApi({method: 'get', url: 'league', param:params});
        },
        async getLeagueProfile(params = null) {
            this.league_profile = await apiService.callApi({method: 'get', url: 'league-profile', param:params});
        },
        async getSchedule(params = null) {
            this.schedule = await apiService.callApi({method: 'get', url: 'schedule', param:params});
        },
        async getLiveScore(params = null) {
            this.livescore = await apiService.callApi({method: 'get', url: 'live-score', param:params});
        }
    },
    getters: {

    },
});
