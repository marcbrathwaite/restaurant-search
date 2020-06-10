import filterResults from '../filterResults'
import {
  NameSpecification,
  AddressSpecification,
  AreaSpecification
} from '../specifications'

describe('filterResults', () => {
  let input
  let nameSpec
  let addressSpec
  let areaSpec
  beforeEach(() => {
    input = 'test'
    nameSpec = new NameSpecification(input)
    addressSpec = new AddressSpecification(input)
    areaSpec = new AreaSpecification(input)
  })
  it('should filter an input array based on specifications', () => {
    const results = [{
      id: 1,
      name: input
    },
      {
        id: 2,
      name: 'foo'
      },
      {
        id: 3,
        area: input
      }
    ]
    const output = filterResults(results, [nameSpec, addressSpec, areaSpec])
    expect(output).toEqual([
      {
        id: 1,
        name: input
      },
      {
        id: 3,
        area: input
      }
    ])
  })
})