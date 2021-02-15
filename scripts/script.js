// Script.js

window.addEventListener('DOMContentLoaded', () => {
  // TODO
  /*fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .catch(error=>console.log(error))
  //console.log(response);*/
  if(localStorage.getItem('products')==null){
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
      //localStorage.setItem('items',data)
      //console.log(typeof data)
      localStorage.setItem('products',JSON.stringify(data))
      /*for (product of data){
        console.log(product)
      
      }*/
    })
    .catch(console.error);
  }
  
  //.then(data => localStorage.setItem('item',))
  

  
});