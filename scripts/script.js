// Script.js

window.addEventListener('DOMContentLoaded', () => {
  // TODO
  /*fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .catch(error=>console.log(error))
  //console.log(response);*/

  fetch('https://fakestoreapi.com/products')
  .then(response =>localStorage.setItem('products', JSON.stringify(response)))
  //.then(data => localStorage.setItem('item',))
  

  .catch(console.error);
});