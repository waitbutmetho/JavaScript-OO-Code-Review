// Business Logic
function Pizza(type, size, cheese, toppingOne, toppingTwo, toppingThree) {
this.type = type;
this.size = size;
this.cheese = cheese;
this.toppingOne = toppingOne;
this.toppingTwo = toppingTwo;
this.toppingThree = toppingThree;
}

Pizza.prototype.typeCharge = function() {
  if (this.type === 'Deep Dish') {
    return +2;
  } else if (this.type === 'Classic') {
    return +1;
  } else {
    return 0;
  }
}

Pizza.prototype.sizeCharge = function() {
  if (this.size === 'Extra Large') {
    return +10;
  } else if (this.size === 'Large') {
    return +8;
  } else if (this.size === 'Medium') {
    return +6;
  } else {
    return +4;
  }
}

Pizza.prototype.cheeseCharge = function() {
  if (this.cheese === 'Smoked Fresh Mozzarella') {
    return +2;
  } else if (this.cheese === 'Fresh Mozzarella') {
    return +1;
  } else {
    return 0;
  }
}

Pizza.prototype.toppingOneCharge = function() {
  if (this.toppingOne === 'None') {
    return 0;
  } else {
    return +1;
  }
}

Pizza.prototype.toppingTwoCharge = function() {
  if (this.toppingTwo === 'None') {
    return 0;
  } else {
    return +1;
  }
}

Pizza.prototype.toppingThreeCharge = function() {
  if (this.toppingThree === 'None') {
    return 0;
  } else {
    return +1;
  }
}

Pizza.prototype.getPrice = function() {
 return this.typeCharge() + this.sizeCharge() + this.cheeseCharge() + this.toppingOneCharge() + this.toppingTwoCharge() + this.toppingThreeCharge();
}

// User Interface Logic
$(document).ready(function() {
  var totalPrice = 0;

  $('form#choosePizza').submit(function(event) {
    event.preventDefault();

    var pizzaType = $('select#pizzaType').val();
    var pizzaSize = $('select#pizzaSize').val();
    var pizzaCheese = $('select#pizzaCheese').val();
    var pizzaToppingOne = $('select#toppingOne').val();
    var pizzaToppingTwo = $('select#toppingTwo').val();
    var pizzaToppingThree = $('select#toppingThree').val();
    var newPizza = new Pizza(pizzaType, pizzaSize, pizzaCheese, pizzaToppingOne, pizzaToppingTwo, pizzaToppingThree);
    var pizzaPrice = newPizza.getPrice();
    var pizzaCart = [];

    pizzaCart.push(newPizza);

    pizzaCart.forEach(function(pizza) {
      $('ul#pizzaInCart').append('<li>' + pizza.size + ', ' + pizza.type + ' $' + pizzaPrice + ' <br>Toppings: ' + pizza.cheese + ', ' + pizza.toppingOne + ', ' + pizza.toppingTwo + ', and ' + pizza.toppingThree + '</li>');
      return totalPrice += pizzaPrice;
    });
    $("div#price").text("Total: $" + totalPrice);
  });
  $('button#buy').click(function() {
    if(totalPrice) {
      alert("We recieved your order. Thank You!");
      location.reload();
    } else {
      alert("You have nothing in your cart to buy!");
    }

  });
});
