import ApiClient from '../ApiClient'

describe('ApiClient', () => {
  describe('#getRestaurants', () => {
    let client
    let city
    let apiClient
    let page
    let limit
    let path
    let options
    let response
    beforeEach(() => {
      response = {
        data: []
      }
      client = {
        get: jest.fn().mockImplementationOnce(() =>
          Promise.resolve(response)
        )
      }
      apiClient = new ApiClient(client)
      city = 'city'
      page = 1
      limit = 100
      path = '/restaurants'
      options = {
        params: {
          city,
          page,
          per_page: limit
        }
      }
    })
    it('should return a list of restaurant objects', async () => {
      const res = await apiClient.getRestaurants(city)
      expect(client.get).toHaveBeenCalledWith(path, options)
      expect(res).toEqual(response.data)
    })
  })
})
