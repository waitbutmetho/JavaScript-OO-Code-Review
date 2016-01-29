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
  } else if (this.type === 'Regular') {
    return +1;
  } else {
    return 0;
  }
}
