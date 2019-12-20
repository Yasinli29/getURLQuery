function getURLQuery() {
  let query = window.location.search.substr(1);
  let queryObj = {}
  if (query) {
    let arr = query.split('&');
    for (let i of arr) {
      queryObj[i.split('=')[0]] = i.split('=')[1]
    }
  }
  return queryObj
}
export default getURLQuery;