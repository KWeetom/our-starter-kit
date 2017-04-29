import 'whatwg-fetch'; //this is what is fetching the data from db
import getBaseUrl from './base_url';

const baseUrl = getBaseUrl();

export function getProducts() {
  return get('products.json');
}

function get(url) {
  return fetch(baseUrl + url).then(onSuccess, onError);
}

function onSuccess(response) {
  return response.json();
}

function onError(error) {
  console.log(error); // eslint-disable-line no-console
}
