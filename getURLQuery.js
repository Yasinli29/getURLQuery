function getURLQuery(url) {
  let query = url ? url.split('?')[1] : window.location.toString().split('?')[1]
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
