import { defineStore } from 'pinia';
import apiService from "@/composables/use-api";

export const useAppStore = defineStore('app', {
    state: () => ({
        mainLayout: 'app',
        countries: [],
        leagues: [],
        league_profiles: [],
        bookmakers: [],
        schedules: [],
        live_scores: [],
        odds: [],
        odds_change: [],
        odds_match: {},
        files: {},
        events: {},
        systems: {
            time: new Date().getTime()/1000,
        },

        page_show: 1,
        is_status: '',
        statuses: [1,2,3,4,5],
        keyword: '',
        likes: [],
        bookmaker: {
            companyIdMain: '23',
            companyName: '118bet'
        },
    }),
    actions: {
        setMainLayout(payload = null) {
            this.mainLayout = payload;
        },
        async getTeam(id, params = null) {
            return await apiService.callApi({method: 'get', url: 'teams/'+id, param: params});
        },
        async getLeague(params = null) {
            if(this.leagues.length === 0){
                const response = await apiService.callApi({method: 'get', url: 'league', param: params});
                if (response.code === 0) this.leagues = response.data
            }
        },
        async getLeagueProfile(params = null) {
            if(this.league_profiles.length === 0){
                const response = await apiService.callApi({method: 'get', url: 'league-profile', param:params});
                if(response.code === 0) this.league_profiles = response.data
            }
        },
        async getSchedule(params = null) {
            if(this.schedules.length === 0) {
                const response = await apiService.callApi({method: 'get', url: 'schedule', param: params});
                if (response.code === 0) this.schedules = response.data
            }
        },
        async getBookmaker(params = null) {
            if(this.bookmakers.length === 0) {
                const response = await apiService.callApi({method: 'get', url: 'bookmaker', param: params});
                if (response.code === 0) this.bookmakers = response.data
            }
        },
        async getLiveScore(params = null) {
            const response = await apiService.callApi({method: 'get', url: 'live-score', param:params});
            if(response.code === 0) {
                this.live_scores = {...this.live_scores, ...response.data}
                this.systems     = response.system
            }
        },
        async getLiveScoreChange(params = null) {
            const response = await apiService.callApi({method: 'get', url: 'live-score-change', param:params});
            if(response.code === 0) {
                this.live_scores = {...this.live_scores, ...response.data}
                this.systems     = response.system
            }
        },
        async getOdds(params = null) {
            const response = await apiService.callApi({method: 'get', url: 'odds-detail', param:params});
            if(response.code === 0) {
                if(params && params.matchId){
                    this.odds = {...this.odds, ...response.data}
                }else{
                    this.odds = {...this.odds, ...response.data}
                }
            }
        },
        async getEvents(params = null) {
            const response = await apiService.callApi({method: 'get', url: 'events', param:params});
            if(response.code === 0) {
                if(params && params.matchId){
                    this.events = {...this.events, ...response.data}
                }else{
                    this.events = {...this.events, ...response.data}
                }
            }
        },
        async getOddChange(params = null) {
            const response = await apiService.callApi({method: 'get', url: 'odds-change', param:params});
            if(response.code === 0) {
                if(params && params.matchId){
                    this.odds = {...this.odds, ...response.data}
                }else{
                    this.odds = {...this.odds, ...response.data}
                }
            }
        }
    },
    getters: {},
});
