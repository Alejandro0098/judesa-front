'use client'

export default class NewsService {
    
    static baseUrl = 'http://127.0.0.1:8000/api/v1/matches'

    static async getNextMatches() {
        const response = await fetch(`${this.baseUrl}/get_next_matches`)
        const data = await response.json()
        console.log(data)
        return data.data;
    }
}