// an array with all of our cart items
var cart = [];

var CartItem = function(name, price){
  this.name = name;
  this.price = price;
}

var updateCart = function () {
  //  finish

  source = $("#shopping-template").html();
  template = Handlebars.compile(source);

  for (var i = 0; i<cart.length; i++){
    var newHTML = template(cart[i]);
  }
  $('.cart-list').append(newHTML);
};


var addItem = function (item) {
  cart.push(item);
}

var clearCart = function () {
  // TODO: finish
}

$('.view-cart').on('click', function () {
  $('.shopping-cart').toggle();
});

$('.add-to-cart').on('click', function () {
  //  get the "item" object from the page
  var target = $(this).closest("div[item]").data();
  var item = new CartItem(target.name, target.price);
  addItem(item);
  updateCart();
});

$('.clear-cart').on('click', function () {
  clearCart();
});

// update the cart as soon as the page loads!
updateCart();
