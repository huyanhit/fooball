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
        odd: [],
        files: {},

        page_show: 1,
        is_status: '',
        statuses: [1,2,3,4,5],
        keyword: '',
        likes: [],
    }),
    actions: {
        setMainLayout(payload = null) {
            this.mainLayout = payload;
        },
        async getTeam(id, params = null) {
            return await apiService.callApi({method: 'get', url: 'teams/'+id, param: params});
        },
        async getLeague(params = null) {
            if(this.league.length === 0){
                const response = await apiService.callApi({method: 'get', url: 'league', param: params});
                if (response.code === 0) this.league = response.data
            }
        },
        async getLeagueProfile(params = null) {
            if(this.league_profile.length === 0){
                const response = await apiService.callApi({method: 'get', url: 'league-profile', param:params});
                if(response.code === 0) this.league_profile = response.data
            }
        },
        async getSchedule(params = null) {
            if(this.schedule.length === 0) {
                const response = await apiService.callApi({method: 'get', url: 'schedule', param: params});
                if (response.code === 0) this.schedule = response.data
            }
        },
        async getBookmaker(params = null) {
            if(this.bookmaker.length === 0) {
                const response = await apiService.callApi({method: 'get', url: 'bookmaker', param: params});
                if (response.code === 0) this.bookmaker = response.data
            }
        },
        async getLiveScore(params = null) {
            const response = await apiService.callApi({method: 'get', url: 'live-score', param:params});
            if(response.code === 0) this.livescore = response.data
        },
        async getOdds(params = null) {
            const response = await apiService.callApi({method: 'get', url: 'odds', param:params});
            if(response.code === 0) {
                this.odd = response.data
            }
        },
    },
    getters: {

    },
});
