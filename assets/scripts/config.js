'use strict'

let apiUrl
const apiUrls = {
  production: 'https://serene-caverns-93671.herokuapp.com',
  development: 'http://localhost:4741'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
  // apiUrl = apiUrls.production

} else {
  apiUrl = apiUrls.production
  // apiUrl = apiUrls.development

}

module.exports = {
  apiUrl
}
