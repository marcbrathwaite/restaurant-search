import RestaurantManager from '../RestaurantManager'

describe('Restaurant Manager', () => {
  describe('#getRestaurants', () => {
    let restaurantManager
    let apiClient
    let city
    let page
    beforeEach(() => {
      apiClient = {
        getRestaurants: jest.fn().mockImplementationOnce(() =>
          Promise.resolve({
            total_entries: 20,
            current_page: 1,
            per_page: 25,
            restaurants: [
              {
                id: 'id',
                name: 'name',
                address: 'address',
                price: 'price',
                area: 'area',
                image_url: 'image_url',
                test: 'test'
              }
            ]
          })
        )
      }
      restaurantManager = new RestaurantManager(apiClient)
      city = 'city'
      page = 1
    })
    it('should return a list of restaurant objects', async () => {
      const res = await restaurantManager.getRestaurants(city)
      expect(apiClient.getRestaurants).toHaveBeenCalledWith(city, page)
      expect(res).toEqual([
        {
          id: 'id',
          name: 'name',
          address: 'address',
          price: 'price',
          area: 'area',
          image_url: 'image_url'
        }
      ])
    })
  })
})
