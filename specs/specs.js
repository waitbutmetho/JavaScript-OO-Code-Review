describe('Pizza', function() {
  it("create a pizza with all of a pizza's properties", function() {
    var testPizza = new Pizza('Deep Dish', 'Large', 'Fresh Monzzarella', 'Pepperoni', 'Bacon', 'Green Peppers');
    expect(testPizza.type).to.equal('Deep Dish');
    expect(testPizza.size).to.equal('Large');
    expect(testPizza.cheese).to.equal('Fresh Monzzarella');
    expect(testPizza.toppingOne).to.equal('Pepperoni');
    expect(testPizza.toppingTwo).to.equal('Bacon');
    expect(testPizza.toppingThree).to.equal('Green Peppers');
    expect(testPizza.price).to.equal();
  });
  it("adds the typeCharge method to all tickets", function() {
    var testPizza = new Pizza('Deep Dish', 'Large', 'Fresh Monzzarella', 'Pepperoni', 'Bacon', 'Green Peppers');
    expect(testPizza.typeCharge()).to.equal(2);
  });
  it("adds the sizeCharge method to all tickets", function() {
    var testPizza = new Pizza('Deep Dish', 'Large', 'Fresh Monzzarella', 'Pepperoni', 'Bacon', 'Green Peppers');
    expect(testPizza.sizeCharge()).to.equal(8);
  });
  it("adds the cheeseCharge method to all tickets", function() {
    var testPizza = new Pizza('Deep Dish', 'Large', 'Fresh Monzzarella', 'Pepperoni', 'Bacon', 'Green Peppers');
    expect(testPizza.cheeseCharge()).to.equal(1);
  });
});
