describe('Pizza', function() {
  it("create a pizza with all of a pizza's properties", function() {
    var newPizza = new Pizza('Deep Dish', 'Large', 'Fresh Monzzarella', 'Pepperoni', 'Bacon', 'Green Peppers');
    expect(newPizza.type).to.equal('Superman');
    expect(newPizza.size).to.equal('Morning');
    expect(newPizza.cheese).to.equal('Adult');
    expect(newPizza.toppingOne).to.equal('Pepperoni');
    expect(newPizza.toppingTwo).to.equal('Bacon');
    expect(newPizza.toppingThree).to.equal('Green Peppers');
    expect(newPizza.price).to.equal();
  });
});
