class ApiClient {
  constructor(client) {
    this._client = client
  }

  async getRestaurants(city, page = 1, limit = 100) {
    const params = {
      city,
      page,
      per_page: limit
    }
    console.log(params)
    const res = await this._client.get('/restaurants', {
      params
    })
    return res.data
  }
}

export default ApiClient
