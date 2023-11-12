import { defineStore } from 'pinia'
import axios from 'axios';

const API = "https://devtwit8.ru/api/v1/page/?path="


export const useStore = defineStore('state', {
    state: () => ({
        data: null,
        loading: true,
        error: null,
        pageType: ""
    }),
    actions: {
        getTemplate(path: string) {
            this.loading = true
            axios.get(`${API}${path}`).then((r) => {
                this.loading = false
                this.data = r.data
                this.pageType = r.data.page_type
            }).catch((err) => {
                this.error = err
            }).finally(() => {
                this.loading = false
            });
        }

    },
})