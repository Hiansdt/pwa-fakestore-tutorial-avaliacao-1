import { ref } from "vue"
import { defineStore } from "pinia";
import ManufactorService from "@/service/manufactor";

const manufactorService = new ManufactorService()

export const useManufactorStore = defineStore('manufactor', () => {
    const manufactorers = ref([])

    async function getManufactorers() {
        manufactorers.value = await manufactorService.getManufactorers()
    }

    async function createManufactor(manufactor) {
        await manufactorService.createManufactor(manufactor)
        getManufactorers()
    }

    async function deleteManufactor(manufactor_id) {
        await manufactorService.deleteManufactor(manufactor_id)
        getManufactorers()
    }

    return { manufactorers, getManufactorers, createManufactor, deleteManufactor }
})