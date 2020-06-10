// Specification used to compare the name field of a restaurant to an input
export class NameSpecification {
  constructor(name) {
    this.name = name
  }

  isSatisfied(restaurant) {
    return this.name === ''
      ? true
      : restaurant.name
          .trim()
          .toLowerCase()
          .includes(this.name.trim().toLowerCase())
  }
}

// Specification used to compare the address field of a restaurant to an input
export class AddressSpecification {
  constructor(address) {
    this.address = address
  }

  isSatisfied(restaurant) {
    return this.address === ''
      ? true
      : restaurant.address
          .trim()
          .toLowerCase()
          .includes(this.address.trim().toLowerCase())
  }
}

// Specification used to compare the area field of a restaurant to an input
export class AreaSpecification {
  constructor(area) {
    this.area = area
  }

  isSatisfied(restaurant) {
    return this.area === ''
      ? true
      : restaurant.area
          .trim()
          .toLowerCase()
          .includes(this.area.trim().toLowerCase())
  }
}