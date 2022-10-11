describe ("pow", function(){
  it("raises to n-th power", function(){
    assert.equal(pow(2,3),8);
    assert.equal(pow(3,4),81);
    assert.equal(pow(2,-1),0.5);
    assert.equal(pow(-2,3),-8);
  });
});

function pow(x, n) {
  return x**n;
}