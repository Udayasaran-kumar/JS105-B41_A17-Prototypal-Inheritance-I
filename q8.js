class Animal{
  constructor(name){
    this.Animal=name;
  }
  sound(){
    console.log(`${this.Animal} sound`);
  }
}
class Dog extends Animal{
  constructor(name,sound){
    super(name);
    this.sound=sound;
  }
  sound(){
    console.log(`${this.sound}`);
  }
}

const myDog=new Dog("Dog","Bark");
console.log(myDog.sound);
