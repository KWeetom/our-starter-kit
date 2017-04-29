import {getProducts} from './api/products'
getProducts().then(result => {

  let prods = "";

  result.forEach(prod => {
    if (prod) {
      prods += `<tr>
      <td>${prod.id}</td>
      <td>${prod.name}</td>
      <td>${prod.desc}</td>
      </tr>
      `
    }
      global.document.getElementById('products').innerHTML = prods;

  });
});
