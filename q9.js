class Person{
  constructor(name,age){
    this.name=name;
    this.age=age;
    this.introduce=function(){
    console.log(`Hi, my name is ${name} and I am ${age} years old.`);
  }
  }
  
}
class Employee extends Person{
  constructor(name,age,jobtitle){
    super(name,age);
    this.jobtitle=jobtitle;
      this.work=function(){
    console.log(`${name} is  working as a ${this.jobtitle}`);
  }
  }

}

const p1=new Person("Saran",26);
p1.introduce();
const p2=new Employee("Saran",26,"Developer");
p2.work();
