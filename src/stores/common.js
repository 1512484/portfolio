import { defineStore } from 'pinia'

export const useCommonStore = defineStore('common', {
    state: () => ({
        activeView: { id: 1, title: "Profile", value: "profile" },
        activeTab: { id: 1, title: "UI/UX" }
    }),
    actions: {
        setView(view) {
            this.activeView = view;
        },
        setTab(tab) {
            this.activeTab = tab;
        }
    }
})