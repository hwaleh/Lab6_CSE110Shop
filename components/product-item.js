// product-item.js

class ProductItem extends HTMLElement {
  // TODO
  constructor(){
    super();
    let template = document.getElementById('product-item');
    //let templateContent = template.content;

    const shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.innerHTML = `
      <style> <link rel="stylesheet" href="./styles/styles.css"> </style>
      <li class="product">
        <img id="pimg" src="" alt="Fjallraven - Foldstack No. 1 Backpack, Fits 15 Laptops" width=200>
        <p class="title" value=""></p>
        <p class="price" value=""></p>
        <button onclick="alert('Added to Cart!')">Add to Cart</button>
       </li>
    `;
    
    /*const shadowRoot = this.attachShadow({mode: 'open'})
      .appendChild(templateContent.cloneNode(true));*/
  }
  /*setTitle(string){
    this.setTitle(string)
  }*/
}

customElements.define('product-item', ProductItem);