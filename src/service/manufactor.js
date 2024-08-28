import axios from "axios"

export default class ManufactorService {
    async getManufactorers() {
        const response = await axios.get('/manufactures/')
        return response.data.results
    }

    async createManufactor(category) {
        const response = await axios.post('/manufactures/', category)
        return response.data
    }

    async deleteManufactor(category_id) {
        await axios.delete(`/manufactures/${category_id}`)
    }
}