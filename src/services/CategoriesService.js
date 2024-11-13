'use client'

export default class CategoriesService {
    
    static categoriesBaseUrl = 'http://127.0.0.1:8000/api/v1/categories'
    static singleCategoryBaseUrl = 'http://127.0.0.1:8000/api/v1/category'

    static async getCategories() {
        const response = await fetch(`${this.categoriesBaseUrl}/`)
        const data = await response.json()
        console.log(data)
        return data.categories;
    }

    static async getCategoryById(id) {
        const response = await fetch(`${this.singleCategoryBaseUrl}/${id}/`)
        const data = await response.json()
        console.log(data)
        return data.data;
    }
}