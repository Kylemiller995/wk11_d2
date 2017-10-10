var assert = require("assert");
var Park = require("../park");
var Dinosaur = require("../dinosaur");

describe("Park", function(){
  var park
  var dinosaur1
  var dinosaur2
  var dinosaur3
  var dinosaur4
  var dinosaur5

  beforeEach(function(){
    dinosaur1 = new Dinosaur("butthead", 2);
    dinosaur2 = new Dinosaur("butthead", 1);
    dinosaur3 = new Dinosaur("stegasoreass", 4);
    dinosaur4 = new Dinosaur("stegasoreass", 3);
    dinosaur5 = new Dinosaur("lol", 2);
    park = new Park();
  })
  it("can add to pen", function () {
    park.add(dinosaur1)
    assert.strictEqual(park.pen.length, 1);
  })
  it("can remove all type", function (){
    park.add(dinosaur1);
    park.add(dinosaur2);
    park.add(dinosaur3);
    park.add(dinosaur4);
    park.remove("butthead");
    assert.strictEqual(park.pen.length, 2);
  })
  it("can get shaggers",function () {
    park.add(dinosaur1);
    park.add(dinosaur2);
    park.add(dinosaur3);
    park.add(dinosaur4);
    var shaggers = park.getShaggers();
    assert.strictEqual(shaggers.length,3);
  })
  it("can plot dinosaur babies", function () {
    assert.strictEqual(park.plotBabiessingle(dinosaur1, 2), 9)
  })
  it("can plot multiple dinos babies", function () {
    park.add(dinosaur1);
    park.add(dinosaur2);
    assert.strictEqual(park.plotBabies(1), 5)
  })
})


// function sum(){
//   var total = 0;
//   for ( var i=0; i < arguments.length; i++){
//     total += arguments[i];
//   }
//   return total;
// }
//
