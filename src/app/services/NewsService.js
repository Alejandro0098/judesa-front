'use client'

export default class NewsService {
    
    static baseUrl = 'http://127.0.0.1:8000/api/v1'


    static async getAllNews() {
        const response = await fetch(`${this.baseUrl}/news/`)
        const data = await response.json()
        console.log(data)
        return data;
    }

    static async getNewById(id) {
        try {
            const response = await fetch(`${this.baseUrl}/new/${id}/`)
            const data = await response.json()
            if (!data.ok) {
                throw new Error("Couldnt connect to backend: ", data)
            }
            return data.data;
        } catch (error){
            throw new Error("Couldnt connect to backend:" + error.toString())
        }
    }

    static async getSponsors() {
        const response = await fetch(`${this.baseUrl}/sponsors/`)
        const data = await response.json()
        console.log(data)
        return data.data;
    }
    
    static async getHomeData() {
        const response = await fetch(`${this.baseUrl}/home/`)
        const data = await response.json()
        console.log(data)
        return data.data;
    }

    static async getCategories() {
        const response = await fetch(`${this.baseUrl}/categories/`)
        const data = await response.json()
        console.log(data)
        return data.categories;
    }

    static async getCategoryById(id) {
        const response = await fetch(`${this.baseUrl}/category/${id}`)
        const data = await response.json()
        console.log(data)
        return data.data;
    }

    // static async insertRandomStuff(thing) {
    //     const query = `INSERT INTO test VALUES ('${thing}');`
    //     const client = await this.connection.connect();
    //     const res = await client.query(query);
    //     const response = res.rows;
    //     client.release();
    //     return response
    // }

}