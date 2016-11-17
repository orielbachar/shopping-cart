// an array with all of our cart items
var cart = [];

var CartItem = function(name, price){
  this.name = name;
  this.price = price;
}

var updateCart = function () {
  //  finish
  $('.cart-list').empty();
  source = $("#shopping-template").html();
  template = Handlebars.compile(source);
  $('.total').html('0');
  for (var i = 0; i<cart.length; i++){
    var newHTML = template(cart[i]);
    $('.cart-list').append(newHTML);
    $('.total').html(calcTotal());
  }
};

var calcTotal = function(){
  var total = 0;
  for (var i = 0; i<cart.length; i++){
    total += cart[i].price;
  }
  return total;
}


var addItem = function (item) {

  var itemExists = cart.indexOf(item);
  if(itemExists == -1){
    cart.push(item)
  }
  else{
    cart.item.quantity ++;
  }
}

$('.clear-cart').on("click", function(){
  clearCart();
});

var clearCart = function () {
  // TODO: finish
  $('.cart-list').empty();
  $('.total').html('0');
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
