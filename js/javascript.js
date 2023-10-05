let totalPrice = 0;
const displayPrices=document.getElementById('display_Prices');

function addToCardHandleClick(target){
      const boxItems=document.getElementById('items-box');
      const productPrices =target.parentNode.parentNode.childNodes[5].childNodes[1].innerText;
      const mainPrice = parseFloat(productPrices);
      
      totalPrice += mainPrice;
      console.log(displayPrices)
      displayPrices.innerText= totalPrice
      const itemsNames  =target.parentNode.parentNode.childNodes[3].innerText;
      const h1 = document.createElement('h1');
      h1.innerText = itemsNames;
      boxItems.appendChild(h1);
      const boxItemsPrices = document.getElementById('items-box-price');
      const PriceItemsNames =target.parentNode.parentNode.childNodes[5].innerText;
   
      const li =document.createElement('li');
      li.innerText = PriceItemsNames;
      boxItemsPrices.appendChild(li);




      
      


}

