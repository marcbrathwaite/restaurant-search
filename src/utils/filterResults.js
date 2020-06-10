// utility function filtering array of objects based on an array of specifications

const filterResults = (results, specs) => {
  return results.filter((result) => {
    return specs.some((spec) => spec.isSatisfied(result))
  })
}

export default filterResults