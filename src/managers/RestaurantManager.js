// FIXME: remove this
import mockRes from './mock'
class RestaurantManager {
  constructor(apiClient) {
    this._apiClient = apiClient
  }

  async getRestaurants(city) {
    // TODO: Uncomment
    // let page = 1
    // const restaurantRes = []
    // let numOfRetrievedRes
    // let totalEntries
    // do {
    //   const {
    //     total_entries,
    //     current_page,
    //     per_page,
    //     restaurants
    //   } = await this._apiClient.getRestaurants(city, page)
    //   // push results
    //   restaurantRes.push(...restaurants)
    //   // Get max possible num of results received so far
    //   numOfRetrievedRes = current_page * per_page
    //   totalEntries = total_entries
    //   // increment page by 1
    //   page = current_page + 1
    // } while (numOfRetrievedRes < totalEntries)

    // return restaurantRes.map(({ id, name, address, price, area, image_url }) => ({
    //   id,
    //   name,
    //   address,
    //   price,
    //   area,
    //   image_url
    // }))
    //FIXME: remove
    return mockRes
  }
}

export default RestaurantManager
