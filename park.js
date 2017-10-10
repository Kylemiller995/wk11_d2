var Park = function () {
  this.pen = [];
}


Park.prototype.add = function(dinosaur){
  this.pen.push(dinosaur);
}

Park.prototype.remove = function(type){
  for (i = this.pen.length-1; i >= 0; i-- ){
    if(this.pen[i].type === type){
      this.pen.splice(i, 1);
    }
  }
}

Park.prototype.getShaggers = function () {
  var shaggers = [];
  for( var i = 0; i < this.pen.length; i++){
    if( this.pen[i].offspring >=2 ) {
      shaggers.push(this.pen[i]);
    }
  }
  return shaggers
}

Park.prototype.plotBabiessingle = function (dino, year) {
  return (dino.offspring+1)**year
}

Park.prototype.plotBabies = function (year){
  var babycount = 0
  for( dino of this.pen ) {
    babycount += (dino.offspring+1)**year
  }
  return babycount
}

module.exports = Park;
