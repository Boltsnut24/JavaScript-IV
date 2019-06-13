// CODE here for your Lambda Classes
class Person{
  constructor(info){
    this.name = info.name;
    this.location = info.location;
    this.age = info.age;
  }
  
  speak(){
    console.log(`Hello my name is ${this.name)', I am from '${this.location}`);
  }
}

class Student extends Person{

}

class Instructors extends Person{

}

class ProjectManager extends Instructors{

}