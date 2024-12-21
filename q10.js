class Car{
  constructor(make,model,year,status=true){
    this.make=make;
    this.model=model;
    this.year=year;
    this.isAvailable=status;
    this.introduce=function(){
      console.log(`${this.make}${this.model}${this.year}`)
    }
  }
  
}
class Customer extends Car{
  constructor(name){
    this.name=name;
    this.Rentedcar=[];
    super(make,model,year,status);
    this.rent=function(car){
      if(this.status){
        this.Rentedcar.push(car);
        this.status=false;
      }else{
        console.log(`car is already rented`);
    }
  };
  }
class Billing extends Customer{
  constructor(type,days){
    this.type=type;
    this.days=days;
    super(name,car);
    this.bill=function(){
      setTimeout(function(){
      if(this.type=="regular"){
        console.log(`Your bill is ${this.days*50}`);
        this.status=true;
      }else if(this.type=="premium"){
        console.log(`Your bill is ${(this.days*50)*0.9}`);
        this.status=true;
      }
    },2000);
  }
}
class Maintenance extends Car{
  constructor(car){
    super(make,model,year,status);
    this.maintain=function(){
      setTimeout(function() {
        this.status=true;
      }, 10000);
    }
  }
}
const mustang=new Car("Ford","SUV",2006);
mustang.introduce();
