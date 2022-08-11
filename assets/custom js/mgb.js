
// Create Array of Items
const cart = [];
const price = [];

const btn = document.querySelectorAll(".addItem");

    for (const element of btn) {
      element.addEventListener("click", () => {
        const amt = Number(element.getAttribute("data-amt"));
        const qty = Number(element.getAttribute("data-qty"));
        const desc = element.getAttribute("data-desc");
        addToCart(amt, qty);       
      });
    }

 // Add to Cart Function
 addToCart = (amt, qty) => {
    price.push(amt);
    cart.push(qty);

    let totalAmt = 0;
    let totalQty = 0;

    // Get the total amount
    
    for (const element of price) {
      totalAmt += element;
    }

    // Get the total quantity
    for (const element of cart) {
      totalQty += element;
    }

    // Parse Total Amount to have decimal point rounded into zero
    totalAmt = Number.parseFloat(totalAmt).toFixed(2);

    //   Display Total Number of Item(cart) 
    document.getElementsByClassName('total-cart')[0].innerHTML = totalQty;    
  };


// Add Products (card) function
const  addItemCard = function(){
    let today = new Date();
    let min = today.getMinutes() ;

    let cardPrice = document.getElementById("price").value;  
    let cardDesciption = document.getElementById("description").value;
    let cardOtherInformation = document.getElementById("otherInformation").value;
    let cardTimeUpdate = "Last updated " + min + " mins ago";
    let cardImage = "assets/images/bg-img/toyota-bg.webp";

    
    document.getElementById("divCard").innerHTML += 
    "<div class='col-md-3' >" +
    
    "<div class='card'>" +

        `<img src='${cardImage}' class='card-img-top' alt='...' />` +

        "<div class='card-body'>" +
            `<h5 class='card-title'>Php ${cardPrice}</h5>` +
            `<p class='card-text'>${cardDesciption}</p>` +
            `<p class='card-text'>${cardOtherInformation}</p>` +

            `<p class='card-text'> <small class='text-muted'>${cardTimeUpdate}</small></p>` +
            
            `<a href='#' id='btn' data-desc=${cardDesciption} data-amt=${cardPrice} data-qty='1' class='addItem btn btn-primary form-control' >Add to Cart </a>` +

        "</div>" +
    "</div>" +
    "</div>" ;
}
