import { defineStore } from 'pinia';

export const useAppStore = defineStore('app', {
    state: () => ({
        mainLayout: 'app',
    }),
    actions: {
        setMainLayout(payload = null) {
            this.mainLayout = payload; //app , auth
        }
    },
    getters: {},
});
