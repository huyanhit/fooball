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
        odd: []
    }),
    actions: {
        setMainLayout(payload = null) {
            this.mainLayout = payload;
        },
        async getLeague(params = null) {
            const response = await apiService.callApi({method: 'get', url: 'league', param:params});
            if(response.code === 0) this.league = response.data
        },
        async getLeagueProfile(params = null) {
            const response = await apiService.callApi({method: 'get', url: 'league-profile', param:params});
            if(response.code === 0) this.league_profile = response.data
        },
        async getSchedule(params = null) {
            const response = await apiService.callApi({method: 'get', url: 'schedule', param:params});
            if(response.code === 0) this.schedule = response.data
        },
        async getLiveScore(params = null) {
            const response = await apiService.callApi({method: 'get', url: 'live-score', param:params});
            if(response.code === 0) this.livescore = response.data
        },
        async getOdds(params = null) {
            const response = await apiService.callApi({method: 'get', url: 'odds', param:params});
            if(response.code === 0) this.odd = response.data
        },
        async getBookmaker(params = null) {
            const response = await apiService.callApi({method: 'get', url: 'bookmaker', param:params});
            if(response.code === 0) this.bookmaker = response.data
        }
    },
    getters: {

    },
});
