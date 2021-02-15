// Script.js

window.addEventListener('DOMContentLoaded', () => {
  // TODO
  fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .catch(error=>console.log(error))
  //console.log(response);

});