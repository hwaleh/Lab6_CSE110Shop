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
      //console.log(data)
      localStorage.setItem('products',JSON.stringify(data))
      let arr=JSON.parse(localStorage.getItem('products'))
      
      for(product of arr){
        console.log(typeof product.title)
        let tmpl = document.createElement('product-item')
        tmpl.title=product.title
        tmpl.price=product.price
        document.getElementById("product-list").append(tmpl)
        
        //tmpl.pimg.src=product.image
        
        //document.createElement()
        //console.log(product.title)
      }
      /*for (product of data){
        console.log(product)
      
      }*/
    })
    .catch(console.error);
  }
  
  //.then(data => localStorage.setItem('item',))
  

  
});