//size int(inches) temper bool
function Spider(species, name, age, size, temper){
  this.species = species;
  this.name = name;
  this.age = age;
  this.size = size;
  this.temper = temper;
  this.health = age * 2;

  this.isDangerous = function(){
    if(this.temper === true  && age >= 2){
      console.log('Step back from the ' + this.species + ' spider now!')
    }
  }

  this.attackPower = function(){
    var power = this.age + (this.size/2)
    if(this.temper == true){
      power += 1
    }
    console.log(this.species + ' attack is ' + power)
  }
}

//add prototype to the spider constructor
Spider.prototype.canKill = function(){
 if(this.size >= 20 && this.species == 'Black Widow'){
    console.log('This spider can indeed kill you')
  }
  //console.log('can kill')
}

var blackWidow = new Spider('Black Widow', 'Lola', 3, 44, true)
var wolfSpider = new Spider('Wolf Spider', 'SheBitch', 5, 32, false)
var redBack = new Spider('Red Back Spidier', 'Butch', 1, 15, false)

wolfSpider.attackPower()
//console.log(blackWidow)

//another cool function would be to have the spiders fight each another
//to do this id make a new fight function and pass in the objects to access their properties
